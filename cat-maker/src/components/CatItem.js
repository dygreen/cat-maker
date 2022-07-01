/* 메인 고양이 이미지 세팅 */

import styled from "styled-components";

const Img = styled.img`
  height: 150px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;


function CatItem(props){
  return(
    <li>
      <Img src={props.img}/>
    </li>
  );
}

export default CatItem;