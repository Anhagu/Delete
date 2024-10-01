import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import HorizonLine from '../../components/HorizonTextLine';
import GoogleLoginImg from '../../img/web_neutral_sq_SI@4x.png'
import KakaoLoginImg from '../../img/kakao_login_large_narrow.png'
import ReturnHeader from '../../components/ReturnHeader';


const SignIn = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const handleKakaoLogin = () => {
  };

  const handleSignUp = () => {
    navigate('/SignUp');
  };

  return (
    <Container>
      <ReturnHeader text="LEAGUE LINKER" />

      <Form>
        <Input type="email" placeholder="이메일" />
        <Input type="password" placeholder="비밀번호" />
        <Button onClick={handleLogin}>로그인</Button>
        <HorizonLine text="또는" />
        <SocialButtons>
          <GoogleLogin onClick={handleGoogleLogin} />
          <KakaoLogin onClick={handleKakaoLogin} />
          <SignUp onClick={handleSignUp}>회원가입</SignUp>
        </SocialButtons>
      </Form>
      <NonBlock />
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
  width: 300px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #dedede;
  border-radius: 6px;

  &::placeholder {
    color: #9e9e9e;
  }
`;

const Button = styled.button`
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 6px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const GoogleLogin = styled.button`
  width: 100%;
  height: 45px;
  margin-bottom: 10px;
  border-radius: 6px;
  border: 0.3px solid;
  background: url(${GoogleLoginImg}) no-repeat center center;
  background-size: contain;
  background-color: #f2f2f2;
  cursor: pointer;
`;

const KakaoLogin = styled.button`
  width: 100%;
  height: 47px;
  border-radius: 6px;
  border: none;
  background: url(${KakaoLoginImg}) no-repeat center center;
  background-size: contain;
  background-color: #FEE500;
  cursor: pointer;
`;

const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignUp = styled.button`
  margin-bottom: 20px;
  margin-top: 20px;
  border: none;
  text-decoration: underline;
  text-underline-position: under;
  color: gray;
  background-color: #f7f7f7;
  cursor: pointer;
`;
const NonBlock = styled.div`
    width: 30px;
    height: 30px;
    border: none;
`
export default SignIn;
