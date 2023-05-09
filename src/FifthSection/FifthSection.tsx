import React from 'react';
import styled from 'styled-components';
import Projects from '../Components/Projects';
import fortytwo from '../images/42semfundo.png';

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

const projects = [
  {
    name: 'Build My Own C++ HTTP Server (Webserv)',
    image: require('../images/42projects/webservn.png'),
    description: 'Learn how the HTTP protocol works building my own web server from scratch using advanced programming techniques such as I/O multiplexing and object-oriented design. I also learn how to use GitHub with a team (Issues, Pull Requests, Branches, etc).',
    hours: '175 hours',
    githublink: 'https://github.com/vcwild/webserv'
  },
  {
    name: 'Create a Multi-Container Docker Application with Nginx, WordPress, and MariaDB (Inception)',
    image: require('../images/42projects/inceptione.png'),
    description: 'Learn how to create and manage multi-container applications with Docker Compose. Build and deploy a scalable web application with a production-ready configuration using Nginx, WordPress, and MariaDB. Explore advanced Docker features such as volume management and container orchestration.',
    hours: '210 hours',
    githublink: 'https://github.com/MatheusCervieri/intra_inception/'
  },
  {
    name: 'Recreate My Own Version Of The C++ Containers Feature (Map and Vector) (Ft_Containers)',
    image: require('../images/42projects/ft_containerse.png'),
    description: 'Implemented a subset of the C++ Standard Template Library (STL) containers - Map and Vector - from scratch, utilizing object-oriented programming principles and the dynamic allocation of memory. Developed a deep understanding of algorithms, data structures, and template programming, and applied these concepts to solve complex problems.',
    hours: '140 hours',
    githublink: 'https://github.com/MatheusCervieri/ft_containers'
  },
  {
    name: 'C++ Piscine (Object Oriented Programming)',
    image: require('../images/42projects/cppe.png'),
    description: 'Developed a strong understanding of object-oriented programming concepts in C++, including encapsulation, inheritance, and polymorphism.',
    hours: '155 hours',
    githublink: 'https://github.com/MatheusCervieri/C-Plus-Plus-Piscine'
  },
  {
    name: 'Create a 3D game engine with raycasting graphics (Cub3D)',
    image: require('../images/42projects/cub3de.png'),
    description: 'I created a fully functional 3D game engine using raycasting graphics, a technique used to simulate 3D environments on a 2D screen. I used C programming language and the MinilibX library to create a game. Through this project, I gained experience with advanced programming concepts such as memory allocation, file handling, and optimization techniques. Besides that, i learn how to use advanced math concepts in code.',
    hours: '280 hours',
    githublink: 'https://github.com/MatheusCervieri/Cub3d'
  },
  {
    name: 'Implement the Dining Philosophers problem in C (Philosophers)',
    image: require('../images/42projects/philosopherse.png'),
    description: 'Implemented a solution to the classic synchronization problem known as the Dining Philosophers problem using C. This project involved managing threads and mutexes. Through this project, I gained experience with concurrent programming and synchronization techniques.',
    hours: '70 hours',
    githublink: 'https://github.com/MatheusCervieri/Philosofers-'
  },
  {
    name: 'Develop a Unix shell from scratch using C (Minishell)',
    image: require('../images/42projects/minishellm.png'),
    description: 'Developed a Unix shell program from scratch using C programming language. This project involved implementing shell features such as pipes, redirection, and signal handling. Through this project, I gained experience with system calls, process management, and Unix environment variables.',
    hours: '210 hours',
    githublink: 'https://github.com/MatheusCervieri/Minishell'
  },
  {
    name: 'Implement an efficient sorting algorithm for a stack of numbers (Push Swap)',
    image: require('../images/42projects/push_swape.png'),
    description: 'Implemented an efficient sorting algorithm for a stack of numbers using C programming language. This project involved designing a custom algorithm to sort a list of numbers while minimizing the number of moves used. Through this project, I gained experience with algorithm design, complexity analysis, and optimization techniques.',
    hours: '60 hours',
    githublink: 'https://github.com/MatheusCervieri/Push_Swap'
  },
  {
    name: 'Implement a pipeline for executing simple commands (Pipex)',
    image: require('../images/42projects/pipexe.png'),
    description: 'Implemented a program in C that simulates a pipeline for executing simple commands. This project involved managing input/output from files and piping data between processes. Through this project, I gained experience with system calls, process management, and file I/O operations.',
    hours: '60 hours',
    githublink: 'https://github.com/MatheusCervieri/PIPEX'
  },
  {
    name: 'Network Programming Practice (NetPractice)',
    image: require('../images/42projects/netpracticee.png'),
    description: 'Developed my understanding of networks by undestand various protocols such as TCP.',
    hours: '50 hours',
    githublink: 'NONE'
  },
  {
    name: 'Create a Debian Virtual Machine (Born To Be Root)',
    image: require('../images/42projects/born2berootm.png'),
    description: 'This project delves into the workings of a Linux system, providing an understanding of user management, system files, and security mechanisms such as access control lists and permissions. By completing this project, I gained knowledge on how to harden a system against common attacks and how to configure firewall rules.',
    hours: '40 hours',
    githublink: 'NONE'
  },
  {
    name: 'My Own C Printf Implementation (ft_printf)',
    image: require('../images/42projects/printf.png'),
    description: 'Created a custom implementation of the printf function in C. I gained experience with variable argument lists, string manipulation, and parsing.',
    hours: '70 hours',
    githublink: 'https://github.com/MatheusCervieri/ft_printf'
  },
  {
    name: 'Custom Get Next Line Function (Get Next Line)',
    image: require('../images/42projects/get_next_linee.png'),
    description: 'Developed a custom function for reading a file one line at a time in C. I learned about file handling, memory allocation, and the use of static variables.',
    hours: '70 hours',
    githublink: 'https://github.com/MatheusCervieri/Get-Next-Line-42Sp'
  },
  {
    name: 'Custom Standard Library Functions (Libft)',
    image: require('../images/42projects/libfte.png'),
    description: 'My own implementation of standard C functions. This project helped me to develop a deeper understanding of data structures, memory allocation, and string manipulation in C.',
    hours: '70 hours',
    githublink: 'https://github.com/MatheusCervieri/Libft'
  },
  {
    name: 'C Programming Bootcamp (C Piscine)',
    image: require('../images/42projects/c.png'),
    description: 'Completed an intensive 20 days bootcamp to learn the fundamentals of C programming. This project covered topics such as memory allocation, pointers, data structures, and algorithms.',
    hours: '155 hours',
    githublink: 'https://github.com/MatheusCervieri/BaseCamp'
  },
];

const FifthSection: React.FC = () => {

  return (
    <SectionContainer id="softwareprojects">
      <SectionTitle>42 School Software Engineer Projects!</SectionTitle>
      <SectionSubTitle>What is it?</SectionSubTitle>
      
      <SectionText>42 School is one of the 10 most innovative universities in the world according to the <a href="https://www.wuri.world/global-top-100-innovative-2021" target="_blank">WURI</a> ranking, and it is entirely based on projects. This section showcases the 16 projects of the core curriculum. All projects go through 3 evaluations to verify if they meet the requirement. I was the fastest person in my class to complete the 16-month core curriculum in just 9 months.</SectionText>
      
      <SectionSubTitle>Projects!</SectionSubTitle>
      <Projects projects={projects}/>
  
    </SectionContainer>
  );
};

export default FifthSection;