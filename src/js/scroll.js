var wraper = document.getElementsByClassName('wrapper')[0];
var minDistance = 30;
var noNavigation = 4;
var navigators = document.querySelectorAll(".navigator .navigation");
var current_page = 1;
var step = 0, x = 0;
var last_page = 4;
var play = false;
var sY, dY;

wraper.addEventListener('wheel', scrollY);

function scrollY(e){
    e.preventDefault();
    if(e.deltaY < -minDistance && current_page > 1&& !play){
        play = true;
        step += 100;
        navigators[current_page-1].style.border = "none";
        current_page--;
        changeBackground(current_page-1);
        wraper.style.transform = `translateY(${step}vh)`;
        changeNavigator();    
    }
    else if(e.deltaY > minDistance && current_page < last_page && !play){
        play = true;
        step -= 100;
        navigators[current_page-1].style.border = "none";
        current_page++;
        changeBackground(current_page-1);
        wraper.style.transform = `translateY(${step}vh)`;
        changeNavigator();
    }
}

function navigate(x){
    if(!play){
        var i = 0;
        play = true;
        step += (current_page - x) * 100;
        navigators[current_page-1].style.border = "none";
        current_page = x;
        changeBackground(current_page-1);
        wraper.style.transform = `translateY(${step}vh)`;
        changeNavigator();
    }
}

wraper.addEventListener('touchstart', start);
wraper.addEventListener('touchmove', move);
wraper.addEventListener('touchend', end);

function start(e){
    var tchs = e.changedTouches[0];
    sY = tchs.pageY;
}

function move(e){
    e.preventDefault();    
}

function end(e){
    var tchs = e.changedTouches[0];
    dY = tchs.pageY - sY;
    if(dY > minDistance && current_page > 1 && !play){
        play = true;
        step += 100;
        current_page--;
        changeBackground(current_page-1);
        wraper.style.transform = `translateY(${step}vh)`;
        setTimeout(() => {
            play = false;
        }, 1000);
    }
    else if(dY < -minDistance && current_page < last_page && !play){
        play = true;
        step -= 100;
        current_page++;
        changeBackground(current_page-1);
        wraper.style.transform = `translateY(${step}vh)`;
        setTimeout(() => {
            play = false;
        }, 1000);
    }
}

function changeBackground(colorIndex) {
    let color = ["#0033B5", "#e91e63", "#009688", "#3e2723"];
    setTimeout(() => {
    wraper.style.backgroundColor = color[colorIndex];        
    }, 200);
}

function changeNavigator(dir) {
    setTimeout(() => {
        navigators[current_page-1].style.border = "4px solid white";
        play = false;
    }, 1000);
}