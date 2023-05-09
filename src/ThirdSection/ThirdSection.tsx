import React from 'react';
import styled from 'styled-components';
import instagramlive from '../images/aulaoinsta.png';
import livemarketing from '../images/livemarketing.png';

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
  width: 60%;
  height: auto;
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1); /* change the shadow color */

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ThirdSection: React.FC = () => {

  return (
    <SectionContainer id="experience">
      <SectionTitle>Experience!</SectionTitle>
      <SectionSubTitle>Memória de Elefante - Founder and CEO - 2017-2022</SectionSubTitle>
      <ImageContainer>
        <Image src={instagramlive} alt="Eu Medicina"></Image>
      </ImageContainer>
      <ListContainer>
        <List>
        <li>Founded an online business to help students prepare for the exam to enter medical school in Brazil through a Youtube channel, Instagram, online courses, coaching, and mentoring.</li>
          <li>Had more than <b>5,000 paying students</b> in online courses teaching study and productivity techniques to enter Medical School.</li>
          <li>Organized free online events on Instagram to share knowledge, reaching up to <b> 5,000 people simultaneously in a single Instagram live.</b></li>
          <li>
            Grew an <a href="https://www.instagram.com/matheuscervieri" target="_blank" rel="noopener noreferrer">Instagram</a> following to 35,000+ followers, a <a href="https://www.youtube.com/@MatheusCervieri/videos" target="_blank" rel="noopener noreferrer">YouTube</a> channel to 40,000+ subscribers, and <a href="https://www.tiktok.com/@matheuscervieri" target="_blank" rel="noopener noreferrer">TikTok</a> account to 10,000+ followers.
          </li>
          <li>Learned the fundamentals of digital marketing, including copywriting and paid traffic (Facebook Ads, Google Ads, TikTok Ads).</li>
          <li>Learned how to create and host WordPress websites and mail services.</li>
          <li>Learned <b>HTML, CSS, and JavaScript.</b></li>
          <li>Learned how to design and create digital products that sell.</li>
        </List>
      </ListContainer>
      <SectionSubTitle>Digital Marketing Consultant - 2021-2022</SectionSubTitle>
      <ImageContainer>
        <Image src={livemarketing} alt="Eu Medicina"></Image>
      </ImageContainer>
      <ListContainer>
        <List>
        <li>Took the digital marketing knowledge acquired while creating a business to help students get into medical school and started teaching it through online courses and mentorships.</li>
        <li><b>Personally mentored more than 40 people</b> who wanted to launch their digital products, teaching Facebook ads, Google ads, TikTok ads, copywriting, product design, organic growth, and WordPress site creation.</li>
        <li>Had more than <b>500 paying students in an online course </b>about digital product creation.</li>
        </List>
      </ListContainer>
    </SectionContainer>
  );
};

export default ThirdSection;