import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const SectionContainer = styled.section`
  background-color: #002333;
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
  color: white;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  background-color: white;
  color: #002333;
  border-radius: 8px;
  padding: 12px;
  margin: 16px;
  font-size: 24px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const ContactIcon = styled.span`
  font-size: 36px;
  margin-right: 12px;
`;

const FooterSection: React.FC = () => {
  const title = 'More About Me';
  const githubLink = 'https://github.com/matheuscervieri';
  const linkedinLink = 'https://www.linkedin.com/in/matheuscervieri/';
  const whatsapplink = `https://api.whatsapp.com/send?phone=${"+5554999735004"}&text=${"Hello, I visit your website and i would like to know more about you!"}`;

  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <ContactContainer>
       
        <ContactItem href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <ContactIcon>
            <FaLinkedin />
          </ContactIcon>
          LinkedIn
        </ContactItem>
        <ContactItem href={githubLink} target="_blank" rel="noopener noreferrer">
          <ContactIcon>
            <FaGithub />
          </ContactIcon>
          GitHub
        </ContactItem>
        <ContactItem href={whatsapplink} target="_blank" rel="noopener noreferrer">
          <ContactIcon>
            <FaWhatsapp />
          </ContactIcon>
          WhatsApp
        </ContactItem>
      </ContactContainer>
      
    </SectionContainer>
  );
};

export default FooterSection;