var wraper = document.getElementsByClassName('wrapper')[0];
var minDistance = 0;
var noNavigation = 4;
var navigators = document.querySelectorAll(".navigator .navigation");
var current_page = 1;
var step = 0, x = 0;
var last_page = 4;
var play = false;
var sY, dY;
const color = ["#3175FF", "#FF156A", "#FFBB00", "#272C52"];


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
        if(window.innerWidth < 500) {
            count = 1;
            // navbar();
        }
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
    document.documentElement.style.setProperty('--bg-color', color[colorIndex]);
    setTimeout(() => {
    wraper.style.backgroundColor = color[colorIndex];
    for(var i = 0;i<4;i++)
    {
        document.getElementsByClassName("inner-links")[i].style.color = color[colorIndex];
    }
    if(count == 1) {
        for(var i = 0;i<3;i++)
        {
            document.getElementsByClassName("ham")[i].style.backgroundColor = color[colorIndex];
        }
    }
    let svgPath = document.querySelectorAll(".ham-logo .cls-1");
    let svgPath2 = document.querySelectorAll(".ham-logo .cls-2");
    for(let i = 0; i < svgPath.length; i++){
        svgPath[i].style.fill = color[colorIndex];
    }
    for(let i = 0; i < svgPath2.length; i++){
        svgPath2[i].style.fill = color[colorIndex];
    }
    }, 200);
}

function changeNavigator(dir) {
    setTimeout(() => {
        navigators[current_page-1].style.border = "4px solid white";
        play = false;
    }, 1000);
}


if(window.innerWidth < 500) {
    android:windowSoftInputMode="adjustPan";
    document.write('<meta name="viewport" content="width=device-width, height='+window.innerHeight+', initial-scale=1.0">');

    document.getElementById("first-name").addEventListener("focus", shiftUp);
    document.getElementById("last-name").addEventListener("focus", shiftUp);
    document.getElementById("email").addEventListener("focus", shiftUp);
    document.getElementById("contact-number").addEventListener("focus", shiftUp);
    document.getElementById("college-name").addEventListener("focus", shiftUp);
    
    document.getElementById("first-name").addEventListener("focusout", shiftDown);
    document.getElementById("last-name").addEventListener("focusout", shiftDown);
    document.getElementById("email").addEventListener("focusout", shiftDown);
    document.getElementById("contact-number").addEventListener("focusout", shiftDown);
    document.getElementById("college-name").addEventListener("focusout", shiftDown);

    window.addEventListener("resize", function() {
        if(window.innerHeight > (screen.height-200)){
            shiftDown();
            document.getElementById("first-name").blur();
            document.getElementById("last-name").blur();
            document.getElementById("email").blur();
            document.getElementById("contact-number").blur();
            document.getElementById("college-name").blur();
        }
    });
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


// -------------------------------nav-bar-----------------------------

var count = 0;

window.addEventListener('click', navbar);

function navbar() {
    if(count == 0)
    {
        for(var i = 0;i<3;i++)
        {
            document.getElementsByClassName("ham")[i].style.backgroundColor = color[current_page-1];
        }
        document.getElementsByClassName("hamburger")[0].style.transform = "translateX(0vw)";
        document.getElementsByClassName("ham")[0].style.transform = "rotate(135deg)";
        document.getElementsByClassName("ham")[1].style.transform = "translateX(-70vw)";
        document.getElementsByClassName("ham")[2].style.transform = "rotate(-135deg)";
        document.getElementsByClassName("ham")[2].style.width = "100%";
        count++;
    }
    else if (count == 1)
    {
        for(var i = 0;i<3;i++)
        {
            document.getElementsByClassName("ham")[i].style.backgroundColor = "#ffffff";
        }
        document.getElementsByClassName("hamburger")[0].style.transform = "translateX(-70vw)";
        document.getElementsByClassName("ham")[0].style.transform = "translateY(-1.2vh) rotate(0deg)";
        document.getElementsByClassName("ham")[1].style.transform = "translateX(0vw)";
        document.getElementsByClassName("ham")[2].style.transform = "translateY(1.2vh) rotate(0deg)";
        document.getElementsByClassName("ham")[2].style.width = "50%";
        count--;
    }
}
