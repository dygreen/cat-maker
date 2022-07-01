/* 영어 대사 입력창 검사 기능 + 생성버튼 + 초기화버튼 */

import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 15%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  margin-right: 10px;
`;
  
const Button = styled.button`
  cursor: pointer;
  width: 60px;
  height: 48px;
  border-radius: 4px;
  border: none;
  outline: none;
  color: white;
  background: #9772FB;
  font-size: 16px;
  font-weight: bold;
  margin-right: 4px;
  transition: all 0.3s;
  &:hover{
    background: #4C3575;
  }
`;



const Form = ({updateMainCat, removeCat}) => {
  const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
  const [value, setValue] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  function handleInputChange(e){
    const userValue = e.target.value;
    setErrorMessage("");

    if(includesHangul(userValue)){
      setErrorMessage("한글은 입력할 수 없습니다.");
    } 

    setValue(userValue.toUpperCase());
  }

  
  function handleFormSubmit(e){
    e.preventDefault();
    setErrorMessage("");

    if(value === ''){
      setErrorMessage("빈 값으로 만들 수 없습니다.");
      return;
    }

    updateMainCat(value);
  }

  return(
    <form>
      <Input 
      type="text" 
      name="name" 
      placeholder="영어 대사를 입력해주세요"
      value={value}
      onChange={handleInputChange}
      />
      <Button type="submit" onClick={handleFormSubmit}>생성</Button>
      <Button type="text" onClick={removeCat}>초기화</Button>
      <p style={{color:"red"}}>{errorMessage}</p>
    </form>
  );
  
};

export default Form;