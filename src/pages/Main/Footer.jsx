import { Box } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

export default function Footer() {

  const navigate = useNavigate();

  const onGame = () => {
    navigate('/game');
  };

  const onLeague = () => {
    navigate('/league');
  }

  const onChat = () =>{
    navigate('/chat');
  }

  const onTeam = () => {
    navigate('/team');
  };

  return (
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-around',
          textAlign: 'center',
          flexGrow: 4,
          position: 'fixed',
          bottom: 0, 
          left: {
            xs: 0,
            md: '50%',
          },
          transform: {md: 'translateX(-50%)'},
          backgroundColor: 'grey', 
          minWidth: {
            xs: '100%',
            md: '60%',
        }, 
        height: {
          xs: '60px',
          md: '100px',
        },
        }} >
          <Box 
            sx={{ 
              flexGrow : 1,
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'flex-end',
              fontWeight: 'bold', 
              width: '20%',
              fontSize: {
                xs: 'midium',
                md: 'h6.fontSize'
              },
              border: '1px solid white',
              cursor: 'pointer'
            }}
              onClick={onGame} >
              경기
        </Box>
        <Box 
          sx={{ 
            flexGrow: 1,
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'flex-end',
            fontWeight: 'bold', 
            width: '20%',
            fontSize: {
              xs: 'midium',
              md: 'h6.fontSize'
            },
            border: '1px solid white',
            cursor: 'pointer'
          }}
            onClick={onLeague} >
            리그
        </Box>
        <Box 
          sx={{ 
            flexGrow: 1,
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'flex-end',
            fontWeight: 'bold', 
            width: '20%',
            fontSize: {
              xs: 'midium',
              md: 'h6.fontSize'
            },
            border: '1px solid white',
            cursor: 'pointer'
          }}
            onClick={onChat} >
            채팅
        </Box>
        <Box 
          sx={{ 
            flexGrow: 1,
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'flex-end',
            fontWeight: 'bold',
            width: '20%', 
            fontSize: {
              xs: 'midium',
              md: 'h6.fontSize'
            },
            border: '1px solid white',
            cursor: 'pointer'
          }}
            onClick={onTeam} >
            팀
        </Box>
        </Box>
  )
}

const MenuContainer = styled.div`
  margin: 0 auto;
  height: 30px;
  width: 100%;
  position: Fixed;
  bottom: 80px;
`;

const MenuWrapper = styled.div`
  padding: 20px 15px 0;
  display: flex;
  justify-content: center;
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  gap: 15px;

  @media (max-width: 768px) {
    flext-direction: column;
    align-item: center;
  }
`;

const Items = styled.a`
  min-width: 60px;
  min-height: 60px;
  line-height: 60px;
  padding: 5px;
  border: 1px solid black;
  text-decoration: none;
  display: block;
  text-align: center;
`

