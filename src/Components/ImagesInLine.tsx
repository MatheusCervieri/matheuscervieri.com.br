import React from 'react';
import styled from 'styled-components';

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 24px;
`;

const Image = styled.img`
  width: 400px;
  height: auto;
  margin: 8px;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

interface Props {
  images: string[];
}

const ImagesInLine: React.FC<Props> = ({ images }) => {
  return (
    <ImagesContainer>
      {images.map((src, index) => (
        <Image key={index} src={src} alt={`image-${index}`} />
      ))}
    </ImagesContainer>
  );
};

export default ImagesInLine;
