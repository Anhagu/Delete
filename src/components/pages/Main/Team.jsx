import React from 'react'
import styled from 'styled-components';

export default function Team() {
  return (
    <MainTeam>
      <MyTeam>
        팀 이름
        순위
      </MyTeam>
      <ScheduledGame>
        상대 팀 이름 YYYY. MM .DD
      </ScheduledGame>
    </MainTeam>
  );
}

const MainTeam = styled.div`
  padding: 5px;
  background-color: grey;
  margin-top: 20px;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const MyTeam = styled.div`
  width: 40%;
  border: 1px solid black;
  background-color: white;
`

const ScheduledGame = styled.div`
  width: 50%;
  border: 1px solid black;
  background-color: white;
`