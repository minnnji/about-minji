import React from 'react';
import styled from 'styled-components';

const List = (text) => {
  console.log(list)
  const liMap = list.map((item, i) => {
    return <li key={i}>{item}</li>
  })
  console.log(liMap);
  return (
    <>
      <Ul>
        {liMap}
      </Ul>
    </>
  );
};

const Ul = styled.ul`
  padding: 0 20px;
  line-height: 30px;
`;

export default List;
