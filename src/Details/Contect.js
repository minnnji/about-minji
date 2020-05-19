import React from 'react';
import styled from 'styled-components';

const Contect = (item, link, info) => {
  return(
    <Wrapper>
      {link
        ? <a href={link}><Img src={require(`../assets/logo_${item}.png`)} alt={item} /></a>
          : <Img src={require(`../assets/logo_${item}.png`)} alt={item} />}
          <br/>
      {link && <Link href={link}>{link} ></Link>}
      {info && <div>{info}</div>}
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
  text-decoration: none;
  color: gray;
`;

export default Contect;
