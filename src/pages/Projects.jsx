import React from 'react';
import styled from 'styled-components';
import YouTubeEmbed from '../components/YouTubeEmbed';

const ProjectsContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const ProjectsHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ProjectsTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ProjectsSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondary};
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProjectCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ProjectTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
`;

const ProjectDescription = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ProjectMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.light};
`;

const ProjectDate = styled.span`
  font-style: italic;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 500;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 0.8rem;
  font-weight: 500;
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Autonomous Drone Navigation System",
      description: "Development of a vision-based navigation system for drones operating in GPS-denied environments. The system uses deep learning for object detection and SLAM for mapping and localization.",
      tags: ["Computer Vision", "Deep Learning", "Drones", "SLAM"],
      date: "2021 - Present",
      videoId: "dQw4w9WgXcQ",
      link: "#"
    },
    {
      id: 2,
      title: "Reinforcement Learning for Robot Manipulation",
      description: "Research on applying reinforcement learning techniques to teach robots complex manipulation tasks. The project focuses on sample-efficient learning methods and transfer learning between simulation and real-world environments.",
      tags: ["Reinforcement Learning", "Robot Manipulation", "Sim2Real"],
      date: "2020 - Present",
      videoId: "dQw4w9WgXcQ",
      link: "#"
    },
    {
      id: 3,
      title: "Multi-Robot Coordination System",
      description: "Development of algorithms for coordinating multiple robots in collaborative tasks. The system includes distributed planning, task allocation, and communication protocols for robust operation.",
      tags: ["Multi-Robot Systems", "Distributed Algorithms", "Coordination"],
      date: "2019 - 2021",
      videoId: "dQw4w9WgXcQ",
      link: "#"
    },
    {
      id: 4,
      title: "Human-Robot Interaction Framework",
      description: "Research on natural and intuitive interaction between humans and robots. The project includes gesture recognition, speech understanding, and context-aware behavior generation.",
      tags: ["Human-Robot Interaction", "Gesture Recognition", "Natural Language Processing"],
      date: "2018 - 2020",
      videoId: "dQw4w9WgXcQ",
      link: "#"
    }
  ];

  return (
    <ProjectsContainer>
      <div className="container">
        <ProjectsHeader>
          <ProjectsTitle>Research Projects</ProjectsTitle>
          <ProjectsSubtitle>
            Explore my current and past research projects in robotics, artificial intelligence, and autonomous systems.
          </ProjectsSubtitle>
        </ProjectsHeader>
        
        <ProjectGrid>
          {projects.map(project => (
            <ProjectCard key={project.id}>
              <YouTubeEmbed videoId={project.videoId} title={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <TagsContainer>
                  {project.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagsContainer>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectMeta>
                  <ProjectDate>{project.date}</ProjectDate>
                  <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                    Learn More →
                  </ProjectLink>
                </ProjectMeta>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </div>
    </ProjectsContainer>
  );
};

export default Projects; 