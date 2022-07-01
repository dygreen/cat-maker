import React from "react";
import './App.css';
import Title from "./components/Title"
import MainCard from "./components/MainCard";
import Favorites from "./components/Favorites";
import Form from "./components/Form";


// localStorage
const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
  removeItem: (key) => {
    localStorage.removeItem(key);
  }
};


// API fetch
const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = "https://cataas.com";
  const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
  const responseJson = await response.json();
  return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};


// ================= App =================
const App = () => {

  const CAT1 = "https://cataas.com/cat/60b73094e04e18001194a309/says/react";
  const [mainCat, setMainCat] = React.useState(CAT1); /* 메인 고양이 */
  const [counter, setCounter] = React.useState(() => {  /* n번쨰 카운트 */
    return jsonLocalStorage.getItem("counter")
  });
  const [favorites,setFavorites] = React.useState(() => { /* 하트 버튼 누른 고양이 리스트 */
    return jsonLocalStorage.getItem("favorites") || []
  });
  const alreadyFavorite = favorites.includes(mainCat); /* 고양이 리스트에 고양이가 있는지 판단하여 하트버튼 모양 바꿈 */

  async function setInitialCat(){ /* 첫 화면의 메인 고양이 보여주기 */
    const newCat = await fetchCat("First cat");
    setMainCat(newCat);
  };

  React.useEffect(() => { /* mount될 때 한 번만 실행되도록 */
    setInitialCat();
  },[]);

  async function updateMainCat(value){ /* 새로운 고양이를 보여주기(+n번째) */
    const newCat = await fetchCat(value); 

    setMainCat(newCat);

    setCounter((prev) => {
      const nextCounter = prev + 1;
      jsonLocalStorage.setItem("counter", nextCounter);
      return nextCounter;
    });
  }


  function favoritesSetting(){ /* favorites 리스트에 추가하는 함수 */
    const nextFavorites = [...favorites, mainCat];

    jsonLocalStorage.setItem("favorites", nextFavorites);
    setFavorites(nextFavorites);
  }


  function handleHeartClick(){ /* 하트 버튼을 클릭하면 리스트에 새로운 고양이를 추가함 */
    const existingCat = jsonLocalStorage.getItem("favorites");

    if ( localStorage.getItem("favorites") != null ){
      const found = existingCat.findIndex((a,i) => {
        return mainCat == existingCat[i];
      });

      found >= 0 ? alert("중복된 고양이입니다!") : favoritesSetting();

    } else {
      favoritesSetting();
    }
  }


  const counterTitle = counter === null ? "" : counter + "번째"; /* counter 값이 없으면 빈칸, 있으면 n번째 표시 */


  function removeCat(){ /* localStorage 초기화 함수 */
    jsonLocalStorage.removeItem("favorites");
    jsonLocalStorage.removeItem("counter");
  }


  // ================= App Components =================
  return (
    <div>
      <Title>{counterTitle} 고양이 가라사대😺</Title>
      <Form updateMainCat={updateMainCat} removeCat={removeCat}/>
      <MainCard img={mainCat} onHeartClick={handleHeartClick} alreadyFavorite={alreadyFavorite}/>
      <Favorites favorites={favorites}/>
    </div>
  );

};

export default App;
