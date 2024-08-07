import React from 'react'
import styled from 'styled-components'

export default function Menu() {
  return (
    <MenuContainer className='menu-container'>
      <MenuWrapper className='menu-wrapper'>
        <MenuItem className='menu-item'>
          <Items href='/game'>경기</Items>
          <Items href='/league'>리그</Items>
          <Items href='/chat'>채팅</Items>
          <Items href='/team'>팀</Items>
        </MenuItem>
      </MenuWrapper>
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  margin: 0 auto;
`;

const MenuWrapper = styled.div`
  padding: 10px 15px 0px 15px;
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const Items = styled.a`
  min-width: 60px;
  min-height: 60px;
  line-height: 60px;
  padding: 5px;
  background-color:orange;
  color:black;
  text-decoration: none;
`