import styled from 'styled-components';
import { CarouselData } from '../../types/carousel';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteCarousel, getCarouselData } from '../../api/carousel';
import { QUERY_KEY, STORAGE } from '../../constants/api';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { DeleteButton } from '../common/DeleteButton';
import { useState } from 'react';
import { EditModal } from '../carousel/EditModal';
import { FaPlus } from 'react-icons/fa6';
import { queryClient } from '../../api/queryClient';
import { imageDelete } from '../../api/image';

export const Carousel = () => {
  const [modalIsOpen, setModalOpen] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<CarouselData>({
    id: 0,
    created_at: '',
    title: '',
    img: '',
    review: '',
    type: 'edit',
  });

  const { data: carouselData } = useQuery<CarouselData[]>({
    queryKey: [QUERY_KEY.GET_CAROUSEL_DATA],
    queryFn: getCarouselData,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteCarousel,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_CAROUSEL_DATA] }),
  });

  const deleteStorageImageMutation = useMutation({
    mutationFn: imageDelete,
  });

  const handleDelete = (data: CarouselData) => {
    if (confirm('정말 삭제할까요?')) {
      deleteStorageImageMutation.mutate({ url: data.img, storage: STORAGE.CAROUSEL });
      deleteMutation.mutate(data.id);
    } else {
      return false;
    }
  };

  const handleCardClick = (data: CarouselData) => {
    setModalOpen(true);
    setSelectedData({ ...data, type: 'edit' });
  };

  const handleAdd = () => {
    setSelectedData({
      id: 0,
      created_at: '',
      title: '',
      img: '',
      review: '',
      type: 'add',
    });
    setModalOpen(true);
  };

  return (
    <>
      <CarouselContainer>
        <Card sx={{ maxWidth: 345, width: '100%' }} className="card" onClick={handleAdd}>
          <CardActionArea sx={{ height: '100%', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                <FaPlus />
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {carouselData?.map((data) => {
          return (
            <Card sx={{ maxWidth: 345 }} key={data.id} onClick={() => handleCardClick(data)}>
              <CardActionArea>
                <CardMedia component="img" height="200" image={data.img} alt="인테리어" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className="title">
                    {data.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="review" height={'100px'}>
                    {data.review}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <div className="button">
                  <DeleteButton handleDelete={() => handleDelete(data)} />
                </div>
              </CardActions>
            </Card>
          );
        })}
      </CarouselContainer>
      {modalIsOpen && <EditModal isOpen={modalIsOpen} setModalOpen={setModalOpen} selectedData={selectedData} />}
    </>
  );
};

const CarouselContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 12px;

  .MuiPaper-root {
    width: 100%;
  }

  & > div {
    margin-bottom: 48px;
  }

  .review,
  .title {
    white-space: normal;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  .review {
    -webkit-line-clamp: 5;
  }

  .title {
    -webkit-line-clamp: 1;
  }

  .button {
    width: 100%;
    text-align: right;
  }
`;
