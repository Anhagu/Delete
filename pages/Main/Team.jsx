import React from 'react'
import styled from 'styled-components';

export default function Team() {
  return (
    <MainTeam>
      <MyTeam>
        <span>팀 이름</span>
        <span>순위</span>
      </MyTeam>
      <ScheduledGame>
        <span>상대 팀 이름</span>
        <span>YYYY. MM .DD</span>
      </ScheduledGame>
    </MainTeam>
  );
}

const MainTeam = styled.div`
  padding: 5px;
  margin-top: 20px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    align-items: center;
    line-height: 1.5;
  }
`;

const MyTeam = styled.div`
  width: 45%;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 20px;

  @media (max-width: 1200px) {
    width: 60%;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ScheduledGame = styled.div`
  width: 45%;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 20px;

  @media (max-width: 1200px) {
    width: 60%;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    margin-top: 15px;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;