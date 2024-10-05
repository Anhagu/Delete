import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import HorizonLine from '../components/HorizonLine';

const TournamentTeamInfo = () => {
    const navigate = useNavigate(); // useNavigate 훅 사용
    const teamName = "우리a 팀";
    const teamRank = 3;

    const nextMatch = {
        opponentTeam: '너네 팀',
        day: '토요일',
        time: '오후 3시',
        location: '서울 경기장',
        leagueLevel: 8 // 여기에 강의 레벨을 추가
    };

    const lastMatch = {
        opponentTeam: '그들 팀',
        score: '3 - 2',
        date: '지난 주 금요일',
    };

    const handleButtonClick = () => {
        // 경기하러 가기 버튼 클릭 시 TournamentScore 페이지로 이동
        navigate('/leagueMain/TournamentScore');
    };

    return (
        <TeamContainer>
            <TeamInfoContainer>
                <TeamName>{teamName}</TeamName>
                <TeamRank>팀 순위: {teamRank}위</TeamRank>
            </TeamInfoContainer>

            <MatchInfo>
                <MatchTitle>
                    다음 경기 일정 ({nextMatch.leagueLevel}강) {/* 여기에서 N을 leagueLevel로 변경 */}
                </MatchTitle>

                <MatchContainer>
                    <MatchTeamContainer>
                        <MatchDetail>{teamName}</MatchDetail>
                        <MatchDetail> vs </MatchDetail>
                        <MatchDetail>{nextMatch.opponentTeam}</MatchDetail>
                    </MatchTeamContainer>
                    <MatchInfoContainer>
                        <MatchDetail>요일: {nextMatch.day}</MatchDetail>
                        <MatchDetail>시간: {nextMatch.time}</MatchDetail>
                        <MatchDetail>장소: {nextMatch.location}</MatchDetail>
                    </MatchInfoContainer>
                </MatchContainer>
                <GoMatch onClick={handleButtonClick}>경기하러 가기</GoMatch>
            </MatchInfo>

            <HorizonLine />

            <MatchInfo>
                <MatchTitle>이전 경기 결과</MatchTitle>

                <MatchContainer>
                    <MatchTeamContainer>
                        <MatchDetail>{teamName}</MatchDetail>
                        <MatchDetail> {lastMatch.score} </MatchDetail>
                        <MatchDetail>{lastMatch.opponentTeam}</MatchDetail>
                    </MatchTeamContainer>
                    <MatchInfoContainer>
                        <MatchDetail>날짜: {lastMatch.date}</MatchDetail>
                    </MatchInfoContainer>
                </MatchContainer>
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
    margin-bottom: 10px; /* 이전 경기와 다음 경기 간의 간격을 위한 여백 */
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

export default TournamentTeamInfo;
