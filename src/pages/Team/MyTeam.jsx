import React from 'react'
import styled from 'styled-components'

export default function MyTeam() {
  return (
    <MyTeamContainer>
      <MyTeamName>내가 속한 팀</MyTeamName>
      <MyTeamRank>NN위</MyTeamRank>
    </MyTeamContainer>
  )
}


const MyTeamContainer = styled.div`
    width: 60%;
    height: 240px;
    display: flex;
    justify-content: space-between;
    background-color: skyblue;
`;

const MyTeamName = styled.text`
    font-weight: bold;
    font-size: 20px;
`;

const MyTeamRank = styled.text`
    font-size: 18px;
    font-weight: lighter;
`;
