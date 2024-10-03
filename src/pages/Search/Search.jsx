import React from 'react';
import styled from 'styled-components';
import ReturnHeader from '../../components/ReturnHeader';
import SettingFiled from '../Main/SettingFiled';
import TeamCard from './TeamCard';

const teamData = [
  { name: 'Team A', members: '10명', region: '서울', gender: '혼성' },
  { name: 'Team B', members: '8명', region: '부산', gender: '남성' },
  { name: 'Team C', members: '15명', region: '대구', gender: '여성' },
  { name: 'Team D', members: '12명', region: '인천', gender: '혼성' },
  { name: 'Team E', members: '20명', region: '광주', gender: '남성' },
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
