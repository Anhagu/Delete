import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Cookies from 'js-cookie'; // js-cookie 라이브러리 사용
import Header from './Header';
import AdPage from './AdPage';
import Footer from './Footer';
import NoTeam from './NoTeam';
import TeamInfo2 from './TeamInfo2';
import Footer2 from './Footer2'
import TeamInfo3 from './TeamInfo3'
import HorizonLine from '../../components/HorizonLine';

export default function Main4() {

  useEffect(() => {
    // 쿠키 값 확인
    const accessToken = Cookies.get('access_token'); // 'access_token' 쿠키 가져오기

    if (accessToken) {
      // 유저 정보 조회 API 호출
      axios
        .get('http://localhost:8080/api/users/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Bearer 토큰으로 전달
          },
        })
        .then(response => {
          console.log('User Info:', response.data); // 유저 정보 콘솔 출력
        })
        .catch(error => {
          console.error('Error fetching user info:', error); // 에러 처리
        });
    } else {
      console.error('Access token not found in cookies.');
    }
  }, []);

  return (
    <div className='main'>
      <MainContainer>
        <Header />
        <AdPageContainer>
          <AdPage />
        </AdPageContainer>

        <HorizonLine />

        <MatchScheduleContainer>
          <TeamInfo3/>
          {/* {hasTeam ? (
            <TeamInfo /> // 팀이 있을 경우 보여줄 컴포넌트
          ) : (
            <NoTeam /> // 팀이 없을 경우 NoTeam 컴포넌트 표시
          )} */}
        </MatchScheduleContainer>

        <Footer2 />
      </MainContainer>
    </div>
  );
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
