import React from "react";
import styled from "styled-components";
import ReturnArrowImg from "../img/free-icon-right-arrow-109617.png"

const ReturnHeader = ({ text }) => {
    const handleReturnArrow = () => {
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
    /* background-color: red; */
    /* background-color: #f7f7f7; */
`;

const ReturnArrow = styled.button`
    width: 30px;
    height: 30px;
    margin-left: 10px;
    border: none;
    background: url(${ReturnArrowImg}) no-repeat center center;
    background-size: contain;
    /* background-color: #f2f2f2; */
    /* background-color: red; */
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
