import React from "react";
import styled from "styled-components";

const HorizonLine = ({ text }) => {
    return (
        <LineContainer>
            <LineText>{text}</LineText>
        </LineContainer>
    );
};

const LineContainer = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #aaa;
  line-height: 0.1em;
  margin: 10px 0 20px;
`;

const LineText = styled.span`
  background: #f7f7f7;
  padding: 0 10px;
`;

export default HorizonLine;
