import React, { useState } from 'react';
import styled from 'styled-components'
import Header from '../pages/Main/Header'
import AdPage from '../pages/Main/AdPage'
import Footer from '../pages/Main/Footer'
import NoTeam from '../pages/Main/NoTeam'
import TournamentTeamInfo from './TournamentTeamInfo';
import HorizonLine from '../components/HorizonLine';
import TournamentTeamInfo2 from './TournamentTeamInfo2';
import Footer2 from '../pages/Main/Footer2';


const LeagueMain = () => {

  const [hasTeam, setHasTeam] = useState(true);

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
          <TournamentTeamInfo2 /> // 팀이 있을 경우 보여줄 컴포넌트
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
        <Footer2 />
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


export default LeagueMain;