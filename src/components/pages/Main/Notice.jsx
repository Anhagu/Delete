import React from 'react'
import styled from 'styled-components'

export default function Notice() {
  return (
    <div>
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
    margin-top: 20px;
    height: 100%;
    display: flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NoticeNum = styled.h4`
    font-style : bold;
    width: 10%;
    
`
const NoticeList = styled.div`
    width: 70%;
    border: 1px solid black;
    margin: 5px;
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
    width: 10%;
    width: 70px;
    height: 70px;
`