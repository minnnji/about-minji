import React from 'react';
import styled from 'styled-components';

const Experience = () => {
  return (
    <div>
      <Title>NHN Ticketlink</Title>
      <SubTitle>서비스기획(2017. 01. ~ 2019. 12.)</SubTitle>
      <Text>스포츠/공연 티켓 예매 서비스의 예매 사용자단 프로세스 전반을 담당하여 서비스기획 업무를 하였습니다.</Text>
      <Title>(주) 인스팟</Title>
      <SubTitle>서비스기획(2016. 09. ~ 2017. 01.)</SubTitle>
      <Text>SBS스포츠와 공통투자로 진행한 스포츠용품 중고거래 서비스 ‘중고의 신’ WEB, APP을 기획, 출시하였습니다.</Text>
    </div>
  );
};

const Title = styled.div`
  font-family: auto;
  font-size: 20px;
  font-weight: 800;
  color: #5B64C3;
`;

const SubTitle = styled.div`
  color: #7f8cff
`;

const Text = styled.div`
  margin-bottom: 30px;
  word-break: keep-all;
`;

export default Experience;
