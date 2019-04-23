var wraper = document.getElementsByClassName('wrapper')[0];
var minDistance = 0;
var noNavigation = 4;
var navigators = document.querySelectorAll(".navigator .navigation");
var currentNavigator = 0;
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
        current_page--;
        changeBackground(current_page-1);
        navigators[currentNavigator].style.border = "none";
        wraper.style.transform = `translateY(${step}vh)`;
        if(currentNavigator == 0){
            navigators[currentNavigator].style.border = "none";
        }        
        if(currentNavigator > 0){
            currentNavigator--;
        }
        setTimeout(() => {
            navigators[currentNavigator].style.border = "4px solid white";
            play = false;
        }, 1000);
    }
    else if(e.deltaY > minDistance && current_page < last_page && !play){
        play = true;
        step -= 100;
        current_page++;
        changeBackground(current_page-1);
        wraper.style.transform = `translateY(${step}vh)`;
        navigators[currentNavigator].style.border = "none";        
        if(currentNavigator < (noNavigation-1)){
            currentNavigator++;
        }
        setTimeout(() => {
            navigators[currentNavigator].style.border = "4px solid white";
            play = false;
        }, 1000);
    }
}

function navigate(x){
    if(!play){
        var i = 0;
        play = true;
        step += (current_page - x) * 100;
        current_page = x;
        changeBackground(current_page-1);
        wraper.style.transform = `translateY(${step}vh)`;
        setTimeout(() => {
            play = false;
        }, 1000);
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
        wraper.style.transform = `translateY(${step}vh)`;
        setTimeout(() => {
            play = false;
        }, 1000);
    }
    else if(dY < -minDistance && current_page < last_page && !play){
        play = true;
        step -= 100;
        current_page++;
        wraper.style.transform = `translateY(${step}vh)`;
        setTimeout(() => {
            play = false;
        }, 1000);
    }
}

function changeBackground(colorIndex) {
    let color = ["#0033B5", "#e91e63", "#009688", "#3e2723"];
    wraper.style.background = color[colorIndex];
}