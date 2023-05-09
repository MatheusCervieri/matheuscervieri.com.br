import React, { useState } from 'react';
import styled from 'styled-components';

interface Project {
  name: string;
  image: string;
  description: string;
  hours: string;
  githublink: string;
}

interface ProjectsProps {
  projects: Project[];
}

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const ProjectCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px;
  margin-bottom: 50px;
  width: 60%;
  max-width: 800px;

  @media (max-width: 1200px) {
    width: 80%;
    padding: 30px;
  }

  @media (max-width: 992px) {
    width: 90%;
    padding: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;


const ProjectImage = styled.img`
  width: 30%;
  height: auto;
  border-radius: 10px;
`;

const ProjectName = styled.h4`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333333;
  text-align: center;
`;

const ProjectSubtitle = styled.h5`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #666666;
  text-align: center;
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
  color: #666666;
  text-align: center;
`;

const ProjectHours = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
  color: #666666;
  text-align: center;
`;

const GithubLink = styled.a`
  font-size: 18px;
  font-weight: 400;
  color: blue;
  text-align: center;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #0366d6;
  }
`;

const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 60px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  margin: 10px;
  padding: 10px;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`;

const BarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const BarItem = styled.div<{ active: boolean }>`
  background-color: ${props => props.active ? '#333333' : '#cccccc'};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 10px;

  @media screen and (max-width: 768px) {
    width: 15px;
    height: 15px;
    margin: 0 5px;
  }
`;

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((index + 1) % projects.length);
  };

  const handlePrev = () => {
    const nextIndex = index - 1 < 0 ? projects.length - 1 : index - 1;
    setIndex(nextIndex);
  };

  return (
    <>
    <ProjectsContainer>
      <ArrowButton onClick={handlePrev}>&#8249;</ArrowButton>
      <ProjectCard>
        <ProjectImage src={projects[index].image} alt={projects[index].name} />
        <ProjectName>{projects[index].name}</ProjectName>
        <ProjectSubtitle>What did I learn?</ProjectSubtitle>
        <ProjectDescription>{projects[index].description}</ProjectDescription>
        <ProjectHours>{`Estimated Hours: ${projects[index].hours}`}</ProjectHours>
        {projects[index].githublink != "NONE" && <GithubLink href={projects[index].githublink} target="_blank">See On GitHub</GithubLink>}
      </ProjectCard>
      <ArrowButton onClick={handleNext}>&#8250;</ArrowButton>
    </ProjectsContainer>
    <BarContainer>
    {projects.map((project, i) => (
      <BarItem key={i} active={i === index} />
    ))}
  </BarContainer>
  </>
  );
};

export default Projects;