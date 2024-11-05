import React from 'react';
import styled from 'styled-components';

const TeamInfo2 = ({ /*teamName, teamRank, nextMatch, members*/ }) => {

    const teamName = "파이팅FC";
    const teamRank = 8;

    const nextMatch = {
        opponentTeam: '사자FC',
        day: '토요일',
        time: '오후 3시',
        location: '서울 경기장',
    };

    const members = [
        { name: '이준호', age: 27, gender: '남' },
        { name: '김민수', age: 24, gender: '남' },
        { name: '박지훈', age: 31, gender: '남' },
        { name: '최영수', age: 29, gender: '남' },
        { name: '정우성', age: 36, gender: '남' },
        { name: '안재현', age: 22, gender: '남' },
        { name: '조성민', age: 28, gender: '남' },
        { name: '유재석', age: 35, gender: '남' },
        { name: '이상민', age: 30, gender: '남' },
        { name: '서민석', age: 25, gender: '남' },
        { name: '김태형', age: 32, gender: '남' },
        { name: '홍성호', age: 27, gender: '남' },
        { name: '이동준', age: 21, gender: '남' },
        { name: '최민수', age: 38, gender: '남' },
        { name: '정대현', age: 23, gender: '남' },
        { name: '이상호', age: 34, gender: '남' },
        { name: '신재원', age: 26, gender: '남' },
        { name: '한재욱', age: 33, gender: '남' },
    ];

    return (
        <TeamContainer>
            <TeamInfoContainer>
                <TeamName>{teamName}</TeamName>
                <TeamRank>팀 순위: {teamRank}위</TeamRank>
            </TeamInfoContainer>

            <MatchInfo>
                <MatchTitle>다음 경기 일정</MatchTitle>

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
            </MatchInfo>

            <MembersInfo>
                <MembersTitle>팀원들</MembersTitle>
                <MembersList>
                    {members.map((member, index) => (
                        <Member key={index}>
                            <span>이름: {member.name}</span>
                            <span>나이: {member.age}</span>
                            <span>성별: {member.gender}</span>
                        </Member>
                    ))}
                </MembersList>
            </MembersInfo>
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
    flex-direction : row ;
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
    border-radius  : 6px;
    padding: 0 10px;
    background-color: #cecece;
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

const MembersInfo = styled.div`
    flex-grow: 1;
    margin: 10px;
    border-radius: 10px;
    padding: 0 10px;
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
`;

const MembersTitle = styled.h3`
    font-size: 1.3rem;
    margin: 10px 0;
`;

const MembersList = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    height: 0px;
`;

const Member = styled.p`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 7vh;
    margin: 5px 0;
    border-radius: 6px;
    padding: 0 10px;
    background-color: #cecece;
`;

export default TeamInfo2;
