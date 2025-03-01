import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaExternalLinkAlt, FaSpinner } from 'react-icons/fa';

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

const PublicationLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: ${({ theme }) => theme.spacing.sm};
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background-color: ${({ active, theme }) => 
    active ? theme.colors.secondary : 'white'};
  color: ${({ active, theme }) => 
    active ? 'white' : theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    background-color: ${({ active, theme }) => 
      active ? theme.colors.secondary : theme.colors.light};
  }
`;

// This is a mock function to simulate fetching publications
// In a real implementation, you would use the Google Scholar or ORCID API
const fetchPublications = async () => {
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock data
  return [
    {
      id: 1,
      title: "Deep Learning for Autonomous Drone Navigation",
      authors: "Taha, T., Smith, J., Johnson, A.",
      venue: "IEEE Transactions on Robotics",
      year: 2022,
      url: "https://example.com/paper1",
      type: "journal"
    },
    {
      id: 2,
      title: "Vision-Based Control Systems for UAVs",
      authors: "Taha, T., Williams, R.",
      venue: "International Conference on Robotics and Automation (ICRA)",
      year: 2021,
      url: "https://example.com/paper2",
      type: "conference"
    },
    {
      id: 3,
      title: "Reinforcement Learning for Aerial Manipulation",
      authors: "Johnson, A., Taha, T., Davis, M.",
      venue: "Journal of Artificial Intelligence Research",
      year: 2020,
      url: "https://example.com/paper3",
      type: "journal"
    },
    {
      id: 4,
      title: "Survey of Drone Navigation Techniques",
      authors: "Taha, T.",
      venue: "Robotics and Autonomous Systems",
      year: 2019,
      url: "https://example.com/paper4",
      type: "review"
    },
    {
      id: 5,
      title: "Machine Learning Applications in Aerial Robotics",
      authors: "Taha, T., Brown, S., Miller, J.",
      venue: "Conference on Neural Information Processing Systems (NeurIPS)",
      year: 2018,
      url: "https://example.com/paper5",
      type: "conference"
    }
  ];
};

const PublicationsList = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    const getPublications = async () => {
      try {
        const data = await fetchPublications();
        setPublications(data);
      } catch (error) {
        console.error('Error fetching publications:', error);
      } finally {
        setLoading(false);
      }
    };
    
    getPublications();
  }, []);
  
  const filteredPublications = filter === 'all' 
    ? publications 
    : publications.filter(pub => pub.type === filter);
  
  if (loading) {
    return (
      <LoadingSpinner>
        <FaSpinner className="spin" />
      </LoadingSpinner>
    );
  }
  
  return (
    <PublicationsContainer>
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
      
      {filteredPublications.map(publication => (
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
          </PublicationVenue>
          <PublicationLink 
            href={publication.url} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Publication <FaExternalLinkAlt />
          </PublicationLink>
        </PublicationItem>
      ))}
    </PublicationsContainer>
  );
};

export default PublicationsList; 