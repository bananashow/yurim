import { ImageList, ImageListItem } from '@mui/material';
import { TEST_IMAGE_DATA } from '../../constants/menu';
import styled from 'styled-components';

export const BestInterior = () => {
  return (
    <BestInteriorContainer>
      <h2>베스트 인테리어</h2>
      <ImageList variant="masonry" cols={3} gap={8}>
        {TEST_IMAGE_DATA.map((item) => (
          <CustomImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </CustomImageListItem>
        ))}
      </ImageList>
    </BestInteriorContainer>
  );
};

const BestInteriorContainer = styled.section`
  h2 {
    font-size: 18px;
    margin-bottom: 24px;
  }
`;

const CustomImageListItem = styled(ImageListItem)`
  overflow: hidden;

  img {
    transition: transform 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
