// 1) Scroll Navigation
var aTags = document.querySelectorAll("header a");/*전체 a태그 다 가져오기*/
for (var i = 0; i < aTags.length; i++) { /*0번부터 2번까지 onclick부분에 함수 넣어주기*/
  aTags[i].onclick = function (e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));

    window.scrollTo({
      behavior: 'smooth' /*어떻게 스크롤할 것인가->부드럽게 스크롤*/,
      top: target.offsetTop /*원하는 지점으로 이동하기*/
    });
  };
}

// 2) Image Slider
var slider = document.querySelector("#slider"); 
var slides = slider.querySelector(".slides");
var slide = slides.querySelectorAll(".slide");

var currentSlide = 0; /*현재 화면에 보여지고 있는 슬라이드가 몇번째인가 -0으로 초기화*/

setInterval(function() {
    var from = -(1024 * currentSlide); /*각각 현재 이미지가 현재있는 위치에서 어디로 이동할 것인가*/
    var to = from - 1024; /*계속해서 왼쪽으로 가야하기에 마이너스해줌*/
    slides.animate({
        marginLeft: [from + "px", to + "px"]
    }, {
        duration: 2000, /*이미지 지속시간*/
        easing: "ease",/*애니메이션이 어떻게 실행될지 결정*/
        iterations: 1, /*계속해서 반복하기*/
        fill: "both"
    });
    currentSlide++;
    if (currentSlide === (slide.length - 1)) { /*마지막 슬라이드 위치에 도달했을 때 다시 첫번째로 돌아옴 -0번 */
        currentSlide = 0;
    }
}, 5000); /*3000ms로 실행하라*/

// 3) Tabs
var links = document.querySelectorAll(".tabs-list li a") /*탭 버튼*/
var items = document.querySelectorAll(".tabs-list li") /*탭 버튼 아래*/
for (var i = 0; i < links.length; i++) {
    links[i].onclick = function(e) {
        e.preventDefault(); /*기본 기능 정지하기*/
    }
}

for (var i = 0; i < items.length; i++) { /*각 탭에 클릭이 발생했을 때 어떻게 움직이는지 설정하는 함수*/
    items[i].onclick = function() {
        var tabId = this.querySelector("a").getAttribute("href") ;
        console.log(this.classList);
        document.querySelectorAll(".tabs-list li, .tabs div.tab").forEach(function(item) {
            item.classList.remove("active");
            console.log(item);
        });
        document.querySelector(tabId).classList.add("active"); /*active 클래스 추가*/
        this.classList.add("active");
    }  
} 

// 4) Click Image Slider
document.querySelector(".right-arrow").onclick = function () { /*해당 부분에 클릭이벤트 추가*/
    var currentSlide = document.querySelector("#photo .slide.active"); /*현재 활성화 되어있는 슬라이드*/
    var nextSlide = currentSlide.nextElementSibling; /*다음 요소(형제)를 가져오기*/
    if (nextSlide === null) { 
        nextSlide = currentSlide.parentElement.firstElementChild; /*마지막 슬라이드에서 다시 첫번째 슬라이드로 넘기기*/
    }
        currentSlide.animate({
        opacity: [1, 0] /*투명도 100% -> 0%로 설정*/
    }, {
        duration: 500, 
        easing: "ease",
        iterations: 1, /*반복은 1번만하기*/
        fill: "both" /*애니메이션이 끝난 후 어디에 위치해 있을지 설정하기*/
    });
    currentSlide.classList.remove("active"); /*투명도 설정해주고 active 삭제해주면 화면에서 사라짐*/
    nextSlide.animate({ /*사라지면 다음 형제(슬라이드)를 나타냄*/
        opacity: [0, 1] /*반대로 0% -> 100%로 보임*/
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    nextSlide.classList.add("active");
}

  document.querySelector(".left-arrow").onclick = function () { /*왼쪽 이벤트 설정하기*/
    var currentSlide = document.querySelector("#photo .slide.active");
    var previousSlide = currentSlide.previousElementSibling; /*이전 형제(슬라이드)를 가져옴*/
    if (previousSlide === null) {
        previousSlide = currentSlide.parentElement.lastElementChild; /*부모의 마지막 형제(슬라이드)로 돌아감*/
    }
        currentSlide.animate({
        opacity: [1, 0]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    currentSlide.classList.remove("active");
    previousSlide.animate({
        opacity: [0, 1]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    previousSlide.classList.add("active");
}
  
