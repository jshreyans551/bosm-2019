// --------
// --------

console.log("%cMade with LOVE :)", "color: red; font-size: x-large");
console.log("%c               - By DVM", "color: green; font-size: x-large");

// --------
// --------

let player = document.getElementById("player");

if (window.innerWidth >= 500) {
  document.onmousemove = function(event) {
    let x = 50 + (event.clientX * 100) / window.innerHeight / 100 + "%";
    let y = 50 + (event.clientY * 100) / window.innerHeight / 100 + "%";
    player.style.transform = "translate(-" + x + ",-" + y + ")";
  };
}

// -------------------------- DAYS COUNTDOWN -------------------------------

function updateCountdown() {
  const final_date = new Date("Sep 12, 2019 23:59:59").getTime();
  let now = new Date().getTime();
  let distance = final_date - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  document.getElementById("daysLeft").innerHTML = days + " Days" + " Left";
}

// -------------------------------back-text flicker animation-----------------------------

setInterval(flickerAnimate, 5000);

let flickerIndex = 0;

function flickerAnimate() {
  let backText = document.querySelector(".back-text");
  if (flickerIndex < 2) flickerIndex++;
  else flickerIndex = 0;

  backText.style.animation = "flicker 0.75s ease 3 forwards";
  let flickerData = [
    "./src/images/GRIT.png",
    "./src/images/GUTS.png",
    "./src/images/GLORY.png"
  ];

  setTimeout(function() {
    backText.src = flickerData[flickerIndex];
    backText.style.animation = "none";
  }, 1875);
}

// -------------------------------nav-bar-----------------------------

// Change margin if browser is Firefox

if (!!navigator.userAgent.match(/firefox/i)) {
  for (var i = 0; i < document.querySelectorAll(".one").length; i++)
    document.querySelectorAll(".one")[i].classList.add("ff");
  for (var i = 0; i < document.querySelectorAll(".two").length; i++)
    document.querySelectorAll(".two")[i].classList.add("ff");
  for (var i = 0; i < document.querySelectorAll(".one").length; i++)
    document.querySelectorAll(".three")[i].classList.add("ff");
  for (var i = 0; i < document.querySelectorAll(".one").length; i++)
    document.querySelectorAll(".four")[i].classList.add("ff");
}

window.onload = function() {
  //    document.getElementsByClassName('loader')[0].style.animation = "fadeOut 1s ease-in-out";
  // //   document.getElementsByClassName('bosm-2019')[0].style.animation = "fadeOut 1s ease-in-out";
  //   setTimeout(() => {
  //    document.getElementsByClassName('loader')[0].style.display = "none";
  // //   document.getElementsByClassName('bosm-2019')[0].style.display = "none";
  //   document.getElementsByClassName('loaderlogo')[0].style.animation = "fadeIn 1s ease-in";
  //   }, 800);
  //   setTimeout(() => {
  //      document.getElementsByClassName('loader_wraper')[0].style.animation = "fadeOut 1s ease-in";
  // }, 1000);

  let loader = document.getElementsByClassName("loader")[0];
  let loaderWraper = document.getElementsByClassName("loader_wraper")[0];
  let contentWraper = document.getElementsByClassName("content-wrapper")[0];
  contentWraper.style.transition = "opacity ease-out 0.5s"; // fade-in effect for content on loading

  setTimeout(() => {
    loader.style.display="none";
    contentWraper.style.opacity = 1;
    document.getElementsByClassName("nav-bar")[0].style.display = "flex";
    document.getElementsByClassName("sidebar")[0].style.display = "flex";
    if (window.innerWidth > 500)
      document.getElementsByClassName("navigator")[0].style.display = "flex";
    if (window.innerWidth < 500) {
      document.getElementsByClassName("navigator")[0].style.display = "none";
    }
  }, 4500);
  updateCountdown();
};

function changeopa(i) {
  document.getElementsByClassName("hover-link")[i].style.opacity = "0.4";
}

function decopa(i) {
  document.getElementsByClassName("hover-link")[i].style.opacity = "0";
}

// ------------------------ REGISTER PAGE -------------------------------

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validatePhoneNo(phone) {
  var phoneNum = phone.replace(/[^\d]/g, "");
  if (phoneNum.length > 6 && phoneNum.length < 11) {
    return true;
  } else {
    return false;
  }
}

function getData() {
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var email = document.getElementById("email").value;
  var contactNo = document.getElementById("contact-number").value;
  var collegeName = document.getElementById("college-name").value;
  if (
    firstName == "" ||
    lastName == "" ||
    email == "" ||
    contactNo == "" ||
    collegeName == ""
  ) {
    alert("Please fill all mentioned fields");
    return;
  }
  if (!validateEmail(email)) {
    alert("Please enter valid email address");
    return;
  }
  if (!validatePhoneNo(contactNo)) {
    alert("Please enter valid phoneNo");
    return;
  }
  sendRequest(firstName, lastName, collegeName, email, contactNo);
}
var submitButton = document.getElementsByClassName("button-logo")[0];
submitButton.addEventListener("click", function() {
  getData();
});
function sendRequest(firstName, lastName, college, email, phoneNo) {
  var data = $.ajax({
    type: "POST",
    url: "/bits-bosm/registrations/introreg",
    data: {
      firstName: firstName,
      lasname: lastName,
      college: college,
      email: email,
      phone: phoneNo
    },
    success: function(msg, status) {
      if (status == "1") {
        alert("Successfully Registered");
      } else {
        alert("Not Registered-\n" + msg);
      }
    }
  });
}

// ------------------------ Contact Carousel -------------------------------
var flag = 0;
var slides = document.getElementsByClassName("slide");
function slideup() {
  flag++;
  if (flag == 3) {
    flag = 0;
  }
  window.removeEventListener("keydown", keyMove);
  contact.removeEventListener("touchstart", startTouch, false);
  contact.removeEventListener("touchmove", moveTouch, false);
  switch (flag) {
    case 1:
      slides[0].style.transform = "translateY(-25vh)";
      slides[0].style.opacity = "0";
      slides[0].style.transition = "all 0.35s ease-in";
      slides[1].style.transform = "translateY(-70vh)";
      slides[1].style.opacity = "1";
      slides[1].style.transition = "all 0.25s ease-in";
      slides[2].style.transform = "translateY(-165vh)";
      break;
    case 2:
      slides[0].style.transform = "translateY(-25vh)";
      slides[1].style.transform = "translateY(-95vh)";
      slides[1].style.opacity = "0";
      slides[1].style.transition = "all 0.35s ease-in";
      slides[2].style.transform = "translateY(-140vh)";
      slides[2].style.transition = "all 0.25s ease-in";
      slides[2].style.opacity = "1";
      break;
    default:
      slides[0].style.transform = "translateY(0vh)";
      slides[0].style.opacity = "1";
      slides[0].style.transition = "all 0.25s ease-in";
      slides[1].style.transform = "translateY(-95vh)";
      slides[1].style.opacity = "0";
      slides[2].style.transform = "translateY(-165vh)";
      slides[2].style.transition = "all 0.35s ease-in";
      slides[2].style.opacity = "0";
  }
  setTimeout(() => {
    window.addEventListener("keydown", keyMove);
    contact.addEventListener("touchstart", startTouch, false);
    contact.addEventListener("touchmove", moveTouch, false);
  }, 350);
}

function slidedown() {
  flag--;
  if (flag < 0) {
    flag = 2;
  }
  window.removeEventListener("keydown", keyMove);
  contact.removeEventListener("touchstart", startTouch, false);
  contact.removeEventListener("touchmove", moveTouch, false);
  switch (flag) {
    case 1:
      slides[0].style.transform = "translateY(-25vh)";
      slides[1].style.transition = "all 0.25s ease-in";
      slides[1].style.transform = "translateY(-70vh)";
      slides[1].style.opacity = "1";
      slides[2].style.transform = "translateY(-165vh)";
      slides[2].style.transition = "all 0.35s ease-in";
      slides[2].style.opacity = "0";
      break;
    case 2:
      slides[0].style.transform = "translateY(-25vh)";
      slides[1].style.transform = "translateY(-90vh)";
      slides[0].style.transition = "all 0.35s ease-in";
      slides[0].style.opacity = "0";
      slides[2].style.transform = "translateY(-140vh)";
      slides[2].style.opacity = "1";
      slides[2].style.transition = "all 0.25s ease-in";
      break;
    default:
      slides[0].style.transform = "translateY(0vh)";
      slides[0].style.opacity = "1";
      slides[0].style.transition = "all 0.25s ease-in";
      slides[1].style.transform = "translateY(-95vh)";
      slides[1].style.opacity = "0";
      slides[2].style.transform = "translateY(-165vh)";
      slides[1].style.transition = "all 0.35s ease-in";
  }
  setTimeout(() => {
    window.addEventListener("keydown", keyMove);
    contact.addEventListener("touchstart", startTouch, false);
    contact.addEventListener("touchmove", moveTouch, false);
  }, 350);
}

var url = "src/images/contacts/";
// var profpic = ["cosaccan-1.png","cosaccan-2.png","cosaccan-3.png","cosaccan-4.png","cosaccan-5.jpg","cosaccan-6.png","cosaccan-7.jpg","cosaccan-5.png","cosaccan-5.png"];
var profpic = [
  "controls.png",
  "spons.png",
  "recnacc.jpg",
  "pcr.png",
  "ss.png",
  "jss1.png",
  "jss2.png",
  "dvm.jpg",
  "dvm.jpg"
];
var pic = document.getElementsByClassName("pic");
// console.log(pic);
for (var i = 0; i < 9; i++) {
  pic[i].style.backgroundImage = "url(" + url + profpic[i] + ")";
}
document.getElementsByClassName("logo")[0].style.backgroundImage =
  "url('src/images/favicon.png')";

function keyMove() {
  if (
    window.event.key == "s" ||
    window.event.key == "a" ||
    window.event.key == "ArrowDown" ||
    window.event.key == "ArrowLeft"
  ) {
    slidedown();
  } else if (
    window.event.key == " " ||
    window.event.key == "w" ||
    window.event.key == "d" ||
    window.event.key == "ArrowUp" ||
    window.event.key == "ArrowRight"
  ) {
    slideup();
  }
}
var initialX = null;
var initialY = null;

function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
}

function moveTouch(e) {
  if (initialX === null) {
    return;
  }

  if (initialY === null) {
    return;
  }

  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;

  var diffX = initialX - currentX;
  var diffY = initialY - currentY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      // swiped left
      slideup();
    } else {
      // swiped right
      slidedown();
    }
  }
  initialX = null;
  initialY = null;

  e.preventDefault();
}
window.addEventListener("keydown", keyMove);
var contact = document.getElementsByClassName("contact-us")[0];
contact.addEventListener("touchstart", startTouch, false);
contact.addEventListener("touchmove", moveTouch, false);
// ----------------------------------------------------------------------
