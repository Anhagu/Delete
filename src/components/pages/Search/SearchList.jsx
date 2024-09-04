import React from 'react';
import styled from 'styled-components';
import useSearch from '../../hooks/useSearch';

export default function SearchList() {

  const searchItems = useSearch((state) => state.searchItems);

  return (
    <ListContainer>
      {searchItems.length > 0 ? (
        searchItems.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))
      ) : (
        <ListItem>XXX</ListItem>
      )}
    </ListContainer>
  );
}


const ListContainer = styled.div`
  margin-top: 20px;
`;

const ListItem = styled.p`
  font-size: 16px;
  color: #333;
`;
