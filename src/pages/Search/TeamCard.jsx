import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const TeamCard = ({ name, members, region, gender }) => {
  const navigate = useNavigate();
  return (
    <TeamContainer>
      <TeamInfo>
        <TeamTop>
          <TeamName>{name}</TeamName>
          <TeamMembers>{members}</TeamMembers>
        </TeamTop>

        <LPGContainer>
          <TeamRegion>{region}</TeamRegion>
          <TeamGender>{gender}</TeamGender>
        </LPGContainer>
      </TeamInfo>
      {/* <JoinBtn>
        가입하기
      </JoinBtn> */}
      <JoinBtn onClick={() => {
                    const confirmWithdrawal = window.confirm('팀에 가입하시겠습니까?');
                    if (confirmWithdrawal) {  // 팀 생성 로직을 실행
                        alert('가입되었습니다.');
                        navigate('/Main3');  // 페이지 이동
                    }
                }}>가입하기</JoinBtn>
    </TeamContainer>
  );
};

const TeamContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  border-bottom: 1px solid #c7c7c7;
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

const TeamName = styled.div`
  font-weight: bold;
  font-size: 22px;
`;

const TeamMembers = styled.div`
  font-size: 18px;
  color: #5b5b5b;
`;

const LPGContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const TeamRegion = styled.div`
  margin-left: 25px;
  font-size: 18px;
  color: #5b5b5b;
`;

const TeamGender = styled.div`
  margin-left: 25px;
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

  &:hover {
    background-color: #a8dba8;
  }
`;

export default TeamCard;
