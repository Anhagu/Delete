import React, { useState } from 'react';
import styled from 'styled-components'
import Header from './Header'
import AdPage from './AdPage'
import Footer from './Footer'
import NoTeam from './NoTeam'
import Calendar from './Calendar'
import SettingFiled from './SettingFiled'
import MainLeagueList from './MainLeagueList'
import { Box } from '@mui/material'
import TeamInfo from './TeamInfo';
import HorizonLine from '../../components/HorizonLine';


export default function Main() {

  const [hasTeam, setHasTeam] = useState(true); // 팀 가입 여부 상태


  return (
    <div className='main'>
      <MainContainer>
        <Header />
        <AdPageContainer>
          <AdPage />
        </AdPageContainer>

        <HorizonLine/>

        <MatchScheduleContainer>
        {hasTeam ? (
          <TeamInfo /> // 팀이 있을 경우 보여줄 컴포넌트
        ) : (
          <NoTeam /> // 팀이 없을 경우 NoTeam 컴포넌트 표시
        )}
        </MatchScheduleContainer>

        {/* <Calendar /> */}
        {/* <SettingFiled /> */}
        {/* {notices.map((notice) =>(
          <MainLeagueList num={notice.num} title={notice.title} content={notice.contents} />
        ))}
        <Box sx={{
          height : {
            xs: '120px',
            md: '200px'
          }
        }}/> */}
        <Footer />
      </MainContainer>
    </div>
  )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const AdPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20vh;
  background-color: #f7f7f7;
`;

const MatchScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 64.3vh;
`;
