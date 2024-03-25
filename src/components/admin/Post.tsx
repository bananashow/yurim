import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  InputLabel,
  NativeSelect,
  Typography,
} from '@mui/material';
import styled from 'styled-components';
import { DeleteButton } from '../common/DeleteButton';
import { FaPlus } from 'react-icons/fa6';
import { useState } from 'react';
import { PostModal } from '../post/PostModal';
import { CardInfo } from '../../types/card';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY, TABLE } from '../../constants/api';
import { getInteriorDatas } from '../../api/post';

export const Post = () => {
  const [modalIsOpen, setModalOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(TABLE.HOME_INTERIOR);
  const [selectedData, setSelectedData] = useState<CardInfo>({
    id: 0,
    created_at: '',
    main_title: '',
    project: '',
    site: '',
    area: 0,
    keyword: '',
    title: '',
    content: '',
    images: [],
    type: 'edit',
  });

  const handleAdd = () => {
    setSelectedData({
      id: 0,
      created_at: '',
      main_title: '',
      project: '',
      site: '',
      area: 0,
      keyword: '',
      title: '',
      content: '',
      images: [],
      type: 'add',
    });
    setModalOpen(true);
  };

  const handleDelete = () => {};

  const handleCardClick = (data: CardInfo) => {
    setModalOpen(true);
    setSelectedData({ ...data, type: 'edit' });
  };

  const { data: interiorList } = useQuery({
    queryKey: [QUERY_KEY.GET_HOME_INTERIOR, selectedCategory],
    queryFn: () => getInteriorDatas(selectedCategory),
  });

  return (
    <PostContainer>
      <div className="header">
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              카테고리
            </InputLabel>
            <NativeSelect
              defaultValue={TABLE.HOME_INTERIOR}
              onChange={(e) => setSelectedCategory(e.target.value)}
              inputProps={{
                name: 'age',
                id: 'uncontrolled-native',
              }}
            >
              <option value={TABLE.HOME_INTERIOR}>주거 공간</option>
              <option value={TABLE.STORE_INTERIOR}>상업 공간</option>
              <option value={TABLE.POINT_INTERIOR}>포인트 디자인</option>
            </NativeSelect>
          </FormControl>
        </Box>
      </div>

      <div className="card-list">
        <Card sx={{ maxWidth: 345, width: '100%' }} className="card" onClick={handleAdd}>
          <CardActionArea sx={{ height: '100%', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                <FaPlus />
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {interiorList?.map((data) => {
          return (
            <Card sx={{ maxWidth: 345 }} key={data?.id} onClick={() => handleCardClick(data)}>
              <CardActionArea>
                <CardMedia component="img" height="200" image={data?.images[0]} alt="인테리어" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className="title">
                    {data?.main_title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="review" height={'100px'}>
                    {data?.area}평
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <div className="button">
                  <DeleteButton handleDelete={() => handleDelete()} />
                </div>
              </CardActions>
            </Card>
          );
        })}
      </div>
      {modalIsOpen && (
        <PostModal
          isOpen={modalIsOpen}
          setModalOpen={setModalOpen}
          selectedData={selectedData}
          category={selectedCategory}
        />
      )}
    </PostContainer>
  );
};

const PostContainer = styled.section`
  .header {
    margin: 0 auto;
    max-width: 600px;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 24px;
  }

  .card-list {
    margin-top: 48px;
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
      font-size: 18px;
    }

    .button {
      width: 100%;
      text-align: right;
    }
  }
`;
