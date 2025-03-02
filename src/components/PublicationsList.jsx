import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt, FaSpinner, FaGoogle, FaOrcid, FaQuoteRight } from 'react-icons/fa';
import { publicationsApi } from '../utils/api';

const PublicationsContainer = styled.div`
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const PublicationItem = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: white;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

const PublicationTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.primary};
`;

const PublicationAuthors = styled.p`
  font-style: italic;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text};
`;

const PublicationVenue = styled.p`
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.secondary};
`;

const PublicationYear = styled.span`
  background-color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 0.9rem;
  margin-left: ${({ theme }) => theme.spacing.sm};
`;

const PublicationCitations = styled.span`
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 0.9rem;
  margin-left: ${({ theme }) => theme.spacing.sm};
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

const PublicationLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;
  
  svg {
    margin-left: ${({ theme }) => theme.spacing.xs};
  }
  
  &:hover {
    text-decoration: underline;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FilterButton = styled.button`
  background-color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.light};
  color: ${({ theme, active }) => active ? 'white' : theme.colors.text};
  border: none;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    background-color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.secondary};
    color: white;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xl};
  
  svg {
    animation: spin 1s linear infinite;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const SourceSelector = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  gap: ${({ theme }) => theme.spacing.md};
`;

const SourceButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme, active }) => active ? theme.colors.primary : 'white'};
  color: ${({ theme, active }) => active ? 'white' : theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  box-shadow: ${({ theme }) => theme.boxShadow};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  svg {
    font-size: 1.2rem;
  }
`;

const ErrorMessage = styled.div`
  background-color: #fff3f3;
  color: #d32f2f;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const PublicationsList = () => {
  const [publications, setPublications] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [source, setSource] = useState('google'); // 'google' or 'orcid'
  
  useEffect(() => {
    fetchPublications();
  }, [source]);
  
  const fetchPublications = async () => {
    setLoading(true);
    setError(null);
    
    try {
      let data = [];
      
      if (source === 'google') {
        data = await publicationsApi.fetchFromGoogleScholar();
      } else if (source === 'orcid') {
        data = await publicationsApi.fetchFromOrcid();
      }
      
      // If API call returns no data, show error
      if (!data || data.length === 0) {
        setError(`Could not fetch publications from ${source === 'google' ? 'Google Scholar' : 'ORCID'}. Please try again later or try a different source.`);
      }
      
      setPublications(data);
    } catch (err) {
      console.error('Error fetching publications:', err);
      setError('Failed to load publications. Please try again later.');
      setPublications([]);
    } finally {
      setLoading(false);
    }
  };
  
  const filteredPublications = publications.filter(publication => {
    if (filter === 'all') return true;
    return publication.type === filter;
  });
  
  if (loading) {
    return (
      <LoadingContainer>
        <FaSpinner />
      </LoadingContainer>
    );
  }
  
  return (
    <PublicationsContainer>
      <SourceSelector>
        <SourceButton 
          active={source === 'google'} 
          onClick={() => setSource('google')}
        >
          <FaGoogle /> Google Scholar
        </SourceButton>
        <SourceButton 
          active={source === 'orcid'} 
          onClick={() => setSource('orcid')}
        >
          <FaOrcid /> ORCID
        </SourceButton>
      </SourceSelector>
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <FilterContainer>
        <FilterButton 
          active={filter === 'all'} 
          onClick={() => setFilter('all')}
        >
          All Publications
        </FilterButton>
        <FilterButton 
          active={filter === 'journal'} 
          onClick={() => setFilter('journal')}
        >
          Journal Papers
        </FilterButton>
        <FilterButton 
          active={filter === 'conference'} 
          onClick={() => setFilter('conference')}
        >
          Conference Papers
        </FilterButton>
        <FilterButton 
          active={filter === 'review'} 
          onClick={() => setFilter('review')}
        >
          Review Papers
        </FilterButton>
      </FilterContainer>
      
      {filteredPublications.length === 0 ? (
        <p>No publications found for the selected filter.</p>
      ) : (
        filteredPublications.map(publication => (
          <PublicationItem key={publication.id}>
            <PublicationTitle>
              {publication.title}
            </PublicationTitle>
            <PublicationAuthors>
              {publication.authors}
            </PublicationAuthors>
            <PublicationVenue>
              {publication.venue}
              <PublicationYear>{publication.year}</PublicationYear>
              <PublicationCitations>
                <FaQuoteRight size={12} /> {publication.citations} citations
              </PublicationCitations>
            </PublicationVenue>
            <PublicationLink 
              href={publication.url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Publication <FaExternalLinkAlt />
            </PublicationLink>
          </PublicationItem>
        ))
      )}
    </PublicationsContainer>
  );
};

export default PublicationsList; 