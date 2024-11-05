import React, { useState } from 'react';
import styled from 'styled-components'
import Header from '../pages/Main/Header'
import AdPage from '../pages/Main/AdPage'
import Footer from '../pages/Main/Footer'
import NoTeam from '../pages/Main/NoTeam'
import TournamentTeamInfo from './TournamentTeamInfo';
import HorizonLine from '../components/HorizonLine';
import Footer21 from '../pages/Main/Footer21';


const LeagueMain21 = () => {

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
            팀원을 더 모집해주세요
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
        <Footer21 />
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
  justify-content: center;
  align-items: center;
  height: 64.3vh;
`;


export default LeagueMain21;