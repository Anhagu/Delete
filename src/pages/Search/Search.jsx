import React from 'react'
// import Top from '../Main/Top'
// import SearchTop from './SearchTop'
// import SearchList from './SearchList';
import Header from '../Main/Header';
import styled from 'styled-components';
import ReturnHeader from '../../components/ReturnHeader';
import SettingFiled from '../Main/SettingFiled';
import TeamCard from './TeamCard';

const Search = () => {
  return (
    <SearchPage>
       <ReturnHeader isSearch={true} />
       <SettingFiled/>
       <TeamCard/>
       <TeamCard/>
       <TeamCard/>
       <TeamCard/>
       <TeamCard/>
    </SearchPage>
  )
}

const SearchPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export default Search;