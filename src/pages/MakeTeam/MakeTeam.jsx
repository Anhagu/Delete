import React, { useState } from 'react';
import styled from 'styled-components';
import { areas } from '../../components/AreaData';
import HorizonLine from '../../components/HorizonLine';
import ReturnHeader from '../../components/ReturnHeader';

const MakeTeam = () => {

    const [selectedDo, setSelectedDo] = useState(""); // 도 선택 상태
    const [selectedSiGunGu, setSelectedSiGunGu] = useState(""); // 시/군/구 선택 상태
    const [isTermsChecked, setIsTermsChecked] = useState(false);
    const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
    const [isAllChecked, setIsAllChecked] = useState(false);

    // 선택한 도에 따라 시/군/구 목록 설정
    const handleDoChange = (event) => {
        setSelectedDo(event.target.value);
        setSelectedSiGunGu(""); // 도가 바뀌면 시/군/구 초기화
    };

    const handleSiGunGuChange = (event) => {
        setSelectedSiGunGu(event.target.value);
    };
    
    const handleLogin = () => {
        if (isAllChecked) {
            // 가입 로직 처리
        } else {
            alert('전체 동의를 먼저 체크해주세요.');
        }
    };

    const handleTermsChange = () => {
        setIsTermsChecked(!isTermsChecked);
    };

    const handlePrivacyChange = () => {
        setIsPrivacyChecked(!isPrivacyChecked);
    };

    const handleAllChange = () => {
        const newValue = !isAllChecked;
        setIsAllChecked(newValue);
        setIsTermsChecked(newValue);
        setIsPrivacyChecked(newValue);
    };

    // 선택된 도에 따라 시/군/구 목록 필터링
    const siGunGuList = areas.find(area => area.name === selectedDo)?.subArea || [];


    return (
        <Container>
            <ReturnHeader text="회원가입" />

            <Form>
                <Text>팀 이름</Text>
                <Input type="email" placeholder="팀 이름을 입력해주세요" />
                <Text></Text>
                <Input type="password" placeholder="비밀번호를 입력해주세요" />
                <Text>비밀번호 확인</Text>
                <Input type="password" placeholder="비밀번호 확인" />
                <Text>이름</Text>
                <Input type="text" placeholder="이름을 입력해주세요" />
                <Text>생년월일</Text>
                <Input type="date" defaultValue={new Date().toISOString().substring(0, 10)} />
                <Text>전화번호</Text>
                <Input type="text" placeholder="전화번호를 입력해주세요" />

                <Text>지역 선택</Text>
                <AreaForm>
                    <Select value={selectedDo} onChange={handleDoChange}>
                        <option value="">도 선택</option>
                        {areas.map((area, index) => (
                            <option key={index} value={area.name}>
                                {area.name}
                            </option>
                        ))}
                    </Select>

                    <Select value={selectedSiGunGu} onChange={handleSiGunGuChange} disabled={!selectedDo}>
                        <option value="">시/군/구 선택</option>
                        {siGunGuList.map((subArea, index) => (
                            <option key={index} value={subArea}>
                                {subArea}
                            </option>
                        ))}
                    </Select>
                </AreaForm>

                <CheckBoxContainer>
                    <Checkbox
                        type="checkbox"
                        id="allAgree"
                        checked={isAllChecked}
                        onChange={handleAllChange}
                    />
                    <Label htmlFor="allAgree">전체 동의</Label>
                </CheckBoxContainer>

                <HorizonLine />

                <CheckBoxContainer>
                    <Checkbox
                        type="checkbox"
                        id="termsAgree"
                        checked={isTermsChecked}
                        onChange={handleTermsChange}
                    />
                    <LabelContainer>
                        <Label htmlFor="termsAgree">이용약관 동의</Label>
                        <DetailButton onClick={() => alert('이용약관 자세히 보기')}>
                            자세히
                        </DetailButton>
                    </LabelContainer>
                </CheckBoxContainer>

                <CheckBoxContainer>
                    <Checkbox
                        type="checkbox"
                        id="privacyAgree"
                        checked={isPrivacyChecked}
                        onChange={handlePrivacyChange}
                    />
                    <LabelContainer>
                        <Label htmlFor="privacyAgree">개인정보 수집 및 이용 동의</Label>
                        <DetailButton onClick={() => alert('개인정보 수집 및 이용 자세히 보기')}>
                            자세히
                        </DetailButton>
                    </LabelContainer>
                </CheckBoxContainer>

                <Button onClick={handleLogin}>가입하기</Button>
            </Form>

            {/* 여기에 전체동의 체크박스 */}
            {/* 구분선 */}
            {/* 이용약관 동의 체크박스 & 자세히 버튼 */}
            {/* 개인정보 수집 및 이용 동의 & 자세히 버튼  */}
            <NonBlock />
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  justify-content: space-between;
  height: 100vh;
  background-color: #f7f7f7;
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
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

const AreaForm = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
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

const Button = styled.button`
    width: 90%;
    padding: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 6px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const CheckBoxContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

const Checkbox = styled.input`
    margin-right: 10px;
`;

const LabelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const Label = styled.label`
    font-size: 14px;
    color: #333;
`;

const DetailButton = styled.button`
    background: none;
    border: none;
    color: #007bff;
    cursor: pointer;
    margin-left: 5px;
    padding: 0;

    &:hover {
        text-decoration: underline;
    }
`;

const NonBlock = styled.div`
    width: 30px;
    height: 30px;
    border: none;
`;


export default MakeTeam;
