import React from 'react';
import styled from 'styled-components';
import { Title } from '../components/Title';
import SEO from '../components/SEO';

const title = '404 NOT FOUND';

const NotFoundPage: React.FC = () => (
  <>
    <SEO title={title} article={false} />
    <TextWrapper>
      <Title title={title} />
    </TextWrapper>
  </>
);
export default NotFoundPage;

const TextWrapper = styled.div`
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
