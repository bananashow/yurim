import styled from 'styled-components';

export const Layout = ({ children }: { children: JSX.Element }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 32px 60px;
`;
