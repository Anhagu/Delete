import { style } from '@mui/system';
import React from 'react'
import styled from 'styled-components'

export default function TeamNotice() {
  return (
    <TeamNoticeContainer>
      <TeamNoticeTitle>팀 게시판</TeamNoticeTitle>

      <TeamNoticeBox>
        <NoticeTop>
          <NoticeIndex>Number</NoticeIndex>
          <NoticeTitle>Title</NoticeTitle>
          <NoticeDate>YYYY.MM.DD</NoticeDate>
        </NoticeTop>

        <NoticeBottom>
          <NoticeContents>Contents</NoticeContents>
        </NoticeBottom>
      </TeamNoticeBox>
    
    </TeamNoticeContainer>
  )
}

const TeamNoticeContainer = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
`;
const TeamNoticeTitle = styled.text`
  border: 1px solid #a8dba8;
  border-radius: 25px;
  padding: 5px;
  font-weight: bold;
  font-size: 22px;
`;

const TeamNoticeBox = styled.div`
  flex-direction: column;
`;

const NoticeTop = styled.div`
  flex-direction: row;
  font-size: 18px;
`;

const NoticeIndex = styled.text`
  font-weight: bold;
`;
const NoticeTitle = styled.text`

`;
const NoticeDate = styled.text`

`;


const NoticeBottom =styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const NoticeContents = styled.text``;