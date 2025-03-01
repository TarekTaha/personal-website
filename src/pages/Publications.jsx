import React from 'react';
import styled from 'styled-components';
import PublicationsList from '../components/PublicationsList';

const PublicationsContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const PublicationsHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const PublicationsTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PublicationsSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondary};
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
`;

const Publications = () => {
  return (
    <PublicationsContainer>
      <div className="container">
        <PublicationsHeader>
          <PublicationsTitle>Publications</PublicationsTitle>
          <PublicationsSubtitle>
            My research has been published in leading journals and conferences in the fields of robotics, 
            artificial intelligence, and autonomous systems.
          </PublicationsSubtitle>
        </PublicationsHeader>
        
        <PublicationsList />
      </div>
    </PublicationsContainer>
  );
};

export default Publications; 