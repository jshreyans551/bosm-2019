let player = document.getElementById("player");

if (window.innerWidth >= 500) {
    console.log("working!");
    document.onmousemove = function(event) {
        let x = 50 + (event.clientX * 100 / window.innerHeight)/100 + "%"
        let y = 50 + (event.clientY * 100 / window.innerHeight)/100 + "%"
        player.style.transform = "translate(-"+x+",-"+y+")";
    }
}

// -------------------------- DAYS COUNTDOWN -------------------------------

function updateCountdown() {
    const final_date = new Date("Sep 24, 2019 23:59:59").getTime();
    let now = new Date().getTime();
    let distance = final_date - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    // let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("daysLeft").innerHTML = days;
}

// ------------------------ CONTACT PAGE -------------------------------

const wrapper = document.getElementsByClassName("contact-wrapper")[0];

        contact_names = ['Megh Thakkar','Megh Thakkar','Megh Thakkar','Megh Thakkar','Megh Thakkar','Megh Thakkar','Megh Thakkar','Megh Thakkar','Megh Thakkar','Megh Thakkar'];

        contact_posts = ['Online Registrations','Online Registrations','Online Registrations','Online Registrations','Online Registrations','Online Registrations','Online Registrations','Online Registrations','Online Registrations','Online Registrations'];

        contact_phone = ['99999-99999','99999-99999','99999-99999','99999-99999','99999-99999','99999-99999','99999-99999','99999-99999','99999-99999','99999-99999'];

        contact_mail = ['webmaster@gmail.com','webmaster@gmail.com','webmaster@gmail.com','webmaster@gmail.com','webmaster@gmail.com','webmaster@gmail.com','webmaster@gmail.com','webmaster@gmail.com','webmaster@gmail.com','webmaster@gmail.com'];

    for (let i = 0; i < 7; i++) {
        let contact = document.createElement('div');
        contact.classList.add("contact");
        //image
            let image = document.createElement('div');
            image.classList.add("contacts-image");
        //name
            let name = document.createElement('div');
            name.classList.add("contacts-text");
            name.innerHTML = contact_names[i];
        //post
            let post = document.createElement('div');
            post.classList.add("contacts-text");
            post.innerHTML = contact_posts[i];
        //phone
            let phone = document.createElement('div');
            phone.classList.add("contacts-text");
            phone.innerHTML = contact_phone[i];
        //email
            let mail = document.createElement('div');
            mail.classList.add("contacts-text");
            mail.innerHTML = contact_mail[i];

        // add elements to contact
        contact.appendChild(image);
        contact.appendChild(name);
        contact.appendChild(post); 
        contact.appendChild(phone);
        contact.appendChild(mail);

        // append contact to DOM
        wrapper.appendChild(contact)
    }
// --------------------------- CONTACTS PAGE END -------------------------------

function change_navigator() {
    const landing = document.getElementsByClassName("landing-page")[0];
    const about = document.getElementsByClassName("aboutUs")[0];
    const register = document.getElementsByClassName("container")[0];
    const contacts = document.getElementsByClassName("contact-us")[0];

    if (landing.getBoundingClientRect().top <= document.documentElement.clientHeight && landing.getBoundingClientRect().top > (-landing.getBoundingClientRect().height)){
        const nav = document.getElementsByClassName("navigation")
        nav[0].style.border = "5px solid #fff";
        nav[1].style.border = "5px"
    }
        
}

// window.onscroll = function()
// {
//     alert(1);
// }


// -------------------------------back-text flicker animation-----------------------------

setInterval(flickerAnimate, 5000);

let flickerIndex = 0;

function flickerAnimate() {
    let backText = document.querySelector(".back-text");
    if(flickerIndex < 2)
        flickerIndex++;
    else
        flickerIndex = 0;

    backText.style.animation = "flicker 0.75s ease 3 forwards";
    let flickerData = ['./src/images/GRIT.png', './src/images/GUTS.png', './src/images/GLORY.png'];

    setTimeout(function() {
        backText.src = flickerData[flickerIndex];
        backText.style.animation = "none";
    }, 1875);
}

// -------------------------------nav-bar-----------------------------



// Change margin if browser is Firefox

if (!!navigator.userAgent.match(/firefox/i)) {
    for(var i = 0; i < document.querySelectorAll(".one").length; i++ )
        document.querySelectorAll(".one")[i].classList.add("ff");
    for(var i = 0; i < document.querySelectorAll(".two").length; i++ )
        document.querySelectorAll(".two")[i].classList.add("ff");
    for(var i = 0; i < document.querySelectorAll(".one").length; i++ )
        document.querySelectorAll(".three")[i].classList.add("ff");
    for(var i = 0; i < document.querySelectorAll(".one").length; i++ )
        document.querySelectorAll(".four")[i].classList.add("ff");
  }

  
  window.onload = function(){
      document.getElementsByClassName('loader')[0].style.animation = "fadeOut 1s ease-in-out";
      document.getElementsByClassName('bosm-2019')[0].style.animation = "fadeOut 1s ease-in-out";
      setTimeout(() => {
      document.getElementsByClassName('loader')[0].style.display = "none";
      document.getElementsByClassName('bosm-2019')[0].style.display = "none";
    //   document.getElementsByClassName('loaderlogo')[0].style.animation = "fadeIn 1s ease-in";
      }, 800);
      setTimeout(() => {
        document.getElementsByClassName('loader_wraper')[0].style.animation = "fadeOut 1s ease-in";
    }, 1000);
    setTimeout(() => {
        document.getElementsByClassName('nav-bar')[0].style.display = "flex";
        document.getElementsByClassName('sidebar')[0].style.display = "flex";
        if(window.innerWidth > 500)
        document.getElementsByClassName('navigator')[0].style.display = "flex";
        document.getElementsByClassName('loader_wraper')[0].style.display = "none";
        if(window.innerWidth < 500)
        {
            document.getElementsByClassName('navigator')[0].style.display = "none";
        }
    }, 1000);
    updateCountdown();
  }