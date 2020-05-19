import React from 'react';
import styled from 'styled-components';
import edu from '../assets/edu-vaco.png';

const Edu = () => {
  return (
    <div>
      <a href="https://www.vanillacoding.co/" target="_blank"><Img src={edu} alt="vanilla-coding" /></a>
      <h3>Vanilla Coding BootCamp 수료</h3>
      <Date>(2020. 01. ~ 2020. 05.)</Date>
      <Ul>
        <li>Data Structure, Sorting Algorithm 등 컴퓨터 공학 기초</li>
        <li>React를 통한 SPA 개발</li>
        <li>Node.js 바탕 RESTful API설계</li>
        <li>개인 프로젝트 진행으로 기획~배포 일련의 프로세스 경험 등</li>
      </Ul>
    </div>
  );
};

const Img = styled.img`
  width: 100%;
`;

const Date = styled.div`
  color: gray;
  font-size: 14px;
`;

const Ul = styled.ul`
  padding: 0 20px;
`;

export default Edu;
