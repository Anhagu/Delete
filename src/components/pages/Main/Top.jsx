import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Top() {

  const navigate = useNavigate();

  const onHome = () => {
    navigate('/');
  };

  const onSearch = () => {
    navigate('/initTeamSearch');
  }

  const onMy = () =>{
    navigate('/myPage');
  }

  return (
    <Header>
      <Title onClick={onHome}>League</Title>
      <SearchPage onClick={onSearch}>Search</SearchPage>
      <MyPage onClick={onMy}>MyPage</MyPage>
    </Header>
  );
}

const Header = styled.div`
  height: 20%;
  background-color:pink;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  cursor: pointer
`;

const SearchPage = styled.h2`
  cursor: pointer
`;

const MyPage = styled.h2`
  cursor: pointer
`;