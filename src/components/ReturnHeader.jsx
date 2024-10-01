import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import ReturnArrowImg from "../img/free-icon-right-arrow-109617.png"

const ReturnHeader = ({ text, isSearch }) => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [team, setTeam] = useState(null); // 팀 정보를 저장할 상태 추가
    const [searchResults, setSearchResults] = useState([]);

    const handleReturnArrow = () => {
        navigate(-1); // 이전 페이지로 이동
    };

    const teamSearch = async (e) => {
        const query = e.target.value;
        setSearchQuery(query); // 입력값 업데이트

        // 쿼리가 비어있으면 결과 초기화
        if (query === "") {
            setSearchResults([]);
            return;
        }

        const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhanVmcmVzaEBnbWFpbC5jb20iLCJpYXQiOjE3MjcxNzcyOTMsImV4cCI6MTcyNzE4NDQ5Mywic3ViIjoiYmJiQG5hdmVyLmNvbSIsImlkIjoxfQ.ywPIpnkjQT7oliuYUxCOOjUlSAQoWCJ92IVQQ1Vd-MI"; // 여기에 엑세스 토큰을 입력합니다.

        try {
            const response = await Axios.get(`http://localhost:8080/api/teams/${query}`, {
                // params: { query },
                headers: {
                    Authorization: `Bearer ${accessToken}` // 엑세스 토큰을 헤더에 추가
                }
            });
            console.log("검색 결과:", response.data); // 검색 결과 출력
            setSearchResults(response.data); // 검색 결과 상태 업데이트
        } catch (error) {
            console.error("검색 중 오류 발생:", error);
        }
    };

    return (
        <Container>
            <ReturnArrow onClick={handleReturnArrow} />
            {!isSearch && <Text>{text}</Text>}
            {isSearch && (
                <Input
                    type="text"
                    placeholder="검색"
                    value={searchQuery}
                    onChange={teamSearch}
                />
            )}
            <NonBlock/>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 58.5px;
    text-align: center;
    background-color: #f7f7f7;
    /* background-color: red; */
`;

const ReturnArrow = styled.button`
    width: 30px;
    height: 30px;
    margin-left: 10px;
    border: none;
    background: url(${ReturnArrowImg}) no-repeat center center;
    background-size: contain;
    cursor: pointer;
`;

const Text = styled.h2`
    background: #f7f7f7;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #dedede;
  border-radius: 6px;
  width: 60%;

  &::placeholder {
    color: #9e9e9e;
  }
`;

const NonBlock = styled.div`
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
    border: none;
    background-size: contain;
`

export default ReturnHeader;
