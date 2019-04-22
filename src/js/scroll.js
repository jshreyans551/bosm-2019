var wraper = document.getElementsByClassName('wrapper')[0];
var minDistance = 50;

var current_page = 1;
var step = 0;
var last_page = 3;
var play = false;

wraper.addEventListener('wheel', scrollY);

function scrollY(e){
    e.preventDefault();
    console.log(e.deltaY);
    if(e.deltaY < -minDistance && current_page < last_page && !play){
        console.log(play);
        play = true;
        console.log('down');
        step -= 100;
        current_page++;
        wraper.style.transform = `translateY(${step}vh)`;
        setTimeout(() => {
            play = false;
        }, 1000);
    }
    else if(e.deltaY > minDistance && current_page > 1 && !play){
        console.log(play);
        console.log('up');
        play = true;
        step += 100;
        current_page--;
        wraper.style.transform = `translateY(${step}vh)`;
        setTimeout(() => {
            play = false;
        }, 1000);
    }
}
