import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaYoutube, FaOrcid, FaGoogle } from 'react-icons/fa';

const SocialContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

const SocialLink = styled.a`
  color: ${({ theme, footer }) => footer ? 'white' : theme.colors.primary};
  font-size: 1.5rem;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
  }
`;

const SocialLinks = ({ footer = false }) => {
  // Replace these with your actual social media links
  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
    { icon: <FaGithub />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaYoutube />, url: 'https://youtube.com/yourchannel', label: 'YouTube' },
    { icon: <FaOrcid />, url: 'https://orcid.org/your-orcid-id', label: 'ORCID' },
    { icon: <FaGoogle />, url: 'https://scholar.google.com/citations?user=your-id', label: 'Google Scholar' },
  ];

  return (
    <SocialContainer>
      {socialLinks.map((link, index) => (
        <SocialLink 
          key={index} 
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={link.label}
          footer={footer}
        >
          {link.icon}
        </SocialLink>
      ))}
    </SocialContainer>
  );
};

export default SocialLinks; 