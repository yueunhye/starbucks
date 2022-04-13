



//? header badges

// 사이드 badge부분 스크롤 내리다 사라지게 하는방법

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// 브라우저 창. window객체 윈도우는 곧 화면 자체다 throttle자르다 -->lodash에서 제공한 기능
//_.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle( function() {
  // Y축 화면스크롤
  console.log(window.scrollY, window.scrollX);
  if (window.scrollY > 500) {
    //배지 숨기기
    // badgeEl.style.display = 'none';
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
      // gsap은 문자열을 쓸 때는 ''를 명확히 해줄것
    });
    //버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    //배지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl, .2, {
      // x축으로 100px 이동
      x: 100
    });
  }
  // 위에처럼 진행 후 검사에서 badge부분 클릭 후 확인해 보면
  // 요소가 숨겨지기만 했지 클릭이 가능한 상태 opacity까지만 적용된상황
  // display: 'none'을 해줘야 된다
},300));

//? to-top버튼 클릭시 페이지 상단으로 올리기
toTopEl.addEventListener('click', function () {
  // window객체를 통해서 화면 자체를 처리하면서 특정한 위치로 옮겨줄 수 있다. 이미지 자체. 하나의 창
  gsap.to(window, .7 ,{
    scrollTo: 0
  });
});




// ?🙈 fade-in

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // 반복될 요소를 넣어주면 되요
  gsap.to(fadeEl, 1, {
    delay: (index + 1)* .7, 
    opacity: 1
  });
});


//? 🐶 notice swiper

// 생성자 함수. 자바스크립트 클래스
// new Swipter(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  // 수직
  direction: 'vertical',
  // 자동재생여부
  autoplay: true,
  // 반복재생여부
  loop: true,
});

//? 🐶 promotion swiper

new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal'이라는 기본값이 들어가 있음
  slidesPerView: 3, //한번제 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 2000,
// ? Swiper.js의 paginaiton 
// ?즉, swiper-pagination-bullet 를 클릭 시 autoplay: true;로 옵션 설정을 했을 시, 
// ?슬라이더가 자동으로 멈추는 현상이 있다.
// ?이는 default로 자동 멈춤을 해놓았기 때문인데, 
// ?아래와 같이 autoplay 옵션을 변경해주면 
// ?swiper-pagination-bullet swiper-button-next swiper-button-prev 를 
// ?클릭 했을 때 슬라이더 자동 멈춤이 사라진다.
    disableOnInteraction: false
  },
  // pagination(페이징)
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어
    type: 'bullets'
    
  },
  navigation: {
    prevEl: '.promotion .swiper-prev ',
    nextEl: '.promotion .swiper-next '
  }
});

//? 🐶 awards swiper

new Swiper('.awards .swiper-container', {
  // direction: 'horizontal',
  autoplay: true,
  loop: true,
  autoplay: {
    dislay: 2000,
    disableOnInteraction: false
  },
  spaceBetween: 30,
  // 한번에 몇개 보여줄거니
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev', //이전버튼
    nextEl: '.awards .swiper-next' //다음버튼
  }
});



// ? 🐶 promotion toggle

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; //blooen데이터

// toggle로 적용할때 켜기
// promotionToggleBtn.addEventListener('click', function () {
//   promotionEl.classList.toggle('hide');
// });

promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion //지속적으로 반복을 시켜줄수 있음. 자체가 false고 !는부정이라서 
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');    
  }else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});



// ? 🐶 floating3

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, 
    random(1.5, 2.5), 
  {
    y: size, //y축
    repeat: -1, //무한반복
    yoyo: true, //한번 재생된 애니메이션을 다시 뒤로 재생을 해
    ease: Sine.easeInOut, // https://greensock.com/docs/v2/Easing 
    delay: random(0, delay)
  }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 15);




const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  // 스크롤매직이라는 자바스크립트 라이브러리를 통해서 감시를 해주는 옵션.
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 감시하는 요소가 어떤지점에서 판단할 것인가 스크롤매직 cdn에서 위에 뷰포트0(시작부분)~1(끝부분)사이
      // 내가감시하고있는 요소가 뷰포트지점에 걸리면 어떠한 내용이 트리거가 된다.  훅은 지점파단
    })
    // class속성을 set(setting)해줄거임 toggle로
    .setClassToggle(spyEl, 'show')
    // ScrollMagic이 필요한 Controller를 쓰기위한 addTo임
    .addTo(new ScrollMagic.Controller());
});





