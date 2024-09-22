import { Autocomplete, TextField } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { areas } from '../../../src/components/AreaData';

const SettingFiled = () => {
    const [selectedArea, setSelectedArea] = useState(null);
    const [subAreaOptions, setSubAreaOptions] = useState([]);

    const genderList = [
        { gender: '남성' },
        { gender: '여성' },
        { gender: '무관' },
    ];

    return (
        <StyledStack>
            <Autocomplete
                id='areaField'
                options={areas}
                getOptionLabel={(option) => option.name}
                onChange={(event, value) => {
                    if (value) {
                        setSelectedArea(value);
                        setSubAreaOptions(value.subArea); // 선택한 지역의 하위 지역을 설정
                    } else {
                        setSelectedArea(null);
                        setSubAreaOptions([]);
                    }
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant='standard'
                        placeholder='지역 선택'
                    />
                )}
            />
            {selectedArea && (
                <Autocomplete
                    id='subAreaField'
                    options={subAreaOptions}
                    getOptionLabel={(option) => option}
                    onChange={(event, value) => {
                        if (value) {
                            console.log("선택한 하위지역:", value); // 선택한 하위 지역 출력
                        }
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant='standard'
                            placeholder='하위지역 선택'
                        />
                    )}
                />
            )}
            <Autocomplete
                id='genderFiled'
                options={genderList}
                getOptionLabel={(option) => option.gender}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant='standard'
                        placeholder='성별선택'
                    />
                )}
            />
        </StyledStack>
    );
};

const StyledStack = styled.div`
    width: 100%;
    position: relative;
`;

export default SettingFiled;
