import styled from 'styled-components';

export const PageLayout = ({ children }: { children: JSX.Element }) => {
  return <PageLayoutContainer>{children}</PageLayoutContainer>;
};

const PageLayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 48px 0;
`;
