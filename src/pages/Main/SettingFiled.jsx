import { Autocomplete,  TextField, } from '@mui/material';
import Stack from '@mui/material/Stack';
import React from 'react'
import styled from 'styled-components';

export default function SettingFiled() {

    const regionList = [
        {region: '서울'},
        {region: '부산'},
        {region: '인천'},
        {region: '경기도'},
    ];

    const genderList = [
        {gender: '남성'},
        {gender: '여성'},
        {gender: '무관'},
    ];

    const progressList = [
        {progress: '마감'},
        {progress: '진행중'},
    ];

    return (
        <Stack spacing={3} sx={{width: {
            xs: '100%',
            md: '60%',
        },
        margin: '0 auto', 
        position: 'relative', 
        top: '50px', 
        }}>
            <Autocomplete 
                multiple 
                id='regionFiled'
                options={regionList}
                getOptionLabel={(option) => option.region}
                renderInput={(params) => (
                    <TextField 
                        {...params}
                        variant='standard'
                        placeholder='지역선택'
                    />
                )}
            />
            <Autocomplete 
                id='genderFiled'
                options={genderList}
                getOptionLabel={(option) => option.gender}
                renderInput={(params)=>(
                    <TextField 
                        {...params}
                        variant='standard'
                        placeholder='성별선택'
                    />
                )}
            />
            <Autocomplete 
                id='progressFiled'
                options={progressList}
                getOptionLabel={(option) => option.progress}
                renderInput={(params)=>(
                    <TextField 
                        {...params}
                        variant='standard'
                        placeholder='진행여부'
                    />
                )}
            />
        {/* <FormControl variant="standard" 
            sx={{
                m: 1, 
                minWidth: {
                    xs: 100,
                    md: 150,
                    lg: 200,
                }}}>
            <InputLabel id='btn-label-region'>지역</InputLabel>
            <Select
                labelId='btn-label-region'
                id='region-Btn'
                value={region}
                label="지역"
                onChange={changeRegion}>
                <MenuItem value="">
                    <em>지역</em>
                </MenuItem>
                <MenuItem value={'Seoul'}>서울</MenuItem>
                <MenuItem value={'Gyeonggi-do'}>경기도</MenuItem>
                <MenuItem value={'Busan'}>부산</MenuItem>
                <MenuItem value={'Incheon'}>인천</MenuItem>
                </Select>    
        </FormControl>

        <FormControl variant="standard" 
            sx={{
                m: 1, 
                minWidth: {
                    xs: 100,
                    md: 150,
                    lg: 200,
                }}}>
        <InputLabel id='btn-label-gender'>성별</InputLabel>
            <Select
                labelId='btn-label-gender'
                id='gender-Btn'
                value={gender}
                label="성별"
                onChange={changeGender}>
                <MenuItem value="">
                    <em>성별</em>
                </MenuItem>
                <MenuItem value={'male'}>남자</MenuItem>
                <MenuItem value={'female'}>여자</MenuItem>
                </Select>
        </FormControl>

        <FormControl variant="standard"
        sx={{
            m: 1, 
            minWidth: {
                xs: 100,
                md: 150,
                lg: 200,
            }}}>
        <InputLabel id='btn-label-progress'>진행여부</InputLabel>
            <Select
                labelId='btn-label-progress'
                id='progress-Btn'
                value={progress}
                label="마감"
                onChange={changeProgress}>
                <MenuItem value="">
                    <em>마감여부</em>
                </MenuItem>
                <MenuItem value={'finish'}>마감</MenuItem>
                <MenuItem value={'progress'}>진행중</MenuItem>
                </Select>
        </FormControl> */}
        </Stack>
    )
}


const BtnForm = styled.div`
    position: relative;
    top: 30px;
    background-color: pink;
`;