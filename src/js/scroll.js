var wraper = document.getElementsByClassName('wrapper')[0];
var minDistance = 0;
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
    let color2 = ["#000066","#ff0000"," #00cc66","#222f3e"];
    setTimeout(() => {
    wraper.style.backgroundColor = color[colorIndex];  
    document.getElementsByClassName("hamburger")[0].style.backgroundColor = color2[colorIndex];      
    }, 200);
}

function changeNavigator(dir) {
    setTimeout(() => {
        navigators[current_page-1].style.border = "4px solid white";
        play = false;
    }, 1000);
}


if(window.innerWidth < 500) {
    document.write('<meta name="viewport" content="width=device-width, height='+window.innerHeight+', initial-scale=1.0">');

    document.getElementById("first-name").addEventListener("focus", shiftUp);
    document.getElementById("last-name").addEventListener("focus", shiftUp);
    document.getElementById("email").addEventListener("focus", shiftUp);
    document.getElementById("contact-no").addEventListener("focus", shiftUp);
    document.getElementById("college").addEventListener("focus", shiftUp);
    
    document.getElementById("first-name").addEventListener("focusout", shiftDown);
    document.getElementById("last-name").addEventListener("focusout", shiftDown);
    document.getElementById("email").addEventListener("focusout", shiftDown);
    document.getElementById("contact-no").addEventListener("focusout", shiftDown);
    document.getElementById("college").addEventListener("focusout", shiftDown);

    if(window.innerHeight < (screen.height-200)){
        alert(screen.height-window.innerHeight);
        shiftDown();
    }
}

function shiftUp() {
    document.querySelector(".container").style.alignItems = "flex-start";
    if(window.innerWidth < 400)
    document.querySelector(".register").style.transform = "translateY(-11vw)";
    document.querySelector(".nav-bar").style.transform = "translateY(-100%)";
}

function shiftDown() {
    document.querySelector(".container").style.alignItems = "center";
    document.querySelector(".register").style.transform = "translateY(0)";
    document.querySelector(".nav-bar").style.transform = "translateY(0)";
}