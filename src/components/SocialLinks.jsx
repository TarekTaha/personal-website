import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaYoutube, FaOrcid, FaGoogle, FaResearchgate } from 'react-icons/fa';

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
  // Updated with Tarek Taha's actual social media links
  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/tarek-taha-5791553/', label: 'LinkedIn' },
    { icon: <FaGithub />, url: 'https://github.com/tarektaha', label: 'GitHub' },
    { icon: <FaResearchgate />, url: 'https://www.researchgate.net/profile/Tarek-Taha-2', label: 'ResearchGate' },
    { icon: <FaOrcid />, url: 'https://orcid.org/0000-0002-0777-5913', label: 'ORCID' },
    { icon: <FaGoogle />, url: 'https://scholar.google.com/citations?user=Jh-V8XQAAAAJ', label: 'Google Scholar' },
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