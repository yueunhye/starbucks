//? header search부분

// document자체를 html이라고 생각하면 됨
const searchEl = document.querySelector('.search');
// .search 안에 input요소(타입선택자)
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});


// focus <-> blur 반대되는 개념

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  // set은 무언갈 지정한다는뜻이고 attribute는 html에 속성을말함
  // placeholder는 input 요소에 추가할수 있는 html 속성
  searchInputEl.setAttribute('placeholder', '검색');
});


searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  // set은 무언갈 지정한다는뜻이고 attribute는 html에 속성을말함
  searchInputEl.setAttribute('placeholder', '');
});

//? 올해가 몇년도인지 계산

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); 