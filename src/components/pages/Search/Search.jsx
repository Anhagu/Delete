import React from 'react'
import Top from '../Main/Top'
import SearchTop from './SearchTop'
import SearchList from './SearchList';
import styled from 'styled-components';

export default function Search() {
  return (
    <SearchPage>
      <Top showSearch={false} />
      <SearchTop />
      <SearchList />
    </SearchPage>
  )
}

const SearchPage = styled.div`
    font-weight: bold;
    font-size: 2rem;
    padding: 20px;
`;