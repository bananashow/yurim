import styled from 'styled-components';

export const Instagram = () => {
  return (
    <InstagramContainer>
      <h2>인스타그램</h2>
      <iframe src="https://www.instagram.com/yurimthesup/embed/" />
    </InstagramContainer>
  );
};

const InstagramContainer = styled.section`
  h2 {
    font-size: 18px;
    margin-bottom: 24px;
  }

  iframe {
    width: 100%;
    height: 500px;
    border: 1px solid ${(props) => props.theme.colors.gray};
  }
`;
