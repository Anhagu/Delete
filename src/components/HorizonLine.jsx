import React from "react";
import styled from "styled-components";

const HorizonLine = ({ text }) => {
    return (
        <LineContainer>
        </LineContainer>
    );
};

const LineContainer = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #aaa;
  line-height: 0.1em;
  margin: 5px 0 5px;
`;

export default HorizonLine;
