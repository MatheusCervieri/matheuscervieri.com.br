import React from 'react';
import styled from 'styled-components';
import ponggame from '../images/ponggame.png';
import publicchat from '../images/publicchat.png';
import privateprofile from '../images/privateprofile.png';
import ImagesInLine from '../Components/ImagesInLine';
import usersmodal from '../images/usersmodal.png';
import ranking from '../images/ranking.png';
import dashboard from '../images/dashboard.png';

const SectionContainer = styled.section`
  background-color: #f2f2f2;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #2c3e50;
  text-align: center;
`;

const SectionSubTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 24px;
  color: #2c3e50;
  text-align: center;
`;

const SectionText = styled.p`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  color: #555555;
  margin-left: 60px;
  margin-right: 60px;
  /* Add padding to the left of the bullet points */
`;

const ListContainer = styled.div`
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  color: #555555;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const List = styled.ul`
  margin-bottom: 20px;
  margin-left: 60px;
  padding-left: 20px;

  & li {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Image = styled.img`
  margin: 16px;
  width: 100%;
  height: auto;
  max-width: 800px; /* increase the max-width value to make the image bigger */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 100%; /* make the image take up the full width of the container on smaller screens */
  }
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

const FourthSection: React.FC = () => {
  const images = [usersmodal, dashboard, ranking];

  return (
    <SectionContainer id="bigproject">
      <SectionTitle>Big Project: Multiplayer Pong Game And Social Networking Using React, Typescript, Node and Nestjs!</SectionTitle>
      <SectionSubTitle>What is this project?</SectionSubTitle>
      <ImageContainer>
        <Image src={ponggame} alt="Game"></Image>
      </ImageContainer>
      <SectionText>
      <p>This is a full-stack website that I have developed alone, which allows users to play the classic game of Pong against each other. It also features a range of impressive functionalities, including a login system, user profiles, a match-making system, a group chat interface, a direct messaging system, a ranking system, a friends system, and a two-factor authentication system. This project offers an excellent opportunity to demonstrate technical proficiency across both front-end and back-end development.</p>
      <p>Estimated Hours: 245 hours (Two Months).</p>
      <GithubLink href="https://github.com/MatheusCervieri/Multiplayer-Pong-Game-And-Social-Networking-Using-React-Typescript-and-Nestjs-Ft_Transcendence-" target="_blank">See On Github</GithubLink>
      </SectionText>
      <SectionSubTitle>Which technologies did I use?</SectionSubTitle>
      <ImageContainer>
        <Image src={publicchat} alt="Chat"></Image>
      </ImageContainer>
      <ListContainer>
      <List>
        <li>Frontend: React, Typescript, Styled Components.</li>
        <li>Backend: Nest.js, Node.js, Express.js, PostgreSQL.</li>
        <li>Authentication: Passport, JWT.</li>
        <li>2FA: SendGrid API.</li>
        <li>Others: Docker, Docker Compose.</li>
      </List>
      </ListContainer>
      <SectionSubTitle>What did i build?</SectionSubTitle>
      <ImageContainer>
        <Image src={privateprofile} alt="Chat"></Image>
      </ImageContainer>
      <ListContainer>
      <List>
        <li>The website allows users to play real-time multiplayer Pong games with a chat feature and complies with specific rules, including using Node and NestJS for the backend, a TypeScript and React for the frontend, and PostgreSQL for the database.</li>
        <li>The User Account section of the website allows users to log in using the OAuth system of 42 intranet API, choose a unique name and avatar, enable two-factor authentication, add friends, view their status, display their stats, and have a match history including 1v1 games and ladder.</li>
        <li>The website's chat feature allows users to create public, private or password-protected channels, send direct messages and block other users, while channel owners can set a password, remove it, and appoint other administrators who have specific permissions to kick, ban or mute users, as well as invite users to play Pong games and access their profiles.</li>
        <li>The website is designed to allow users to play live Pong games against each other and features a matchmaking system for finding opponents, a customizable Pong game that is true to the original 1972 version, and the ability to select a default version without any extra features. The game is also responsive to ensure optimal gameplay.</li>
        <li>Ensuring full functionality of the website necessitates tackling security concerns such as hashing any stored passwords, safeguarding against SQL injections, and incorporating server-side validation for forms and user input.</li>
      </List>
      </ListContainer>
      <ImagesInLine images={images}/>
    </SectionContainer>
  );
};

export default FourthSection;
