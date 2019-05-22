let player = document.getElementById("player");

if (window.innerWidth >= 500) {
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

    document.getElementById("daysLeft").innerHTML = days + " Days" + " Left";
}

// ------------------------ CONTACT PAGE -------------------------------

const wrapper = document.getElementsByClassName("contact-wrapper")[0];

    contact_names = ['Raihan Riaz','Amol Dalal','Mayank Kulkarni','Mansi Mittal','Divyam Goel','Megh Thakkar','Megh Thakkar','Megh Thakkar', 'Megh Thakkar'];

    contact_posts = ['Online Registrations','Sponsorships','Sports Secretary','JointSports Secretary','Online Registrations','Online Registrations','OnlineRegistrations','Online Registrations','Online Registrations'];

    contact_phone = ['+91-9989401360','+91-7020141770','+91-9929855583','+91-9602775333','99999-99999','99999-99999','99999-99999','99999-99999','99999-99999'];

    contact_mail = ['webmaster@gmail.com','webmaster@gmail.com','webmaster@gmail.com','webmaster@gmail.com','webmaster@gmail.com','webmaster@gmail.com','webmaster@gmail.com','webmaster@gmail.com','webmaster@gmail.com'];

    imgPath = "src/images/contacts/cosaccan-";
    images = ['controls.png', 'spons.png', 'ss.png', 'jss.png', 'dvm.png', 'dvm.png','dvm.png', 'dvm.png', 'dvm.png'];
    
    num = contact_names.length;

for (let i = 0; i < num; i++) {
    let contact = document.createElement('div');
    contact.classList.add("contact");
    //image
        let image = document.createElement('img');
        image.classList.add("contacts-image");
        image.src = imgPath + (i+1) + ".png";
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
    wrapper.appendChild(contact);
}
// --------------------------- CONTACTS PAGE END -------------------------------

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

    let loader = document.getElementsByClassName('loader')[0];
    let loaderWraper = document.getElementsByClassName('loader_wraper')[0];

    loader.style.animation = "fadeOut 1s ease-in-out";
      setTimeout(() => {
       loader.style.display = "none";
      }, 4500);
      setTimeout(() => {
         loaderWraper.style.animation = "fadeOut 1s ease-in";
    }, 4500);
    
    setTimeout(() => {
        document.getElementsByClassName('nav-bar')[0].style.display = "flex";
        document.getElementsByClassName('sidebar')[0].style.display = "flex";
        if(window.innerWidth > 500)
        document.getElementsByClassName('navigator')[0].style.display = "flex";
        // document.getElementsByClassName('loader_wraper')[0].style.display = "none";
        if(window.innerWidth < 500)
        {
            document.getElementsByClassName('navigator')[0].style.display = "none";
        }
    }, 4500);
    updateCountdown();
}

  function changeopa(i)
  {
      document.getElementsByClassName("hover-link")[i].style.opacity = "0.4";
  }

  function decopa(i)
  {
    document.getElementsByClassName("hover-link")[i].style.opacity = "0";
  }

  // ------------------------ REGISTER PAGE -------------------------------

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  function validatePhoneNo(phone){
    var phoneNum = phone.replace(/[^\d]/g, '');
    if(phoneNum.length > 6 && phoneNum.length < 11) {  return true;  }else{return false;}
  }

  function getData(){
      var firstName = document.getElementById("first-name").value;
      var lastName = document.getElementById("last-name").value;
      var email = document.getElementById("email").value;
      var contactNo = document.getElementById("contact-number").value;
      var collegeName = document.getElementById("college-name").value;
      if(firstName == "" || lastName == "" || email == "" || contactNo == "" || collegeName == ""){
        alert("Please fill all mentioned fields");
        return;
      }
      if(!validateEmail(email)){
          alert("Please enter valid email address");
          return;
      }
      if(!validatePhoneNo(contactNo)){
        alert("Please enter valid phoneNo");
        return;
    }
     sendRequest(firstName,lastName,collegeName,email,contactNo);
  
}
  var submitButton = document.getElementsByClassName("button-logo")[0];
  submitButton.addEventListener("click",function(){
    getData();
  });
  function sendRequest(firstName,lastName,college,email,phoneNo){
    var data = $.ajax( {
        type: 'POST',
        url: '/bits-bosm/registrations/introreg',
        data: {
             "firstName" : firstName,
             "lasname":lastName,
             "college":college,
             "email":email,
             "phone":phoneNo
        },
        success: function(msg,status) { 
            if(status == "1"){
                alert("Successfully Registered");
            }
            else{
                alert("Not Registered-\n"+msg)
            }
        }
    });
}

// ------------------------ Contact Carousel -------------------------------
var flag = 0;
var slides = document.getElementsByClassName("slide");
function slideup()
{
    flag++
    if(flag==3)
    {
        flag = 0;
    }
    switch(flag)
    {
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
}

function slidedown()
{
    flag--
    if(flag < 0)
    {
        flag = 2;
    }
    switch(flag)
    {
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
}

  // ----------------------------------------------------------------------