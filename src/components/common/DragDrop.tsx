import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa6';
import Dropzone, { DropzoneState } from 'react-dropzone';
import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { imageDeleteByFileName, imageUpload } from '../../api/image';

interface DragDropProps {
  category: string;
  handleFileList: (isSend: string[]) => void;
  initialImages?: string[];
}

interface ErrorResponse {
  error: string; // 또는 오류에 대한 자세한 정보를 담는 타입
}

export const DragDrop = ({ category, handleFileList, initialImages = [] }: DragDropProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [previewImages, setPreviewImages] = useState<string[]>(initialImages);

  useEffect(() => {
    if (previewImages) {
      handleFileList(previewImages);
    }
  }, [previewImages, handleFileList]);

  const [isHovered, setIsHovered] = useState(false);

  const imageUploadMutation = useMutation({
    mutationFn: imageUpload,
  });

  const handleImageDrop = async (files: File[]) => {
    setIsDragging(true);

    try {
      const uploadedUrls = await Promise.all(
        files.map(async (file) => {
          const imageUrl = await imageUploadMutation.mutateAsync({ file, storage: category });
          return imageUrl;
        })
      );
      setPreviewImages((prevImages) => [...prevImages, ...uploadedUrls]);
    } catch (error) {
      if ((error as ErrorResponse).error === 'Duplicate') {
        alert('이미 존재하는 이미지입니다.');
      }
    } finally {
      setIsDragging(false);
    }
  };

  const handlePaste = (event: React.ClipboardEvent) => {
    const items = event.clipboardData?.items;

    if (items) {
      for (let i = 0; i < items.length; i++) {
        const item = items[i];

        if (item.type.startsWith('image/')) {
          const file = item.getAsFile();
          if (file) handleImageDrop([file]);
          break;
        }
      }
    }
  };

  const deleteStorageImageMutation = useMutation({
    mutationFn: imageDeleteByFileName,
  });

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, index: number, imageUrl: string) => {
    e.preventDefault();
    const fileName = imageUrl.split('/').pop() || '';
    const updatedImages = [...(previewImages || [])];
    updatedImages.splice(index, 1);
    setPreviewImages(updatedImages);
    deleteStorageImageMutation.mutate({ fileName, storage: category });
  };

  return (
    <Dropzone
      onDrop={(acceptedFiles) => {
        handleImageDrop(acceptedFiles);
      }}
      onDragEnter={() => setIsDragging(true)}
      onDragLeave={() => setIsDragging(false)}
    >
      {({ getRootProps, getInputProps }: DropzoneState) => (
        <section>
          <div
            {...getRootProps({
              onPaste: (event: React.ClipboardEvent) => handlePaste(event),
              onMouseEnter: () => setIsHovered(true),
              onMouseLeave: () => setIsHovered(false),
            })}
          >
            <input {...getInputProps()} />
            <DragDropBox className={isDragging ? 'is--drag' : ''}>
              {previewImages && previewImages.length > 0 ? (
                <ImageGrid>
                  {previewImages &&
                    previewImages.map((image, index) => (
                      <ImageContainer key={index} onClick={(e) => e.stopPropagation()}>
                        <img src={image} alt={`Dropped Preview ${index}`} />
                        {isHovered && (
                          <DeleteButton onClick={(e) => handleDelete(e, index, image)}>
                            <span role="img" aria-label="Delete">
                              ❌
                            </span>
                          </DeleteButton>
                        )}
                      </ImageContainer>
                    ))}
                </ImageGrid>
              ) : (
                <div>
                  <PlusIcon />
                  <div>이미지를 드롭하거나 복사해서 붙여 넣으세요</div>
                </div>
              )}
            </DragDropBox>
          </div>
        </section>
      )}
    </Dropzone>
  );
};

const DragDropBox = styled.div`
  width: 100%;
  height: 250px;
  margin-top: 8px;
  border: 3px dashed ${(props) => props.theme.colors.blue}90;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;

  &.is--drag {
    border: 3px dashed ${(props) => props.theme.colors.blue};
    & > div {
      color: ${(props) => props.theme.colors.blue};
    }
  }

  & > div {
    text-align: center;
    color: ${(props) => props.theme.colors.blue}90;
    padding: 24px;
  }
`;

const ImageGrid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
`;

const PlusIcon = styled(FaPlus)`
  font-size: 24px;
  margin-bottom: 4px;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: white;
  display: none;

  &:hover {
    color: red;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  margin-right: 4px;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }

  &:hover ${DeleteButton} {
    display: block;
  }
`;
