import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Card, CardActionArea } from '@mui/material';
import styled from 'styled-components';
import { CardInfo } from '../../types/card';
import { Link } from 'react-router-dom';

export const InteriorCard = ({ id, type, img, title, py }: CardInfo) => {
  const handleCardClick = () => {
    console.log(id, type);
  };

  return (
    <CardWrap>
      <Link to={`/${type}/${id}`}>
        <Card onClick={() => handleCardClick()}>
          <CardActionArea>
            <CardMedia component="img" height="400" image={img} alt="interior" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="title">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary" className="py">
                {py}py
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
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
