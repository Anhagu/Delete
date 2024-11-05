import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import HorizonLine from '../components/HorizonLine';

const TournamentTeamInfo2 = () => {
    const navigate = useNavigate();
    const teamName = "파이팅FC";
    const teamRank = 8;

    const nextMatch = {
        opponentTeam: '대진표 작성중',
        day: '토요일',
        time: '오후 3시',
        location: '서울 경기장',
        leagueLevel: 6
    };

    const lastMatches = [
        {
            opponentTeam: '사자FC',
            score: '승 - 패',
            date: '오늘',
        },
        {
            opponentTeam: '히어로FC',
            score: '승 - 패',
            date: '지난주 금요일',
        }
    ];

    const handleButtonClick = () => {
        alert("대진표를 작성중입니다.\n다른 팀의 경기 종료를 기다려주세요");
    };

    return (
        <TeamContainer>
            <TeamInfoContainer>
                <TeamName>{teamName}</TeamName>
                <TeamRank>팀 순위: {teamRank}위</TeamRank>
            </TeamInfoContainer>

            <MatchInfo>
                <MatchTitle>
                    다음 경기 일정 ({nextMatch.leagueLevel}강)
                </MatchTitle>

                <MatchContainer>
                    <MatchTeamContainer>
                        <MatchDetail>{teamName}</MatchDetail>
                        <MatchDetail> vs </MatchDetail>
                        <MatchDetail>{nextMatch.opponentTeam}</MatchDetail>
                    </MatchTeamContainer>
                </MatchContainer>
                <GoMatch onClick={handleButtonClick}>경기하러 가기</GoMatch>
            </MatchInfo>

            <HorizonLine />

            <MatchInfo>
                <MatchTitle>이전 경기 결과</MatchTitle>

                {lastMatches.map((match, index) => (
                    <MatchContainer key={index}>
                        <MatchTeamContainer>
                            <MatchDetail>{teamName}</MatchDetail>
                            <MatchDetail> {match.score} </MatchDetail>
                            <MatchDetail>{match.opponentTeam}</MatchDetail>
                        </MatchTeamContainer>
                        <MatchInfoContainer>
                            <MatchDetail>날짜: {match.date}</MatchDetail>
                        </MatchInfoContainer>
                    </MatchContainer>
                ))}
            </MatchInfo>
        </TeamContainer>
    );
}

const TeamContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
    width: 95%;
`;

const TeamInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    border-radius: 10px;
    padding: 0 30px;
    background-color: #f7f7f7;
`;

const TeamName = styled.h2`
    font-size: 1.5rem;
`;

const TeamRank = styled.p`
    font-size: 1.2rem;
`;

const MatchInfo = styled.div`
    margin: 10px;
    border-radius: 10px;
    padding: 0 10px;
    background-color: #f7f7f7;
`;

const MatchTitle = styled.h3`
    font-size: 1.3rem;
    margin: 10px 0;
`;

const MatchContainer = styled.div`
    border-radius: 6px;
    padding: 0 10px;
    background-color: #cecece;
    margin-bottom: 10px;
`;

const MatchTeamContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: large;
    font-weight: bold;
    padding: 0 40px;
`;

const MatchInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 6px;
`;

const MatchDetail = styled.p`
    margin: 5px 0;
`;

const GoMatch = styled.button`
    margin-bottom: 10px;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #4caf50;
    color: white;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #409543;
    }
`;

export default TournamentTeamInfo2;
