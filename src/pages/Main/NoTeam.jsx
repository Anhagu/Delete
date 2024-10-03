import { Grid2 } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const NoTeam = () => {

    const navigate = useNavigate();

    const onJoin = () => {
        navigate('/JoinTeam');
    };

    const onCreate = () => {
        navigate('/CreateTeam');
    };


  return (
    <NoTeamContaienr> 팀에 가입되어 있지 않습니다
        <Button onClick={onJoin}>
            팀 가입하기
        </Button>
        <Button onClick={onCreate}>
            팀 만들기
        </Button>
    </NoTeamContaienr>
  )
}

const NoTeamContaienr = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
`;

const Button = styled.button`
    width: 30vh;
    height: 10vh;
    margin: 20px;
    border: none;
    border-radius:25px;
    background-color: #a8dba8;
    font-size: 1.1rem;
    font-weight: bold;

    &:hover{
    background-color: #cff09e;
    }
`;

export default NoTeam;
