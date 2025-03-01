import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterHeading = styled.h3`
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: 1.2rem;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.light};
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterHeading>Tarek Taha</FooterHeading>
          <FooterText>
            Professional website showcasing my research, publications, and projects.
          </FooterText>
          <SocialLinks footer />
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/publications">Publications</FooterLink>
          <FooterLink to="/projects">Projects</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Contact</FooterHeading>
          <FooterText>
            Email: your.email@example.com<br />
            Location: Your University or Institution<br />
            Department: Your Department
          </FooterText>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        © {currentYear} Tarek Taha. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 