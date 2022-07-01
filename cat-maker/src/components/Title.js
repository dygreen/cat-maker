/* '고양이 가라사대' 타이틀 */

import styled from "styled-components";

const H1Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;


const Title = (props) => {
  return(
    <H1Title>{props.children}</H1Title>
  );
};

export default Title;