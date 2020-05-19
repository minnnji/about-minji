import React from 'react';
import styled from 'styled-components';

const Contect = (item, link, info) => {
  return(
    <Wrapper>
      {link
        ? <a href={link} target="_blank"><Img src={require(`../assets/logo_${item}.png`)} alt={item} /></a>
          : <Img src={require(`../assets/logo_${item}.png`)} alt={item} />}
          <br/>
      {link && <Link href={link} target="_blank">{link} ❯</Link>}
      {info && <Link>{info}</Link>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const Img = styled.img`
  max-height: 100px;
`;

const Link = styled.a`
  color: gray;
  font-size: 20px;
`;

export default Contect;
