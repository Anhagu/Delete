import React from 'react'
import styled from 'styled-components'

export default function MainTeamList({num, title, content}) {
  return (
    <div>
      <NoticePage>
        <NoticeNum>{num}</NoticeNum>
        <NoticeList>
            <Title>{title}</Title>
            <Content>{content}</Content>
        </NoticeList>
        <NoticeBtn type='submit'>확인</NoticeBtn>
      </NoticePage>
    </div>
  )
}

const NoticePage = styled.div`
    margin-top: 20px;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;

    @media (max-width: 390px) {
      width: 100%;
      margin: 0 auto;
    }
`;

const NoticeNum = styled.h4`
    font-style : bold;
    width: 10%;

    @media (max-width: 390px) {
    width: 100%;
    text-align: center;
  }
`;

const NoticeList = styled.div`
    width: 70%;
    border: 1px solid black;
    margin: 5px;
    background-color:white;

    @media (max-width: 390px) {
    width: 100%;
  }

`;
const Title = styled.h4`
    font-weight : bold;
    margin: 5px 0;
`

const Content = styled.p`
    color: grey;
    margin: 5px 0;
`

const NoticeBtn = styled.button`
    border : 1px solid grey;
    padding: 5px;
    width: 70px;
    height: 70px;
    cursor: pointer;

    @media (max-width: 768px) {
    width: 100px;
    height: 50px;
  }
`