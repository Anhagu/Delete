import React from 'react';
import styled from 'styled-components';
import ReturnHeader from '../../components/ReturnHeader';
import SettingFiled from '../Main/SettingFiled';
import TeamCard from './TeamCard';
import Footer from '../Main/Footer';
import Footer21 from '../Main/Footer21';

const teamData = [
  { name: '파이팅FC', members: '18명', region: '서울', gender: '남성' },
  { name: '롯데리FC', members: '11명', region: '경기', gender: '남성' },
  { name: '사자FC', members: '15명', region: '경기', gender: '여성' },
  { name: '스윽FC', members: '12명', region: '인천', gender: '혼성' },
  { name: '호랑이FC', members: '20명', region: '경기', gender: '남성' },
  { name: '곰돌이FC', members: '11명', region: '서울', gender: '혼성' },
  { name: '법사FC', members: '18명', region: '인천', gender: '남성' },
  { name: '대독FC', members: '13명', region: '서울', gender: '여성' },
  { name: '히어로FC', members: '19명', region: '서울', gender: '남성' },
  { name: '멸종FC', members: '20명', region: '경기', gender: '남성' },
  { name: '파랑해FC', members: '12명', region: '인천', gender: '여성' },
  { name: '우리FC', members: '14명', region: '서울', gender: '혼성' },
  { name: '산와캐시FC', members: '11명', region: '경기', gender: '혼성' },
  { name: '스타즈FC', members: '16명', region: '경기', gender: '남성' },
  { name: '항공FC', members: '13명', region: '인천', gender: '여성' },
  { name: '패스FC', members: '13명', region: '서울', gender: '여성' },
  { name: '핑크베놈FC', members: '10명', region: '서울', gender: '남성' },
  { name: '흥아FC', members: '20명', region: '경기', gender: '남성' },
  { name: '장관장FC', members: '15명', region: '인천', gender: '남성' },
  { name: '삼천FC', members: '17명', region: '서울', gender: '남성' },

];

const Search = () => {
  return (
    <SearchPage>
      <ReturnHeader isSearch={true} />
      <SettingFiled />
      <TeamCardContainer>
        {teamData.map((team, index) => (
          <TeamCard
            key={index}
            name={team.name}
            members={team.members}
            region={team.region}
            gender={team.gender}
          />
        ))}
      </TeamCardContainer>
      <Footer21 />
    </SearchPage>
  );
};

const SearchPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TeamCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border-top: 1px solid #c7c7c7;
`;

export default Search;
