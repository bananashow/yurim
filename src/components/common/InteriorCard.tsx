import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Card, CardActionArea } from '@mui/material';
import styled from 'styled-components';
import { CardInfo } from '../../types/card';
import { useLocation, useNavigate } from 'react-router-dom';

export const InteriorCard = (cardProps: CardInfo) => {
  const navigation = useNavigate();
  const location = useLocation();

  const { id, main_title, area, images } = cardProps;

  const handleCardClick = () => {
    navigation(`${location.pathname}/${id}`);
  };

  return (
    <CardWrap>
      <Card onClick={() => handleCardClick()}>
        <CardActionArea>
          <CardMedia component="img" height="400" image={images[0]} alt="interior" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="title">
              {main_title}
            </Typography>
            <Typography variant="body2" color="text.secondary" className="py">
              {area}py
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </CardWrap>
  );
};

const CardWrap = styled.div`
  .title {
    font-size: 16px;
    font-family: Pretendard-SemiBold;
  }

  .py {
    font-family: Pretendard-Regular;
  }
`;
