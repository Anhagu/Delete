import React from 'react'
// import Top from '../Main/Top'
// import SearchTop from './SearchTop'
// import SearchList from './SearchList';
import Header from '../Main/Header';
import styled from 'styled-components';
import ReturnHeader from '../../components/ReturnHeader';
import SettingFiled from '../Main/SettingFiled';

const Search = () => {
  return (
    <SearchPage>
       <ReturnHeader text="Some Text" isSearch={true} />
       <SettingFiled/>
    </SearchPage>
  )
}

const SearchPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export default Search;