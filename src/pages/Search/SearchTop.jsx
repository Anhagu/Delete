import React, { useState } from 'react'
import styled from 'styled-components';
import useSearch from '../../hooks/useSearch';

export default function SearchTop() {

    const [inSearch, setInSearch] = useState('');
    const addSearch = useSearch((state) => state.addSearch);

    const onSubmit = (e) => {
        e.preventDefault();
        if (inSearch.trim()) {
            addSearch(inSearch);
            setInSearch('');
        }
    };

    return (
    <div>
        <SearchForm onSubmit={onSubmit}>
            <SearchInput
                type = 'text'
                placeholder = '지역, 팀 이름 검색'
                value={inSearch}
                onChange={(e) => setInSearch(e.target.value)}
            />
            <SearchBtn type='submit'>확인</SearchBtn>
        </SearchForm>
    </div>
    );
}

const SearchForm = styled.form`
    display: flex;
`;

const SearchInput = styled.input`
    width: 80%;
    padding: 10px;
    font-size: 16px;
`;

const SearchBtn = styled.button`
    width: 15%;
    padding: 10px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;