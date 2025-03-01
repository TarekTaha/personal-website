import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';
import YouTubeEmbed from '../components/YouTubeEmbed';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
  color: white;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 60vh;
    justify-content: center;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const HeroTitle = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: white;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  opacity: 0.9;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.5rem;
  }
`;

const CTAButton = styled(motion.button)`
  background-color: ${({ theme, secondary }) => 
    secondary ? 'transparent' : theme.colors.accent};
  color: white;
  border: ${({ theme, secondary }) => 
    secondary ? `2px solid ${theme.colors.accent}` : 'none'};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  margin: 0 ${({ theme }) => theme.spacing.xs};
  
  &:hover {
    background-color: ${({ theme, secondary }) => 
      secondary ? theme.colors.accent : theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const FeaturedSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.boxShadow};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 0;
  }
`;

const ProfileContent = styled.div`
  text-align: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
  }
`;

const ProfileText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Dr. Tarek Taha
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Robotics & AI Researcher | Professor | Innovator
          </HeroSubtitle>
          <ButtonContainer>
            <Link to="/publications">
              <CTAButton
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Publications
              </CTAButton>
            </Link>
            <Link to="/contact">
              <CTAButton
                secondary
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </CTAButton>
            </Link>
          </ButtonContainer>
          <SocialLinks />
        </HeroContent>
      </HeroSection>
      
      <FeaturedSection>
        <div className="container">
          <SectionTitle>About Me</SectionTitle>
          <ProfileSection>
            <ProfileImage src="/images/profile-photo.jpg" alt="Dr. Tarek Taha" />
            <ProfileContent>
              <ProfileText>
                Welcome to my professional website. I am Dr. Tarek Taha, a researcher and professor specializing in robotics, 
                artificial intelligence, and autonomous systems. My research focuses on developing intelligent systems 
                for real-world applications, particularly in the areas of drone navigation, computer vision, and machine learning.
              </ProfileText>
              <ProfileText>
                With over 15 years of experience in academia and industry, I have published numerous papers in top-tier 
                journals and conferences, and have collaborated with leading research institutions around the world.
              </ProfileText>
              <Link to="/about">
                <CTAButton secondary whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Learn More About Me
                </CTAButton>
              </Link>
            </ProfileContent>
          </ProfileSection>
        </div>
      </FeaturedSection>
      
      <FeaturedSection style={{ backgroundColor: '#f5f7fa' }}>
        <div className="container">
          <SectionTitle>Featured Research</SectionTitle>
          <FeaturedGrid>
            <div>
              <h3>Autonomous Drone Navigation</h3>
              <p>
                My research in autonomous drone navigation focuses on developing robust algorithms for 
                navigation in GPS-denied environments using computer vision and deep learning techniques.
              </p>
              <YouTubeEmbed 
                videoId="dQw4w9WgXcQ" 
                title="Autonomous Drone Navigation Research"
              />
            </div>
            <div>
              <h3>Machine Learning for Robotics</h3>
              <p>
                I work on applying advanced machine learning techniques to solve complex robotics problems, 
                including reinforcement learning for robot control and deep learning for perception tasks.
              </p>
              <YouTubeEmbed 
                videoId="dQw4w9WgXcQ" 
                title="Machine Learning for Robotics Research"
              />
            </div>
          </FeaturedGrid>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/projects">
              <CTAButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                View All Projects
              </CTAButton>
            </Link>
          </div>
        </div>
      </FeaturedSection>
    </>
  );
};

export default Home; 