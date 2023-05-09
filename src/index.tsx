import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstSection from './FirstSection/FirstSection';
import FooterSection from './FooterSection/FooterSection';
import GlobalStyles from './GlobalStyle';
import SecondSection from './SecondSection/SecondSection';
import ThirdSection from './ThirdSection/ThirdSection';
import FourthSection from './FourthSection/FourthSection';
import FifthSection from './FifthSection/FifthSection';
import Header from './Header/Header';
import ContactSection from './ContactSection/ContactSection';
import CurrentWorkingSection from './CurrentWorking/CurrentWorkingSection';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'current', label: 'Current Working'},
  { id: 'bigproject', label: 'Big Web Project' },
  { id: 'softwareprojects', label: 'Software Engineer Projects' },
  { id: 'contact', label: 'Contact' },
];

root.render(
  <React.StrictMode>
    <Header sections={sections} />
    <GlobalStyles/>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
    <CurrentWorkingSection/>
    <FourthSection/>
    <FifthSection/>
    <ContactSection/>
    <FooterSection/>
  </React.StrictMode>
);
