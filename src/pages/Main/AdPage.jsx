import React, { useEffect, useState } from 'react'

import car from '../../slideImg/car.jpeg'
import crayon from '../../slideImg/crayon.jpeg'
import umbrella from '../../slideImg/umbrella.jpeg'

import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import styled from 'styled-components';

export default function AdPage() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [car, crayon, umbrella];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1 );
    }, 5000); // 3초마다 슬라이드 변경
    
    return () => clearInterval(interval);
  }, [images.length]);

  // 이전 슬라이드
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  // 다음 슬라이드
  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };


  return (
    <SliderContainer>
        <SlideImage src={images[currentIndex]} alt={`slide - ${currentIndex}`} />
        
        <ImageCounter>
          {currentIndex + 1} / {images.length}
        </ImageCounter>


        <ButtonContainer>
          <SkipPreviousRoundedIcon
            onClick={prevSlide} 
            fontSize='large'
            sx={{border: '1px solid black'}}/>
          <SkipNextRoundedIcon 
            onClick={nextSlide} 
            fontSize='large'
            sx={{border: '1px solid black'}}/>
        </ButtonContainer>    
    </SliderContainer>
      
  )
}

const SliderContainer = styled.div`
  position: relative;
  top : 15px;
  width: 100%;
  max-width: 800px;
  height: 300px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 390px) {
    width: 95%;
    height: 80%;
  }
`;

const SlideImage = styled.img`
  width: 90%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 390px) {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

const ImageCounter = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 16px;
`;