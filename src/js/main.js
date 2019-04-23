var player = document.getElementById("player");
document.onmousemove = function() {
    var x = 50 + (event.clientX * 100 / window.innerHeight)/100 + "%"
    var y = 50 + (event.clientY * 100 / window.innerHeight)/100 + "%"
    player.style.transform = "translate(-"+x+",-"+y+")";
}

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

function change-navigator() {
    const landing = document.getElementsByClassName(".landing-page")[0];
    const about = document.getElementsByClassName(".aboutUs")[0];
    const register = document.getElementsByClassName(".container")[0];
    const contacts = document.getElementsByClassName(".contact-us")[0];

    if (landing.getBoundingClientRect().top <= document.documentElement.clientHeight && landing.getBoundingClientRect().top > (-landing.getBoundingClientRect().height))
        document.getElementsByClassName(".navigation").style.border = 'none';
}