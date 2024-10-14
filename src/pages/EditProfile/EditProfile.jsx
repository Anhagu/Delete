import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { areas } from '../../components/AreaData';
import ReturnHeader from '../../components/ReturnHeader';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
    const [userData, setUserData] = useState({
        id: '', 
        email: '',
        username: '', // userName을 username으로 변경
        birthDate: '',
        phoneNumber: '',
        addressState: '', // selectedDo -> addressState
        addressCity: ''   // selectedSiGunGu -> addressCity
    });

    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const accessToken = Cookies.get('access_token');
            if (accessToken) {
                try {
                    const response = await axios.get('http://localhost:8080/api/users/me', {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    });

                    if (response.status === 200) {
                        const data = response.data;
                        setUserData({
                            id: data.id,
                            email: data.email,
                            username: data.username, // API에서의 username과 일치하도록 수정
                            birthDate: data.birthDate || '',
                            phoneNumber: data.phoneNumber || '',
                            addressState: '', // 초기화
                            addressCity: ''   // 초기화
                        });
                    } else {
                        console.error('사용자 정보를 가져오는 데 실패했습니다.');
                    }
                } catch (error) {
                    console.error('API 요청 중 오류 발생:', error);
                }
            }
        };

        fetchUserData();
    }, []);

    const handleStateChange = (event) => {
        setUserData({
            ...userData,
            addressState: event.target.value,
            addressCity: ''
        });
    };

    const handleCityChange = (event) => {
        setUserData({
            ...userData,
            addressCity: event.target.value
        });
    };

    const handleSave = async () => {
        const accessToken = Cookies.get('access_token');

        if (userData.password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        if (accessToken) {
            const updatedUserData = {
                username: userData.username, // userName -> username으로 변경
                email: userData.email,
                phoneNumber: userData.phoneNumber,
                birthDate: userData.birthDate,
                password: userData.password,
                address: {
                    state: userData.addressState, // addressState 사용
                    city: userData.addressCity, // addressCity 사용
                    radius: 100
                }
            };

            try {
                const response = await axios.put(`http://localhost:8080/api/users/${userData.id}`, updatedUserData, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.status === 200) {
                    alert('회원정보가 수정되었습니다.');
                    navigate('/main');
                } else {
                    console.error('회원정보 수정 실패');
                }
            } catch (error) {
                console.error('API 요청 중 오류 발생:', error);
            }
        } else {
            console.error('Access token not found in cookies.');
        }
    };

    const cityList = areas.find(area => area.name === userData.addressState)?.subArea || [];

    return (
        <Container>
            <ReturnHeader text="개인 정보 수정" />

            <Form>
                <Text>이메일</Text>
                <Input type="email" placeholder="이메일을 입력해주세요" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />

                <Text>비밀번호</Text>
                <Input type="password" placeholder="비밀번호를 입력해주세요" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />

                <Text>비밀번호 확인</Text>
                <Input type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                <Text>이름</Text>
                <Input type="text" placeholder="이름을 입력해주세요" value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} />

                <Text>생년월일</Text>
                <Input type="date" value={userData.birthDate} onChange={(e) => setUserData({ ...userData, birthDate: e.target.value })} />

                <Text>전화번호</Text>
                <Input type="text" placeholder="전화번호를 입력해주세요" value={userData.phoneNumber} onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })} />

                <Text>지역 선택</Text>
                <AreaForm>
                    <Select value={userData.addressState} onChange={handleStateChange}>
                        <option value="">도 선택</option>
                        {areas.map((area, index) => (
                            <option key={index} value={area.name}>
                                {area.name}
                            </option>
                        ))}
                    </Select>

                    <Select value={userData.addressCity} onChange={handleCityChange} disabled={!userData.addressState}>
                        <option value="">시/군/구 선택</option>
                        {cityList.map((subArea, index) => (
                            <option key={index} value={subArea}>
                                {subArea}
                            </option>
                        ))}
                    </Select>
                </AreaForm>
                <Button onClick={handleSave}>수정하기</Button>
                <Button onClick={() => alert('취소되었습니다.')}>취소</Button>
            </Form>

            <NonBlock />
        </Container>
    );
};

// 스타일 컴포넌트들 정의
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
`;

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

const NonBlock = styled.div`
    width: 30px;
    height: 30px;
    border: none;
`;

export default EditProfile;
