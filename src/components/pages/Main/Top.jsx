import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Top() {

  const navigate = useNavigate();

  const onHome = () => {
    navigate('/');
  };

  const onSearch = () => {
    navigate('/initTeamSearch');
  }

  const onLogin = () => {
    navigate('/login');
};

const onLogout = () => {
  navigate('/login');
};

  return (
    <div>

    </div>
  )
}
