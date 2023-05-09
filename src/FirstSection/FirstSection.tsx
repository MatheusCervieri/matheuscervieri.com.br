import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import perfil from '../images/perfil.png';
import { Link } from 'react-scroll';

const SectionContainer = styled.section`
  background-color: #2e2e2e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 0;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 16px;
  text-align: center;
  color: #f2f2f2;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 32px;
  text-align: center;
  color: #f2f2f2;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Button = styled(Link)`
  background-color: #ed1c24;
  color: #f2f2f2;
  border-radius: 50px;
  padding: 16px 32px;
  font-size: 18px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  margin-bottom: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ac050b;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 24px;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100%;
  max-width: 200px;
  height: auto;
  object-fit: cover;
  margin-right: 24px;
  margin: 0px 0px 0px 0px;
  border: 3px solid #ed1c24;
  border-radius: 50%;
`;

const BlueText = styled.span`
  color: #0077B5;
`;

const FirstSection: React.FC = () => {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const title = "I'm Matheus Cervieri, a ";
  const subtitle = "I created this full responsive web page with React, TypeScript and Styled Components to demonstrate my web development skills. Let's build innovative web applications together.";
  const buttonText = 'About Me!';

  return (
    <SectionContainer id="home" ref={aboutSectionRef}>
   
       <ProfileImage src={perfil} alt="Profile image" />
      <Title>
        {title}
        <BlueText>Fullstack Web Developer!</BlueText>
      </Title>

      <Subtitle>{subtitle}</Subtitle>
      <Button to="education" smooth={true} duration={500} offset={-60}>{buttonText}</Button>
    </SectionContainer>
  );
};

export default FirstSection;