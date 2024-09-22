import React from 'react'
import styled from 'styled-components'

export default function Join() {
  return (
    <TeamContainer>
      <TeamInfo>
        <TeamTop>
        <TeamName>팀 이름</TeamName>
        <TeamLPG>팀 인원</TeamLPG>
        </TeamTop>

        <LPGContainer>
            <TeamLPG>팀 지역</TeamLPG>
            <TeamLPG>팀 성별</TeamLPG>
        </LPGContainer>
      </TeamInfo>
        <JoinBtn>
            가입하기
        </JoinBtn>
    </TeamContainer>
  )
}


const TeamContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    padding-bottom: 5px;
    width: 100%;
    border-bottom: 1px solid #9e9e9e;
`;

const TeamInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
`;

const TeamTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const TeamName = styled.text`
    font-weight: bold;
    font-size: 22px;
`;

const LPGContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

`;

const TeamLPG = styled.text`
    font-size: 18px;
    color: #5b5b5b;

`;

const JoinBtn = styled.button`
    border: none;
    background-color: #cff09e;
    border-radius: 15px;
    width: 40%;
    height: 50px;
    font-size: 1rem;
    margin-right: 5px;

    &:hover{
        border: none;
        background-color: #a8dba8;
    }
`;




