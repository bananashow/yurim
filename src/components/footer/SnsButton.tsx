import styled from 'styled-components';

interface SnsButtonProps {
  children: React.ReactNode;
  bgColor: string;
  url: string;
}

export const SnsButton = ({ children, bgColor, url }: SnsButtonProps) => {
  const handleButtonClick = () => {
    window.open(url, '_blank');
  };

  return (
    <ButtonContainer $bgColor={bgColor} onClick={handleButtonClick}>
      {children}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div<{ $bgColor: string }>`
  background: ${(props) => props.$bgColor};
  width: 40px;
  height: 40px;
  font-size: 28px;
  cursor: pointer;
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
