import React from 'react'
import styled from 'styled-components'
import Notice from './Notice';

export default function Notice() {
  return (
    <div>
      <h3>공지사항</h3>
      <NoticePage>
        <NoticeNum>1</NoticeNum>
        <NoticeList>
            <Title>공지제목</Title>
            <Content>공지내용</Content>
        </NoticeList>
        <NoticeBtn>확인</NoticeBtn>
      </NoticePage>
    </div>
  )
}

const NoticePage = styled.div`
    height: 100%;
    display: flex;
    background-color: skyblue;
`

const NoticeNum = styled.h4`
    font-style : bold;
    width: 10%;
    background-color: pink;
`
const NoticeList = styled.div`
    widgh: 70%;
    background-color:white;
`
const Title = styled.h4`
    font-styled : bold;
`

const Content = styled.p`
    color: grey;
`

const NoticeBtn = styled.button`
    border : 1px solid grey;
    padding: 5px;
    width: 40px;
    heigth: 40px;
`