import useEmblaCarousel from 'embla-carousel-react';
import styled from 'styled-components';
import emblaCarouselAutoplay from 'embla-carousel-autoplay';
import { EmblaOptionsType } from 'embla-carousel';

interface ImageCarouselProps {
  slides: { img: string; title?: string; review?: string }[];
  options: EmblaOptionsType;
}

export const ImageCarousel = ({ slides, options }: ImageCarouselProps) => {
  const autoplayOptions = {
    delay: 5000,
  };

  const [emblaRef] = useEmblaCarousel(options, [emblaCarouselAutoplay(autoplayOptions)]);

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
        padding: 8px 12px;
        background-color: ${(props) => props.theme.colors.black}20;
        border-radius: 12px;
        line-height: 24px;
        color: #fff;
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
