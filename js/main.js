//main.js


//주메뉴 클릭
const group = document.querySelectorAll(".header_wrap>header_inner>topmenu>li");

const About = document.querySelectorAll(".header_wrap>header_inner>topmenu>li>ul.About")
const Learn = document.querySelectorAll("#header>.gnb>dl.Learn")
const Gallery = document.querySelectorAll("#header>.gnb>dl.Gallery")


for(let k=0;k<group.length;k++){
    group[k].addEventListener('mouseover',e=>{
        e.preventDefault();
        group.forEach(item=>{
            item.classList.remove('on');
        });
        e.currentTarget.classList.add('on');

        let className = e.currentTarget.parentElement.getAttribute("class");
        listAll.forEach(item => {
            item.style.display = 'none';
        });
 
        switch(className){
            case 'View' :
                ent.forEach(item => {
                    item.style.display = 'block';
                });
                break;
            case 'Learn' :
                ent.forEach(item => {
                    item.style.display = 'block';
                });
                break;
            case 'Gallery' :
                shop.forEach(item => {
                    item.style.display = 'block';
                });
                break;
        }
    })
}