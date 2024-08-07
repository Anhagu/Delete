import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../../../img/Logo.png'
import { BsSearch } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";

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
      <LogoImg src={Logo} alt='Logo' onClick={onHome}/>
      <RightTap>
        <SearchPage onClick={onSearch}>
          <BsSearch size="25"/>
        </SearchPage>
        <MyPage onClick={onMy}>
          <BsPerson size="30"/>
        </MyPage>
      </RightTap>  
    </Header>
  );
}

const Header = styled.div`
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img`
  margin-left: 10px;
  cursor: pointer;
  width: 60px;
  height: 60px;
`;

const RightTap = styled.div`
  margin-right: 10px;
  width: 10%;
  display: flex;
  justify-content: center;
`

const SearchPage = styled.div`
  cursor: pointer
  
`;

const MyPage = styled.div`
  cursor: pointer;
  padding-left: 15px;
`;