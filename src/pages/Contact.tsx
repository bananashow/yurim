import styled from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';

export const Contact = () => {
  return (
    <PageLayout>
      <ContactContainer>
        <h2>CONTACT</h2>
      </ContactContainer>
    </PageLayout>
  );
};

const ContactContainer = styled.section`
  h2 {
    font-size: 24px;
    margin-top: 64px;
    margin-bottom: 40px;
    text-align: center;
  }
`;
