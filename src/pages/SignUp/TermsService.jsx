import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ReturnHeader from '../../components/ReturnHeader';

const TermsService = () => {
  const navigate = useNavigate();

  const handleAgree = () => {
    // 동의 버튼 클릭 시 처리할 로직을 여기에 작성
    alert('동의하셨습니다.');
  };

  return (
    <Container>
      <ReturnHeader text="서비스 이용약관" />

      <Form>
        <Terms>
          <p>
            본 약관은 [League Linker] (이하 “서비스”)을 제공하는 [고민중독] (이하 “회사”)가 제공하는 서비스의 이용과 관련된 조건 및 절차, 회사와 이용자의 권리, 의무 및 책임사항을 규정하는 것을 목적으로 합니다.
          </p>
          <p>
            <strong>제 1 조 (목적)</strong><br />
            이 약관은 서비스의 이용과 관련된 조건 및 절차, 회사와 이용자의 권리, 의무 및 책임사항을 규정하는 것을 목적으로 합니다.
          </p>
          <p>
            <strong>제 2 조 (정의)</strong><br />
            1. “서비스”란 회사가 제공하는 웹사이트, 모바일 애플리케이션 및 기타 모든 서비스와 관련된 기능 및 콘텐츠를 의미합니다.<br />
            2. “이용자”란 본 약관에 동의하고 서비스를 이용하는 개인 또는 법인을 의미합니다.<br />
            3. “회원”이란 회사에 회원가입을 하고 서비스 이용자격을 부여받은 개인 또는 법인을 의미합니다.
          </p>
          <p>
            <strong>제 3 조 (약관의 효력 및 변경)</strong><br />
            1. 본 약관은 서비스 화면에 게시하거나 기타 방법으로 이용자에게 공지함으로써 효력을 발생합니다.<br />
            2. 회사는 필요한 경우 본 약관을 변경할 수 있으며, 약관을 변경하는 경우 그 내용을 서비스 화면에 게시하거나 이용자에게 공지합니다.<br />
            3. 이용자가 변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단하고 탈퇴할 수 있습니다.
          </p>
          <p>
            <strong>제 4 조 (서비스의 제공 및 변경)</strong><br />
            1. 회사는 다음과 같은 서비스를 제공합니다:<br />
            - 동호회 및 스포츠 클럽을 위한 리그 시스템 제공<br />
            - 리그 생성, 참가팀 관리, 경기 일정 조정 및 결과 기록 기능<br />
            - 리그 통계 및 대시보드 제공<br />
            - 기타 관련 기능 및 서비스
          </p>
          <p>
            <strong>제 5 조 (회원가입)</strong><br />
            1. 이용자는 서비스의 회원가입 절차를 통해 회원으로 가입할 수 있습니다.<br />
            2. 회사는 회원가입을 신청한 이용자의 정보를 확인하고, 필요에 따라 가입을 승낙할 수 있습니다.
          </p>
          <p>
            <strong>제 6 조 (회원의 의무)</strong><br />
            1. 회원은 서비스 이용 시 본 약관 및 관련 법규를 준수해야 합니다.<br />
            2. 회원은 자신의 계정과 비밀번호를 안전하게 관리할 책임이 있습니다.<br />
            3. 회원은 서비스 이용과 관련된 정보가 변경된 경우, 이를 즉시 회사에 통지해야 합니다.
          </p>
          <p>
            <strong>제 7 조 (서비스 이용의 제한 및 중지)</strong><br />
            1. 회사는 다음의 경우 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다:<br />
            - 시스템 점검, 유지보수, 개선 작업<br />
            - 천재지변, 전쟁, 테러 등 불가항력적인 사유<br />
            - 기타 회사의 귀책사유가 아닌 사유<br />
            2. 서비스 이용의 제한 또는 중지에 따른 손해에 대해 회사는 책임지지 않습니다.
          </p>
          <p>
            <strong>제 8 조 (저작권 및 지식재산권)</strong><br />
            1. 서비스 내의 모든 콘텐츠 및 자료는 회사 또는 해당 저작권자의 지적재산권에 속합니다.<br />
            2. 이용자는 회사의 사전 서면 동의 없이 서비스의 콘텐츠를 복제, 전송, 배포할 수 없습니다.
          </p>
          <p>
            <strong>제 9 조 (개인정보의 보호)</strong><br />
            1. 회사는 개인정보 보호법 및 관련 법규를 준수하여 이용자의 개인정보를 보호합니다.<br />
            2. 개인정보의 수집, 이용, 제공에 대한 사항은 별도의 개인정보처리방침에 따라 처리됩니다.
          </p>
          <p>
            <strong>제 10 조 (면책사항)</strong><br />
            1. 회사는 이용자가 서비스 이용 중 발생하는 손해에 대해 책임을 지지 않습니다.<br />
            2. 서비스 이용 시 발생한 법적 분쟁은 이용자와 제3자 간의 문제로, 회사는 책임을 지지 않습니다.
          </p>
          <p>
            <strong>제 11 조 (약관의 해석 및 관할법원)</strong><br />
            1. 본 약관의 해석 및 적용에 관해서는 대한민국 법령이 적용됩니다.<br />
            2. 서비스와 관련된 분쟁이 발생할 경우, 회사의 본사 소재지를 관할하는 법원을 제1심 법원으로 합니다.
          </p>
          <p>
            <strong>부칙</strong><br />
            본 약관은 [2024년 09월 11일]부터 시행됩니다.
          </p>
        </Terms>

        <Button onClick={handleAgree}>동의함</Button>
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

const Terms = styled.div`
  max-height: 60vh;
  overflow-y: auto;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
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

export default TermsService;
