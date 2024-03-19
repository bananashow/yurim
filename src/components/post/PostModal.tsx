import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@tanstack/react-query';
import { CardInfo } from '../../types/card';
import { theme } from '../../styles/theme';

interface PostModalProps {
  isOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedData: CardInfo;
  category: string;
}

export const PostModal = ({ isOpen, setModalOpen, selectedData, category }: PostModalProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [newImageUrl, setNewImageUrl] = useState<string>('');

  const handleClose = () => {
    setModalOpen(false);
    deleteStorageImageMutation.mutate();
  };

  const AddMutation = useMutation({});

  const editMutation = useMutation({});

  const deleteStorageImageMutation = useMutation({});

  const handleEditOrAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      maintitle: { value: string };
      project: { value: string };
      site: { value: string };
      area: { value: string };
      keyword: { value: string };
      title: { value: string };
      content: { value: string };
    };
    const mainTitle = target.maintitle.value;
    const project = target.project.value;
    const site = target.site.value;
    const area = target.area.value;
    const keyword = target.keyword.value;
    const title = target.title.value;
    const content = target.content.value;

    if (selectedData.type === 'edit') {
      editMutation.mutate();
    } else {
      AddMutation.mutate();
    }
    handleClose();
  };

  // 이미지 파일

  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (isOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [isOpen]);

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
            <h3 className="category" style={{ textAlign: 'right', fontSize: '14px', color: theme.colors.darkGreen }}>
              {formatedCategory}
            </h3>
            <MainTitleInput
              type="text"
              name="maintitle"
              placeholder="메인 제목을 입력하세요"
              defaultValue={selectedData.main_title}
            />
          </DialogTitle>
          <DialogContent>
            <StyledImageContainer>
              <StyledImage src={''} alt="Uploaded image" />
              <input type="file" ref={fileInputRef} style={{ display: 'none' }} />
            </StyledImageContainer>
            <DialogContentText
              id="scroll-dialog-description"
              className="align"
              ref={descriptionElementRef}
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
              ref={descriptionElementRef}
              tabIndex={-1}
              sx={{ display: 'grid', gap: '8px', marginTop: '8px' }}
            >
              <StyledInput defaultValue={selectedData.title} type="text" name="title" placeholder="제목을 입력하세요" />
              <StyledTextArea defaultValue={selectedData.content} name="review" placeholder="내용을 입력하세요" />
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

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;
