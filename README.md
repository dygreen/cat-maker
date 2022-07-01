# cat-maker
[React] 고양이 짤방 만들기
> [기간: 2022.06.28 ~ 2022.07.01]
>
> 주소: https://dygreen.github.io/cat-maker/index.html

***
## Service Info
* 고양이 사진 Open API를 가져와 보여줌
* 영어 대사 입력시 소문자 -> 대문자로 바꿔줌
* 대사를 입력하고 생성 버튼을 누르면 랜덤 고양이 사진에 해당 대사가 입혀짐
* 한글, 빈칸 검사 및 알림 기능
* 메인 이미지 하단에 하트 버튼을 누르면 리스트에 해당 사진 저장
* 새로고침해도 저장한 이미지가 사라지지 않음
* 초기화 버튼으로 저장한 이미지 삭제
* 중복된 이미지 추가시 알림 + 추가되지 않음

## Code Info
* HTML 파일 내에 React를 추가해 사용(node.js + babel) >> CRA로 변경
* `styled-component`를 통한 스타일링
* input 값을 입력하면 `.target.value.toUpperCase()`를 동작시켜 소문자 -> 대문자로 바꿈
* `useState`를 사용하여 'n번째 고양이 가라사대'의 n 숫자 바꾸기
* `.map()`을 사용하여 하단 favorite 고양이 사진 리스트 보여주기
* `localStorage`를 통해 '누른 횟수'와 '하트 버튼을 누른 사진 리스트' 데이터 유지

```javascript
const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value)); // localStorage를 array, object 저장하기 위해 JSON으로 바꾸기(문자취급)
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key)); // JSON을 array,object로 변환
  },
  removeItem: (key) => {
    localStorage.removeItem(key);
  }
};
```
* `async`, `await`, `fetch`를 통해 Open API 데이터를 JSON 파일로 불러와 UI에 표시
* `useEffect`를 사용하여 페이지가 로드될 때 메인 이미지 표시를 한 번만 실행하도록 함(최적화)
* `removeItem`으로 `localStorage`에 저장된 데이터 삭제(초기화)
* `findIndex()`를 활용해 중복된 데이터를 검사 + 중복 알림 + 추가 안 됨

***
#### _* 자세한 실행과정 정리(노션: https://prickle-turn-785.notion.site/Cat-maker-ab5b9530bf6141b986411458929aa0b4)_
