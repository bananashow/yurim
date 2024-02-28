import useEmblaCarousel from 'embla-carousel-react';
import styled from 'styled-components';
import emblaCarouselAutoplay from 'embla-carousel-autoplay';
import { EmblaOptionsType } from 'embla-carousel';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { theme } from '../../styles/theme';
import { useMediaQuery } from 'react-responsive';
import { device } from '../../styles/media';

interface ImageCarouselProps {
  slides: { img: string; title?: string; review?: string }[];
  options?: EmblaOptionsType;
}

export const ImageCarousel = ({ slides, options }: ImageCarouselProps) => {
  const autoplayOptions = {
    delay: 3000,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [emblaCarouselAutoplay(autoplayOptions)]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const goToSlide = (index: number) => {
    emblaApi && emblaApi.scrollTo(index);
    setSelectedIndex(index);
  };

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      };
      emblaApi.on('select', onSelect);
      return () => emblaApi.off('select', onSelect) as unknown as void;
    }
    return;
  }, [emblaApi]);

  return (
    <CarouselWrap>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides?.map((item, idx) => (
              <div className="embla__slide embla__class-names" key={idx}>
                <img className="embla__slide__img" src={item.img} alt="interior" />
                <div className="embla__slide__text">
                  <h5>{item.title}</h5>
                  <p>{item.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          {slides.map((_, index) => (
            <DotButton key={index} selected={index === selectedIndex} onClick={() => goToSlide(index)} />
          ))}
        </Box>
      </div>
    </CarouselWrap>
  );
};

const CarouselWrap = styled.div`
  .embla__viewport {
    overflow: hidden;
  }

  .embla__container {
    display: flex;
    flex-direction: row;
    margin-left: -20px;
  }

  .embla__slide {
    position: relative;
    padding: 16px;

    .embla__slide__text {
      position: absolute;
      left: 48px;
      bottom: 48px;
      text-shadow: 2px 2px 12px ${(props) => props.theme.colors.black}90;
      cursor: pointer;

      h5 {
        padding: 6px;
        font-size: 32px;
        font-family: Pretendard-ExtraBold;
        color: #fff;
      }

      p {
        width: 95%;
        padding: 4px 12px;
        background-color: ${(props) => props.theme.colors.black}20;
        border-radius: 12px;
        line-height: 24px;
        color: #fff;

        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }

      @media ${device.tablet} {
        h5 {
          font-size: 16px;
        }

        p {
          width: 85%;
          -webkit-line-clamp: 3;
        }
      }
    }

    .embla__slide__img {
      width: 320px;
      display: block;
      object-fit: cover;
      cursor: pointer;

      @media screen and (min-width: 500px) {
        min-width: 700px;
      }
    }
  }
`;

const DotButton = styled.button<{ selected: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  margin: 0 5px;
  background-color: ${(props) => (props.selected ? theme.colors.green : '#ccc')};
  cursor: pointer;
`;
