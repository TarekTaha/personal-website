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
  gap: ${({ theme }) => theme.spacing.md};
`;

const SkillCategory = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SkillCategoryTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  padding-left: ${({ theme }) => theme.spacing.sm};
  position: relative;
  
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
          <AboutSubtitle>Researcher, Professor, and Innovator in Robotics & AI</AboutSubtitle>
          <SocialLinks />
        </AboutHeader>
        
        <ProfileSection>
          <ProfileImage src="/images/profile-photo.jpg" alt="Dr. Tarek Taha" />
          <ProfileContent>
            <AboutText>
              I am Dr. Tarek Taha, a professor and researcher specializing in robotics, artificial intelligence, 
              and autonomous systems. With a passion for developing intelligent systems that can operate in 
              complex environments, my research focuses on the intersection of computer vision, machine learning, 
              and control systems.
            </AboutText>
            <AboutText>
              Currently, I serve as a Professor at [Your University/Institution], where I lead the 
              Intelligent Robotics Lab. My team and I work on cutting-edge research projects in drone navigation, 
              robot learning, and human-robot interaction.
            </AboutText>
            <AboutText>
              Throughout my career, I have published over 50 papers in top-tier journals and conferences, 
              secured multiple research grants, and collaborated with leading institutions and industry partners 
              worldwide. I am committed to advancing the field of robotics and AI through innovative research 
              and education.
            </AboutText>
          </ProfileContent>
        </ProfileSection>
        
        <EducationSection>
          <SectionTitle>Education</SectionTitle>
          <EducationItem>
            <EducationDegree>Ph.D. in Robotics and Autonomous Systems</EducationDegree>
            <EducationInstitution>University of Technology, Sydney, Australia</EducationInstitution>
            <EducationDate>2005 - 2009</EducationDate>
            <AboutText>
              My doctoral research focused on vision-based navigation systems for autonomous robots, 
              developing novel algorithms for simultaneous localization and mapping (SLAM) in dynamic environments.
            </AboutText>
          </EducationItem>
          
          <EducationItem>
            <EducationDegree>M.Sc. in Computer Engineering</EducationDegree>
            <EducationInstitution>Technical University of Munich</EducationInstitution>
            <EducationDate>2003 - 2005</EducationDate>
            <AboutText>
              Specialized in embedded systems and computer vision, with a thesis on real-time image processing 
              for mobile robots.
            </AboutText>
          </EducationItem>
          
          <EducationItem>
            <EducationDegree>B.Sc. in Electrical Engineering</EducationDegree>
            <EducationInstitution>Cairo University</EducationInstitution>
            <EducationDate>1999 - 2003</EducationDate>
            <AboutText>
              Graduated with honors, focusing on control systems and digital signal processing.
            </AboutText>
          </EducationItem>
        </EducationSection>
        
        <SkillsSection>
          <SectionTitle>Skills & Expertise</SectionTitle>
          <SkillsGrid>
            <SkillCategory>
              <SkillCategoryTitle>Robotics</SkillCategoryTitle>
              <SkillList>
                <SkillItem>Robot Navigation</SkillItem>
                <SkillItem>Path Planning</SkillItem>
                <SkillItem>SLAM</SkillItem>
                <SkillItem>Drone Systems</SkillItem>
                <SkillItem>Control Systems</SkillItem>
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
                <SkillItem>MATLAB</SkillItem>
                <SkillItem>ROS</SkillItem>
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
            </AboutText>
          </EducationItem>
          
          <EducationItem>
            <EducationDegree>Assistant Professor</EducationDegree>
            <EducationInstitution>Khalifa University, Abu Dhabi, UAE</EducationInstitution>
            <EducationDate>2011 - 2018</EducationDate>
            <AboutText>
              Established a research program in autonomous robotics, secured external funding, and developed 
              new curriculum in robotics and machine learning.
            </AboutText>
          </EducationItem>
          
          <EducationItem>
            <EducationDegree>Research Scientist</EducationDegree>
            <EducationInstitution>Research Institute</EducationInstitution>
            <EducationDate>2009 - 2010</EducationDate>
            <AboutText>
              Worked on industry-funded projects in autonomous navigation systems for unmanned aerial vehicles.
            </AboutText>
          </EducationItem>
        </div>
      </div>
    </AboutContainer>
  );
};

export default About; 