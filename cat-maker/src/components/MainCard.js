/* 메인 고양이를 보여주고, 하트 버튼을 누르면 하트가 채워짐 */

import styled from "styled-components";

const Img = styled.img`
  height: 400px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transform: translateX(20px);
`;

const Button = styled.button`
  cursor: pointer;
  width: 60px;

  border: none;
  outline: none;
  color: white;
  background: none;
  font-size: 45px;
`;


const MainCard = ({img, onHeartClick, alreadyFavorite}) => {
  const heartIcon = alreadyFavorite ? "💖" : "❤️";

  return (
    <div className="main-card">
      <Img
        src={img}
        alt="고양이"
      />
      <Button onClick={onHeartClick}>{heartIcon}</Button>
    </div>
  );
};

export default MainCard;