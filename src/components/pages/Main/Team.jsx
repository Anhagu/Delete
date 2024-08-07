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
  margin-top: 20px;
  height: 100px;
  line-height: 100px;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const MyTeam = styled.div`
  width: 40%;
  border: 1px solid black;
`

const ScheduledGame = styled.div`
  width: 50%;
  border: 1px solid black;
`