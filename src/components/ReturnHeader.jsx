import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ReturnArrowImg from "../img/free-icon-right-arrow-109617.png"

const ReturnHeader = ({ text }) => {
    const navigate = useNavigate();
    const handleReturnArrow = () => {
        navigate(-1); // 이전 페이지로 이동
    };

    return (
        <Container>
            <ReturnArrow onClick={handleReturnArrow} />
            <Text>{text}</Text>
            <NonBlock/>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: center;
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

const NonBlock = styled.div`
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
    border: none;
    background-size: contain;
`

export default ReturnHeader;
