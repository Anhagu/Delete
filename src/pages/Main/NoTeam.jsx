import { Grid2 } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

export default function NoTeam() {

    const navigate = useNavigate();

    const onJoin = () => {
        navigate('/JoinTeam');
    };

    const onCreate = () => {
        navigate('/CreateTeam');
    };


  return (
    <NoTeamContaienr>
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
    margin: 0 auto;
    width: 100%;
    height: 100%;
    max-width: 60%;
    position: relative;
    top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media(max-width:390px){
        top: 80px;
    }
`;

const Button = styled.button`
    width: 400px;
    height: 60px;
    margin: 15px;
    border: none;
    background-color: #a8dba8;
    border-radius:25px;
    font-size: 1.1rem;
    font-weight: bold;

    @media(max-width:390px){
        width: 200px;
        height: 50px;
        font-size: 0.9rem;
    }

    &:hover{
    background-color: #cff09e;
    }
`;
