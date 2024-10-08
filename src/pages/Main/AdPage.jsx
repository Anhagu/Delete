  import React, { useEffect, useState } from 'react'

  // import car from '../../slideImg/car.jpeg'
  // import crayon from '../../slideImg/crayon.jpeg'
  // import umbrella from '../../slideImg/umbrella.jpeg'

  import MainFirstImg from '../../img/MainFirstImg.png'
  import MainSecondImg from '../../img/MainSecondImg.png'
  import MainThirdImg from '../../img/MainThirdImg.png'

  import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
  import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
  import styled from 'styled-components';

  export default function AdPage() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [MainFirstImg, MainSecondImg, MainThirdImg];

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
          
          {/* <ImageCounter>
            {currentIndex + 1} / {images.length}
          </ImageCounter> */}


          <ButtonContainer>
            <SlideButton onClick={prevSlide} >
              <SkipPreviousRoundedIcon fontSize='large'/>
            </SlideButton>

            <SlideButton onClick={nextSlide} >
              <SkipNextRoundedIcon fontSize='large'/>
            </SlideButton>
          </ButtonContainer>    
      </SliderContainer>
        
    )
  }

  const SliderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    margin: 0 auto;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 90%;
    max-width: 800px;
    overflow: hidden;
  `;

  const SlideImage = styled.img`
    width: 100%;
    height: 100%;
    max-height: 400px;
    object-fit: contain;
  `;

  const ImageCounter = styled.div`
    margin-top: 10px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    padding: 5px 10px;
    font-size: 16px;
    color: white;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  `;

  const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 50%;
    width: 100%;
    padding: 0 20px;
    transform: translateY(-80%);
  `;

  const SlideButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: white;
  `;