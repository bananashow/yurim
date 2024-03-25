import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@tanstack/react-query';
import { CardInfo } from '../../types/card';
import { theme } from '../../styles/theme';
import { DragDrop } from '../common/DragDrop';
import { addPost, editPost } from '../../api/post';
import { queryClient } from '../../api/queryClient';
import { QUERY_KEY } from '../../constants/api';

interface PostModalProps {
  isOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedData: CardInfo;
  category: string;
}

export const PostModal = ({ isOpen, setModalOpen, selectedData, category }: PostModalProps) => {
  const [sendFileList, setSendFileList] = useState<string[]>(selectedData.images);

  const handleClose = () => {
    setModalOpen(false);
    deleteStorageImageMutation.mutate();
  };

  const handleFileList = (isSend: string[]) => {
    setSendFileList(isSend);
  };

  const addMutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_HOME_INTERIOR] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_POST_DETAIL] });
    },
  });

  const editMutation = useMutation({
    mutationFn: editPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_HOME_INTERIOR] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_POST_DETAIL] });
    },
  });

  const deleteStorageImageMutation = useMutation({});

  const handleEditOrAdd = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const target = e.target as typeof e.target & {
      maintitle: { value: string };
      project: { value: string };
      site: { value: string };
      area: { value: string };
      keyword: { value: string };
      title: { value: string };
      content: { value: string };
    };

    const formData = {
      main_title: target.maintitle.value,
      project: target.project.value,
      site: target.site.value,
      area: target.area.value,
      keyword: target.keyword.value,
      title: target.title.value,
      content: target.content.value,
      images: sendFileList,
    };

    if (selectedData.type === 'edit') {
      if (confirm('정말 수정할까요?')) {
        editMutation.mutate({ type: category, postId: selectedData.id, updateData: formData });
      } else return false;
    } else {
      if (confirm('게시물을 등록할까요?')) {
        addMutation.mutate({ type: category, formData: formData });
      } else return false;
    }
    handleClose();
  };

  let formatedCategory;

  switch (category) {
    case 'home_interior':
      formatedCategory = '주거 공간';
      break;
    case 'store_interior':
      formatedCategory = '상업 공간';
      break;
    case 'point_interior':
      formatedCategory = '포인트 디자인';
      break;
    default:
      formatedCategory = 'home_interior';
      break;
  }

  return (
    <PostModalContainer>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <form onSubmit={handleEditOrAdd}>
          <DialogTitle id="scroll-dialog-title">
            <span className="category" style={{ textAlign: 'right', fontSize: '14px', color: theme.colors.darkGreen }}>
              {formatedCategory}
            </span>
            <MainTitleInput
              type="text"
              name="maintitle"
              placeholder="메인 제목을 입력하세요"
              defaultValue={selectedData.main_title}
            />
          </DialogTitle>
          <DialogContent>
            <StyledImageContainer>
              <DragDrop category={category} handleFileList={handleFileList} initialImages={selectedData.images} />
            </StyledImageContainer>
            <DialogContentText
              id="scroll-dialog-description"
              className="align"
              tabIndex={-1}
              sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '24px' }}
            >
              <StyledInput defaultValue={selectedData.project} type="text" name="project" placeholder="ex) APT" />
              <StyledInput
                defaultValue={selectedData.site}
                type="text"
                name="site"
                placeholder="ex) 김해시 삼계로 232"
              />
              <StyledInput defaultValue={selectedData.area} type="number" name="area" placeholder="ex) 32" />
              <StyledInput
                defaultValue={selectedData.keyword}
                type="text"
                name="keyword"
                placeholder="ex) 모던, 심플"
              />
            </DialogContentText>
            OVERVIEW
            <DialogContentText
              id="scroll-dialog-description"
              tabIndex={-1}
              sx={{ display: 'grid', gap: '8px', marginTop: '8px' }}
            >
              <StyledInput defaultValue={selectedData.title} type="text" name="title" placeholder="제목을 입력하세요" />
              <StyledTextArea defaultValue={selectedData.content} name="content" placeholder="내용을 입력하세요" />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {selectedData.type !== 'edit' ? <Button type="submit">등록</Button> : <Button type="submit">수정</Button>}
            <Button onClick={handleClose}>닫기</Button>
          </DialogActions>
        </form>
      </Dialog>
    </PostModalContainer>
  );
};

const PostModalContainer = styled.div`
  width: 100%;
`;

const MainTitleInput = styled.input`
  width: 100%;
  font-size: 1.5rem;
  border: none;
  outline: none;
  background-color: transparent;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 0.8rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  background-color: transparent;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  font-size: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5rem;
  resize: vertical;
  outline: none;
  resize: none;
  line-height: 21px;
`;

const StyledImageContainer = styled.div`
  position: relative;
  width: 100%;
  min-width: 500px;
  height: auto;
  cursor: pointer;
  margin-bottom: 24px;

  .attachment {
    width: 100%;
    height: 80px;
    border: 1px solid ${(props) => props.theme.colors.gray}90;
    border-radius: 6px;
    margin-bottom: 12px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
