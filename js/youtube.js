


// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// 유튜브 라이브러리이기때문에 이름이 바꾸면 안됌
function onYouTubeIframeAPIReady() {
  //<div id="player"></div>따로 #은 안붙임
  new YT.Player('player', {
    //어떤 id값을 가지고 있는 youtube video를 출력할 것이냐
    //url 주소 watch?v= (아이디) 에 써있는 아이디를 따오면 됨
    videoId: 'An6LvWQuj_8' ,//'EJF919p_hb0', //최초 재생할 유튜브 영상 아이디  
    playerVars: {  //영상을 재생하기 위한 값 var=variable(변수약어) 
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무 
      playlist: 'An6LvWQuj_8' //'An6LvWQuj_8'  //다시 반복해서 재생할 목록을 제시해 줘야 반복됨
    },
    events: {
      //method 영상이 준비가 되면 익명함수가 실행될때 음소거 처리를 하겠다
      onReady: function(event) {
        event.target.mute() // 음소거
      }
    }  

  });
}
