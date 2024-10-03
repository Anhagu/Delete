import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();

  const onHome = () => {
    navigate('/Main');
  };

  const onSearch = () => {
    navigate('/teamSearch');
  };

  const onMy = () => {
    navigate('/myPage');
  };

  return (
    <HeaderContainer>
        <Title onClick={onHome}>League Linker</Title>
        <IconsContainer>
            <SearchIcon onClick={onSearch} style={{ fontSize: 30 }}/>
        </IconsContainer>
    </HeaderContainer>
  );
}


const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 8vh;
  /* padding: 10px 0px; */
  /* margin-bottom: 10px; */
  background-color: #f7f7f7;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-left: 10px;
  cursor: pointer;
`;

const IconsContainer = styled.div`
    margin-right: 10px;
    margin-top: 5px;
`;

export default Header;