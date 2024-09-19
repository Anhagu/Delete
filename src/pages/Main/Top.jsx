import { AppBar, Box } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';


export default function Top({showSearch = true}) {

  const navigate = useNavigate();

  const onHome = () => {
    navigate('/');
  };

  const onSearch = () => {
    navigate('/teamSearch');
  }

  const onMy = () =>{
    navigate('/myPage');
  }

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position='static' color='transparent' elevation={1}>
        <Box
          sx={{
            display:'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: 'lg',
            width: '100%',
            mx: 'auto',
            padding: '5px',
          }}
          >
            <Box 
              sx={{ 
                flexGrow: 1,
                display: 'flex', 
                justifyContent: 'center',
                fontWeight: 'bold', 
                fontSize: {
                  md: 'h5.fontSize'
                },
              cursor: 'pointer'
              }}
                onClick={onHome} >
                League Linker
              </Box>

              <Box sx={{
                flexGrow: 1, 
                display: 'flex', 
                alignItems: {xs: 'center', lg:'center'}, 
                justifyContent: {xs:'center', md: 'center'}}}>
                <SearchIcon 
                sx={{
                  fontSize: {
                    xs: '30px',
                    md: '35px',
                  },
                  mx: '3px',
                }} onClick={onSearch} />
                <PersonIcon  sx={{
                  fontSize: {
                    xs: '30px',
                    md: '35px',
                  }
                }} onClick={onMy}/>
              </Box>
          </Box>
      </AppBar>
    </Box>
  );
}