import React from 'react';
import styled from 'styled-components';
import profileImg from '../assets/profile.jpeg';

const Profile = () => {
  return (
    <Wrapper>
      <Left>
        <Title>최민지(Minji Choi)</Title>
        <SubTitle>Web Developer</SubTitle>
        3년 4개월간 서비스기획자로 근무하면서 업무 능력 향상을 위해 HTML, CSS, javascript 공부를 시작하였습니다.<br/><br/>
        새롭게 알게 되는 것들이 체감할만한 퍼포먼스로 이어지는 것에 흥미를 느끼며 계속해서 공부하였고 어느새 개발자로서의 미래도 그려보게 되어, 바닐라코딩 부트캠프를 통해 개발자로의 전향을 집중적으로 준비하였습니다.<br/><br/>
        쉽지 않은 결심과 준비 기간이었지만 매우 만족스러운 도전을 했다고 생각하며, 기획자로서 쌓았던 커뮤니케이션 능력과 섬세함, 빠른 적응력을 바탕으로 성장이 기대되는 개발자가 되고 싶습니다.
      </Left>
      <Right>
        <Img src={profileImg} alt="profile" />
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center;
  display: flex;
`;

const Left = styled.div`
  margin-right: 10px;
  float: left;
  width: 50%;
  word-break: keep-all;
`;

const Right = styled.div`
  float: right;
  width: 48%;
`;

const Img = styled.img`
  width: 95%;
  border-radius: 5px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: #5B64C3;
`;

const SubTitle = styled.div`
  margin-bottom: 10px;
  color: #5B64C3;
`;

export default Profile;
