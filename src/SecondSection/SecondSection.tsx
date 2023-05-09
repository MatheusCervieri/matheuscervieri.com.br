import React from 'react';
import styled from 'styled-components';
import eumedicina from '../images/eumedicina.png';
import logo42 from '../images/42_logo.png';

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
  max-width: 500px; /* increase the max-width value to make the image bigger */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 100%; /* make the image take up the full width of the container on smaller screens */
  }
`;

const SecondSection: React.FC = () => {

  return (
    <SectionContainer id='education'>
      <SectionTitle>Education!</SectionTitle>
      <SectionSubTitle>Medical School - Atitus Educação(Imed) - 2016-2018</SectionSubTitle>
      <ImageContainer>
        <Image src={eumedicina} alt="Eu Medicina"></Image>
      </ImageContainer>
      <SectionText>
        <p>I successfully passed the entrance exam for Medical School in Brazil, a highly competitive process with over 55 candidates per available spot, and completed two years of study there.</p>
      </SectionText>
      <SectionSubTitle>It Architecture Expert - École 42 - 2022-2024(expected)</SectionSubTitle>
      <ImageContainer>
        <Image src={logo42} alt="Eu Medicina"></Image>
      </ImageContainer>
      <ListContainer>
        <List>
        <li>Bac+3 (equivalent to a US Bachelor's degree) coursework. Entirely project-based course.</li>
<li>École 42 ranks as the tenth <b>most innovative university in the world</b>, according to the <a href="https://www.wuri.world/global-top-100-innovative-2021" target="_blank" rel="noopener noreferrer">WURI ranking</a>.</li>
<li>I received a <b>full scholarship</b> covering all my expenses for studying there.</li>
<li>In my class, I was the fastest to complete the core curriculum, which consists of 16 real-world projects that take an average of <b>1600 hours (16 months) to finish. I completed them in just 11 months.</b></li>
        </List>
      </ListContainer>
    </SectionContainer>
  );
};

export default SecondSection;
