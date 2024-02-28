import styled from 'styled-components';
import { device } from '../../styles/media';

export const Layout = ({ children }: { children: JSX.Element }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 42px 200px;

  @media ${device.laptop} {
    padding: 42px 42px;
  }

  @media ${device.tablet} {
    padding: 0 12px;
  }

  @media ${device.mobile} {
    padding: 0 4px;
  }
`;
