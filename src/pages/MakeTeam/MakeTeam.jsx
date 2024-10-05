import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { areas } from '../../components/AreaData';
import ReturnHeader from '../../components/ReturnHeader';

const MakeTeam = () => {

    const [teamName, setTeamName] = useState("");   // 팀 명

    const [teamStadium, setTeamStadium] = useState(""); // 팀 경기장
    const [teamStadiumDo, setTeamStadiumDo] = useState(""); // 팀 경기장 도
    const [teamStadiumSiGunGu, setTeamStadiumSiGunGu] = useState(""); // 팀 경기장 시/군/구
    
    const [teamLocationDo, setTeamLocationDo] = useState(""); // 도 선택 상태
    const [teamLocationSiGunGu, setTeamLocationSiGunGu] = useState(""); // 시/군/구 선택 상태

    const [teamAge, setTeamAge] = useState([]);
    const [teamGender, setTeamGender] = useState("");
    const [memberLevel, setMemberLevel] = useState([]);
    const [teamLevel, setTeamLevel] = useState(new Array(8).fill(0));
    const [activityDay, setActivityDay] = useState([]);
    const [startTime, setStartTime] = useState("00:00");
    const [endTime, setEndTime] = useState("12:00");

    // 생성버튼 활성
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    useEffect(() => {
        if(
            teamName &&
            teamStadium && 
            teamStadiumDo && 
            teamStadiumSiGunGu &&
            teamLocationDo &&
            teamLocationSiGunGu &&
            teamAge &&
            teamGender &&
            memberLevel &&
            teamLevel.some((level) => level !== 0) &&
            activityDay &&
            startTime &&
            endTime
        ) {
            setIsButtonEnabled(true);
        } else {
            setIsButtonEnabled(false)
        }
    }, [teamName, teamStadium, teamStadiumDo, teamStadiumSiGunGu,
        teamLocationDo, teamLocationSiGunGu, teamAge, teamGender,
        memberLevel, teamLevel, activityDay, startTime, endTime
    ]);

    // 경기장 지역
    const handleStadiumDo = (e) => {
        setTeamStadiumDo(e.target.value);
        setTeamStadiumSiGunGu("");
    };
    const handleStadiumSiGunGu = (e) => {
        setTeamStadiumSiGunGu(e.target.value);
    };

    // 팀 지역
    const handleLocationDo = (e) => {
        setTeamLocationDo(e.target.value);
        setTeamLocationSiGunGu("");
    };
    const handleLocationSiGunGu = (e) => {
        setTeamLocationSiGunGu(e.target.value);
    };

    // 연령
    const handleTeamAge = (e) =>{
        const {value, checked} = e.target;
        setTeamAge((prev) => 
            checked ? [...prev, value] : prev.filter((age) => age !== value));
    }

    // 성별
    const handleTeamGender = (e) => {
        setTeamGender(e.target.value);
    };

    // 팀원 레벨
    const handleMemeberLevel = (e) => {
        const {value, checked} = e.target;
        setMemberLevel((prev) => 
            checked ? [...prev, value] : prev.filter((level) => level !== value));
    }

    // 팀 레벨
    const handleTeamLevel = (index, value) => {
        const newLevels = [...teamLevel];
        newLevels[index] = value;
        setTeamLevel(newLevels);
    };


    // 팀 활동 요일
    const handleActivityDay = (e) => {
        const {value, checked} = e.target;
        setActivityDay((prev) => 
            checked ? [...prev, value] : prev.filter((day) => day !== value));
    }

    // 팀 활동 시간
    const handleStartTime = (e) => setStartTime(e.target.value);
    const handleEndTime = (e) => setEndTime(e.target.value);

    
    // 팀 생성 버튼 클릭 시 입력값을 저장하는 로직
    const handleCreate = () => {
        if(!isButtonEnabled) return;

        const teamData = {
            teamName,
            teamStadium,
            teamStadiumLocation: `${teamStadiumDo} ${teamStadiumSiGunGu}`,
            teamLocation: `${teamLocationDo} ${teamLocationSiGunGu}`,
            teamAge,
            teamGender,
            teamLevel,
            activityDay,
            startTime,
            endTime,
        };
        console.log(teamData);
    };

    // 선택된 도에 따라 시/군/구 목록 필터링
    const stadiumSiGunGuList = areas.find(
        area => area.name === teamStadiumDo)?.subArea || [];
    const locationSiGunGuList = areas.find(
        area => area.name === teamLocationDo)?.subArea || [];

    return (
        <Container>
            <ReturnHeader text="회원가입" />

            <Form>
                <Text>팀 이름</Text>
                <Input 
                    type="text" 
                    placeholder="팀 이름 입력" 
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}    
                />

                <Text>경기장</Text>
                <Input 
                    type="text" 
                    placeholder="경기장 이름 입력" 
                    value={teamStadium}
                    onChange={(e) => setTeamStadium(e.target.value)}
                />

                <Text>경기장 지역</Text>
                <AreaForm>
                    <Select 
                        value={teamStadiumDo} 
                        onChange={handleStadiumDo}
                    >
                        <option value="">도 선택</option>
                        {areas.map((area, index) => (
                            <option key={index} value={area.name}>
                                {area.name}
                            </option>
                        ))}
                    </Select>

                    <Select 
                        value={teamStadiumSiGunGu} 
                        onChange={handleStadiumSiGunGu} 
                        disabled={!teamStadiumDo}
                    >
                        <option value="">시/군/구 선택</option>
                        {stadiumSiGunGuList.map((subArea, index) => (
                            <option key={index} value={subArea}>
                                {subArea}
                            </option>
                        ))}
                    </Select>
                </AreaForm>
                    

                <Text>팀 활동 지역</Text>
                <AreaForm>
                    <Select 
                        value={teamLocationDo} 
                        onChange={handleLocationDo}
                    >
                        <option value="">도 선택</option>
                        {areas.map((area, index) => (
                            <option key={index} value={area.name}>
                                {area.name}
                            </option>
                        ))}
                    </Select>

                    <Select 
                        value={teamLocationSiGunGu} 
                        onChange={handleLocationSiGunGu} 
                        disabled={!teamLocationDo}
                    >
                        <option value="">시/군/구 선택</option>
                        {locationSiGunGuList.map((subArea, index) => (
                            <option key={index} value={subArea}>
                                {subArea}
                            </option>
                        ))}
                    </Select>
                </AreaForm>

                <Text>팀 연령</Text>
                <CheckBoxContainer>
                    {['연령 무관', '10-20대', '20-30대', '30-40대', '40-50대'].map((age, index)=>(
                        <ContainerBox key={index}>
                            <Checkbox 
                                type='checkbox'
                                value={age}
                                onChange={handleTeamAge}
                                checked={teamAge.includes(age)}
                            />
                            <Label>{age}</Label>
                        </ContainerBox>
                    ))}
                </CheckBoxContainer>
                
                <Text>성별</Text>
                <Select
                    value={teamGender}
                    onChange={handleTeamGender}
                >
                    <option value="성별무관">성별무관</option>
                    <option value="남성">남성</option>
                    <option value="여성">여성</option>
                </Select>

                <Text>희망 팀원 숙련도</Text>
                    <CheckBoxContainer>
                        {['실력 무관', '아마추어', '세미프로', '프로'].map((level,index) => (
                            <ContainerBox key={index} >
                                <Checkbox 
                                    type='checkbox'
                                    value={level}
                                    onChange={handleMemeberLevel}
                                    checked={memberLevel.includes(level)}
                                />
                                <Label>{level}</Label>
                            </ContainerBox>
                        ))}
                    </CheckBoxContainer>


                <Text>팀 레벨</Text>
                <RangeBoxContainer>
                        {['공격(Attack)', '패스(Pass)', '드리블(Dribble)','신체(Physical)',
                            '방어(Defense)', '슛팅(Shoot)', '스피드(Speed)','체력(Stamina)'].map((level,index) =>(
                        <ContainerBox key={index}>
                            <Label>{level} : {teamLevel[index]}</Label>
                            <RangeBox>
                                <RangeInput
                                    type='range'
                                    min='0'
                                    max='10'
                                    value={teamLevel[index]}
                                    onChange={(e) => handleTeamLevel(index, e.target.value)}
                                />
                                <RangeNumber>
                                    {Array.from({length:11}, (_, i) => (
                                        <span key={i}>{i}</span>
                                    ))}
                                </RangeNumber>
                            </RangeBox>
                        </ContainerBox>
                        ))}
                </RangeBoxContainer>


                <Text>팀 활동 요일</Text>
                <CheckBoxContainer>
                    {['월', '화', '수', '목', '금', '토', '일'].map((day, index) => (
                        <ContainerBox key={index}>
                            <Checkbox 
                                type='checkbox'
                                value={day}
                                onChange={handleActivityDay}
                                checked={activityDay.includes(day)}
                            />
                            <Label>{day}</Label>
                        </ContainerBox>
                    ))}
                </CheckBoxContainer>
                
                <Text>팀 활동 시간</Text>
                <ContainerBox>
                    <Input 
                        type="time"
                        value={startTime}
                        onChange={handleStartTime}    
                    />
                    <Input 
                        type="time"
                        value={endTime}
                        onChange={handleEndTime}    
                    />
                </ContainerBox>

                <Button onClick={handleCreate} disabled={!isButtonEnabled}>팀 생성하기</Button>
            </Form>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    background-color: #f7f7f7;
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
`;

const Text = styled.div`
    margin-left: 15px;
    margin-bottom: 5px;
    font-size: 15px;
    text-align: left;
    width: 100%;
`;

const Input = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #dedede;
    border-radius: 6px;

    &::placeholder {
        color: #9e9e9e;
    }
`;

const Label = styled.label`
    font-size: 14px;
    color: #333;
`; 

const AreaForm = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 350px;
    margin-bottom: 5px;
`

const Select = styled.select`
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #dedede;
    border-radius: 6px;
    background-color: #fff;
    color: #333;
`;

const CheckBoxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 10px;
`;

const RangeBoxContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;
`;

const RangeBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-bottom: 10px;
`

const RangeInput = styled.input`
    width: 100%;
    margin-bottom: 3px;
`;

const RangeNumber = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 12px;
`;

const ContainerBox = styled.div`
    display: flex;
    width:100%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;
`;

const Checkbox = styled.input.attrs({type:'checkbox'})`
    margin-right: 5px;
`;



const Button = styled.button`
    width: 90%;
    padding: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.disabled ? '#cccccc' : '#a8dba8'};
    color: #fff;
    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};

    &:hover {
        background-color: ${(props) => props.disabled ? '#cccccc' : '#cff09e'};
    }
`;

export default MakeTeam;
