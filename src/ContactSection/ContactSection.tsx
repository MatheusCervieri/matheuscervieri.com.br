import React from 'react';
import styled from 'styled-components';
import ponggame from '../images/ponggame.png';
import publicchat from '../images/publicchat.png';
import privateprofile from '../images/privateprofile.png';
import ImagesInLine from '../Components/ImagesInLine';
import usersmodal from '../images/usersmodal.png';
import ranking from '../images/ranking.png';
import dashboard from '../images/dashboard.png';
import email from '../images/emailtamanhocerto.png';
import whatsapp from '../images/whatsapplogo.png'

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
  max-width: 200px; /* increase the max-width value to make the image bigger */

  @media (max-width: 768px) {
    max-width: 100%; /* make the image take up the full width of the container on smaller screens */
  }
`;

const StyledButton = styled.button`
  background-color: #25D366;
  color: #FFF;
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  height: 48px;
  margin: 16px;

  &:hover {
    background-color: #128C7E;
  }

  @media (max-width: 768px) {
    height: 40px;
  }

  @media (max-width: 480px) {
    height: 32px;
    padding: 8px 16px;
    font-size: 14px;
  }
`;



const FourthSection: React.FC = () => {
  const images = [usersmodal, dashboard, ranking];

  const handleButtonClick = () => {
    const whatsappLink = `https://api.whatsapp.com/send?phone=${"+5554999735004"}&text=${"Hello, I visit your website and i want to know more about you!"}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <SectionContainer id="contact">
      <SectionTitle>Contact Me</SectionTitle>
      <SectionSubTitle>E-mail</SectionSubTitle>
      <ImageContainer>
        <Image src={email} alt="Game"></Image>
      </ImageContainer>
      <SectionText>
      <p>E-mail: matcervieri@gmail.com</p>
      </SectionText>
      <SectionSubTitle>WhatsApp (The Fastest Way To Talk With Me)</SectionSubTitle>
      <ImageContainer>
        <Image src={whatsapp} alt="Chat"></Image>
      </ImageContainer>
      <p>My Number: +55 54 9 99735004. Feel free to give me a normal call if you need anything.</p>
    <StyledButton onClick={handleButtonClick}>
        Send Me a WhatsApp Message!
    </StyledButton>
    </SectionContainer>
  );
};

export default FourthSection;
