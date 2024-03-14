import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { CarouselData } from '../../types/carousel';
import styled from 'styled-components';
import { useMutation } from '@tanstack/react-query';
import { addCarousel, editCarousel, imageUpload } from '../../api/carousel';
import { FaPlus } from 'react-icons/fa6';

interface EditModalProps {
  isOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedData: CarouselData;
}

export const EditModal = ({ isOpen, setModalOpen, selectedData }: EditModalProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [newImageUrl, setNewImageUrl] = useState<string>('');

  console.log(selectedData.type);

  const handleClose = () => {
    setModalOpen(false);
  };

  const AddMutation = useMutation({
    mutationFn: addCarousel,
    onSuccess: (data) => console.log(data),
  });

  const editMutation = useMutation({
    mutationFn: editCarousel,
  });

  const handleEditOrAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & { title: { value: string }; review: { value: string } };
    const title = target.title.value;
    const review = target.review.value;

    if (selectedData.type === 'edit') {
      // 수정 처리
    } else {
      AddMutation.mutate({ title, review, newImageUrl });
    }
    // handleClose();
  };

  // 이미지 파일
  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const imageUploadMutation = useMutation({
    mutationFn: imageUpload,
    onSuccess: (url) => {
      setNewImageUrl(url);
    },
  });

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      imageUploadMutation.mutate(file);
    }
  };

  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (isOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [isOpen]);

  return (
    <EditModalContainer>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <form onSubmit={handleEditOrAdd}>
          <DialogTitle id="scroll-dialog-title">
            <StyledInput type="text" name="title" defaultValue={selectedData.title} placeholder="제목을 입력하세요" />
          </DialogTitle>
          <DialogContent>
            <StyledImageContainer onClick={handleImageClick}>
              {selectedData.img ? (
                <StyledImage src={selectedData.img} alt="Uploaded image" />
              ) : newImageUrl ? (
                <StyledImage src={newImageUrl} alt="Uploaded image" />
              ) : (
                <div className="attachment">
                  <span>
                    <FaPlus />
                  </span>
                  <span>이미지 등록</span>
                </div>
              )}
              <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
            </StyledImageContainer>
            <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
              <StyledTextArea name="review" defaultValue={selectedData.review} placeholder="리뷰를 입력하세요" />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {selectedData.type !== 'edit' ? <Button type="submit">등록</Button> : <Button type="submit">수정</Button>}
            <Button onClick={handleClose}>닫기</Button>
          </DialogActions>
        </form>
      </Dialog>
    </EditModalContainer>
  );
};

const EditModalContainer = styled.div`
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 1.5rem;
  border: none;
  outline: none;
  background-color: transparent;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  font-size: 1rem;
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
