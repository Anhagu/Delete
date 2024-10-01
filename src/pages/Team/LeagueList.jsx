import React from 'react'
import styled from 'styled-components'

export default function LeagueList() {




  return (
    <LeagueListContainer>
      <LeagueListTitle>예정된 경기</LeagueListTitle>

      <LeagueListBox>
        <OtherTeamName>상대 팀 이름</OtherTeamName>
        <LeagueDate>YYYY.MM.DD HH:mm</LeagueDate>
      </LeagueListBox>
      
      <LeagueLocation>용산 아이파크몰 8층</LeagueLocation>
    </LeagueListContainer>
  )
}

const LeagueListContainer = styled.div`
    width: 100%;
    height: 360px;
    display: flex;
    margin-top: 10px;
`;

const LeagueListTitle = styled.text`
  font-weight: bold;
  font-size: 22px;
  border: 1px solid #a8dba8;
  padding: 5px;
  margin: 5px;
`;

const LeagueListBox = styled.div`
  border-bottom: 1px solid #a8dba8;
  justify-content: space-around;
  font-size: 20px;
`;


const OtherTeamName = styled.text`
  font-weight: bold;
`;

const LeagueDate = styled.text`
  color: #4d4d4d;
`;

const LeagueLocation = styled.text`
  color: #4d4d4d;
`;