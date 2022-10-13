//main.js
// 주메뉴
const gnbMenu = document.querySelectorAll(".topmenu>li>ul");
const header_wrap = document.querySelector(".header_wrap");

for(var i=0; i<gnbMenu.length;i++){ 
  gnbMenu[i].children[0].addEventListener('mouseover focus',(e) => {
  e.currentTarget.classList.add('on'); 
  var ht = e.currentTarget.children[1].offsetHeight; 
  headerWrap.style.height = 50 + ht + 'px';
});


// title = "검색창 열기/닫기"
const srch  = document.querySelectorAll('.srch>fieldset');

srch[4].addEventListener('click', e => {
  e.currentTarget.classList.toggle('on');
  if (e.currentTarget.classList.contains('on')) {
    e.currentTarget.children[0].setAttribute('title', '검색창 닫기');
  } else {
    e.currentTarget.children[0].setAttribute('title', '검색창 열기');
  }
});
// 고객센터
// toggle로 class on
// title = "고객센터 열기/닫기"
const top_rLI = document.querySelectorAll('.top_r>li');

top_rLI[4].addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('on');
  if (e.currentTarget.classList.contains('on')) {
    e.currentTarget.children[0].setAttribute('title', '고객센터 닫기');
  } else {
    e.currentTarget.children[0].setAttribute('title', '고객센터 열기');
  }
});