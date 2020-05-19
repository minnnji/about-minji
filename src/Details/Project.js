import React from 'react';
import styled from 'styled-components';

const Project = (url, image, detail, skills, clientUrl, serverUrl) => {
  return(
    <>
      <Img src={image} alt="project image" />
      <Link href={url} target="_blank">{url} ❯</Link>
      <Detail>{detail}</Detail>
      <Icon>skills</Icon>
      <Skills>{skills}</Skills>
      <Icon>github</Icon>
      <Link href={clientUrl} target="_blank">client ❯</Link>
      <Link href={serverUrl} target="_blank">server ❯</Link>
    </>
  );
};

const Img = styled.img`
  margin: 0 20px 10px 0;
  float: left;
  max-width: 540px;
  max-height: 300px;
`;

const Detail = styled.div`
  margin: 0 20px 20px 0;
  word-break: keep-all;
`;

const Icon = styled.span`
  display: inline-block;
  margin-right: 10px;
  padding: 5px;
  border: 1px solid #5B64C3;
  background-color: #5B64C3;
  border-radius: 14px;
  font-size: 14px;
  color: #fff;
`;

const Skills = styled.div`
  margin: 0 20px 20px 0;
  font-size: 14px;
  color: #5B64C3;
  word-break: keep-all;
`;

const Link = styled.a`
  display: inline-block;
  margin: 10px 20px 10px 0;
  text-decoration: none;
  color: gray;
`;

export default Project;
