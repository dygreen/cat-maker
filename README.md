# cat-maker
[React] 고양이 짤방 만들기
> [기간: 2022.06.28 ~ 2022.06.29]
>
>

***
## Service Info
* 고양이 사진 Open API를 가져와 보여줌
* 영어 대사 입력시 소문자 -> 대문자로 바꿔줌
* 대사를 입력하고 생성 버튼을 누르면 랜덤 고양이 사진에 해당 대사가 입혀짐
* 한글, 빈칸 검사 및 알림 기능
* 메인 이미지 하단에 하트 버튼을 누르면 리스트에 해당 사진 저장
* 새로고침해도 저장한 이미지가 사라지지 않음

## Code Info
* HTML 파일 내에 React를 추가해 사용(node.js + babel)
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
};
```
* `async`, `await`, `fetch`를 통해 Open API 데이터를 JSON 파일로 불러와 UI에 표시
