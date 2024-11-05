import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import LeagueIcon from '@mui/icons-material/Stadium';
import TeamIcon from '@mui/icons-material/Group';
import MyPageIcon from '@mui/icons-material/Settings';

export default function Footer2() {
  const navigate = useNavigate();

  const onNavigate = (path) => {
    navigate(path);
  };

  return (
    <FooterContainer>
      <FooterItem onClick={() => onNavigate('/Main4')}><HomeIcon/>홈</FooterItem>
      <FooterItem onClick={() => onNavigate('/leagueMain2')}><LeagueIcon/>리그</FooterItem>
      <FooterItem onClick={() => onNavigate('/Search4')}><TeamIcon/>팀</FooterItem>
      <FooterItem onClick={() => onNavigate('/EditProfile')}><MyPageIcon/>설정</FooterItem>
    </FooterContainer>
  );    
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 100%;
  height: 6.5vh;
  transform: translateX(-50%);
  background-color: #dadada;
`;

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  font-weight: bold;
  width: 20%;
  font-size: small;
  border: none;
  cursor: pointer;
`;
