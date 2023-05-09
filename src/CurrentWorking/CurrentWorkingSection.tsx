import React from 'react';
import styled from 'styled-components';
import gifgeradorads from '../images/gifgeradordeads.gif';
import itausemfundo from '../images/itausemfundo.png';

const SectionContainer = styled.section`
  background-color: #1e1e1e; /* change the background color */
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
  color: #ffffff; /* change the font color */
  text-align: center;
`;

const SectionSubTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 24px;
  color: #ffffff; /* change the font color */
  text-align: center;
`;

const SectionText = styled.p`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  color: #cccccc; /* change the font color */
  margin-left: 60px;
  margin-right: 60px;
`;

const ListContainer = styled.div`
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  color: #cccccc; /* change the font color */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 100%;
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
  max-width: 700px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1); /* change the shadow color */

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;


const StyledLink = styled.a`
  // Your styles for the link
`;


const CurrentWorkingSection: React.FC = () => {

  return (
    <SectionContainer id="current">
      <SectionTitle>Current Working</SectionTitle>
      <SectionSubTitle>Gerador de Ads - Founder and CTO - 2023-Present</SectionSubTitle>
      <ImageContainer>
        <Image src={gifgeradorads} alt="Gerador de Ads"></Image>
      </ImageContainer>
      <ListContainer>
        <List>
        <li>I created a web application that generates professional ads for Facebook with just one click using artificial intelligence (OpenAi Api). I did everything from the conception of the product to the development using React, TypeScript, Node, NestJS, and MongoDB. I also created the marketing for the product. And, we have already acquired our first customers.</li>
          <li>I was responsible for the entire development of the software from planning to execution. I used various technologies such as React, TypeScript, styled-components, Node, NestJS, Docker.</li>
          <li> I integrated with several services and APIs: OpenAI (artificial intelligence), SendGrid (email), Amazon AWS S3 (Save Images), Hotmart (payment platform). I gained extensive experience with APIs and webhooks.</li>
          <li>I also handled the hosting of the application.</li>
          <li>
          You can access our website at <StyledLink href="https://geradordeads.com/gerador" target="_blank" rel="noopener noreferrer">geradordeads.com/gerador</StyledLink> and you can see the hosted application at <StyledLink href="https://app.geradordeads.com" target="_blank" rel="noopener noreferrer">app.geradordeads.com.</StyledLink>
          </li>
        </List>
      </ListContainer>
      <SectionSubTitle>42 Labs - Itaú Unibanco - 2023-Present</SectionSubTitle>
      <ImageContainer>
        <Image src={itausemfundo} alt="Eu Medicina"></Image>
      </ImageContainer>
      <ListContainer>
        <List>
        <li>A laboratory within 42 School where students receive a scholarship to develop a real software engineer product in collaboration with a partner company, in this case, Itaú, the largest private bank in Brazil.</li>
        <li>I passed the selection process to receive this scholarship and be able to participate in this project.</li> 
        <li>We are currently creating plugins for https://stackspot.com/</li>
        </List>
      </ListContainer>
    </SectionContainer>
  );
};

export default CurrentWorkingSection;