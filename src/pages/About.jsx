import React from 'react';
import styled from 'styled-components';
import SocialLinks from '../components/SocialLinks';

const AboutContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const AboutTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const AboutSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
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

const SectionTitle = styled.h2`
  margin: ${({ theme }) => theme.spacing.lg} 0 ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const AboutText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.7;
`;

const EducationSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const EducationItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const EducationDegree = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.primary};
`;

const EducationInstitution = styled.p`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const EducationDate = styled.p`
  font-style: italic;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
`;

const SkillsSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const SkillCategory = styled.div`
  background-color: white;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const SkillCategoryTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.md};
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <div className="container">
        <AboutHeader>
          <AboutTitle>About Me</AboutTitle>
          <AboutSubtitle>
            Associate Professor of Robotics and AI at Khalifa University
          </AboutSubtitle>
          <SocialLinks />
        </AboutHeader>
        
        <ProfileSection>
          <ProfileImage src="/images/profile-photo.jpg" alt="Dr. Tarek Taha" />
          <ProfileContent>
            <AboutText>
              I am an Associate Professor at Khalifa University in Abu Dhabi, UAE, specializing in Robotics and Artificial Intelligence. 
              My research focuses on developing intelligent robotic systems with applications in aerial robotics, autonomous navigation, 
              and machine learning.
            </AboutText>
            <AboutText>
              With over 15 years of experience in academia and industry, I lead research in autonomous systems, 
              particularly focusing on unmanned aerial vehicles (UAVs), simultaneous localization and mapping (SLAM), 
              and AI applications in robotics.
            </AboutText>
          </ProfileContent>
        </ProfileSection>
        
        <EducationSection>
          <SectionTitle>Education</SectionTitle>
          <EducationItem>
            <EducationDegree>Ph.D. in Robotics and Autonomous Systems</EducationDegree>
            <EducationInstitution>University of Technology Sydney (UTS)</EducationInstitution>
            <EducationDate>2006 - 2009</EducationDate>
            <AboutText>
              Focused on autonomous navigation of mobile robots in partially-known environments, developing novel 
              approaches for robot localization and mapping.
            </AboutText>
          </EducationItem>
          
          <EducationItem>
            <EducationDegree>M.Sc. in Computer Science</EducationDegree>
            <EducationInstitution>University of Technology Sydney (UTS)</EducationInstitution>
            <EducationDate>2004 - 2006</EducationDate>
            <AboutText>
              Specialized in artificial intelligence and robotics, with a focus on computational intelligence and machine learning.
            </AboutText>
          </EducationItem>
          
          <EducationItem>
            <EducationDegree>B.Sc. in Computer Engineering</EducationDegree>
            <EducationInstitution>University of Aleppo</EducationInstitution>
            <EducationDate>1999 - 2003</EducationDate>
            <AboutText>
              Graduated with honors, focusing on computer systems and embedded programming.
            </AboutText>
          </EducationItem>
        </EducationSection>
        
        <SkillsSection>
          <SectionTitle>Skills & Expertise</SectionTitle>
          <SkillsGrid>
            <SkillCategory>
              <SkillCategoryTitle>Robotics</SkillCategoryTitle>
              <SkillList>
                <SkillItem>Autonomous Navigation</SkillItem>
                <SkillItem>SLAM</SkillItem>
                <SkillItem>Aerial Robotics (UAVs)</SkillItem>
                <SkillItem>Path Planning</SkillItem>
                <SkillItem>Robot Perception</SkillItem>
              </SkillList>
            </SkillCategory>
            
            <SkillCategory>
              <SkillCategoryTitle>Artificial Intelligence</SkillCategoryTitle>
              <SkillList>
                <SkillItem>Machine Learning</SkillItem>
                <SkillItem>Deep Learning</SkillItem>
                <SkillItem>Computer Vision</SkillItem>
                <SkillItem>Reinforcement Learning</SkillItem>
                <SkillItem>Neural Networks</SkillItem>
              </SkillList>
            </SkillCategory>
            
            <SkillCategory>
              <SkillCategoryTitle>Programming</SkillCategoryTitle>
              <SkillList>
                <SkillItem>Python</SkillItem>
                <SkillItem>C++</SkillItem>
                <SkillItem>ROS</SkillItem>
                <SkillItem>MATLAB</SkillItem>
                <SkillItem>TensorFlow/PyTorch</SkillItem>
              </SkillList>
            </SkillCategory>
            
            <SkillCategory>
              <SkillCategoryTitle>Other</SkillCategoryTitle>
              <SkillList>
                <SkillItem>Research Methodology</SkillItem>
                <SkillItem>Technical Writing</SkillItem>
                <SkillItem>Project Management</SkillItem>
                <SkillItem>Teaching</SkillItem>
                <SkillItem>Grant Writing</SkillItem>
              </SkillList>
            </SkillCategory>
          </SkillsGrid>
        </SkillsSection>
        
        <div>
          <SectionTitle>Professional Experience</SectionTitle>
          <EducationItem>
            <EducationDegree>Associate Professor</EducationDegree>
            <EducationInstitution>Khalifa University, Abu Dhabi, UAE</EducationInstitution>
            <EducationDate>2018 - Present</EducationDate>
            <AboutText>
              Leading research in autonomous robotics and AI, supervising graduate students, 
              teaching advanced courses in robotics and AI, and conducting research in autonomous systems.
              Director of the Autonomous Robotics and Human-Machine Interaction Laboratory.
            </AboutText>
          </EducationItem>
          
          <EducationItem>
            <EducationDegree>Assistant Professor</EducationDegree>
            <EducationInstitution>Khalifa University, Abu Dhabi, UAE</EducationInstitution>
            <EducationDate>2011 - 2018</EducationDate>
            <AboutText>
              Established a research program in autonomous robotics, secured external funding, and developed 
              new curriculum in robotics and machine learning. Led multiple research projects in UAV navigation
              and autonomous systems.
            </AboutText>
          </EducationItem>
          
          <EducationItem>
            <EducationDegree>Research Fellow</EducationDegree>
            <EducationInstitution>University of Technology Sydney, Australia</EducationInstitution>
            <EducationDate>2009 - 2011</EducationDate>
            <AboutText>
              Conducted research in autonomous navigation systems for mobile robots and unmanned aerial vehicles.
              Collaborated on industry-funded projects and published in top-tier robotics journals and conferences.
            </AboutText>
          </EducationItem>
        </div>
      </div>
    </AboutContainer>
  );
};

export default About; 