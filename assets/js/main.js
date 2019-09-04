let contactForm = document.getElementById('contact_form');
let name = document.getElementById('name')
    message= document.getElementById('message')
    phoneNumber = document.getElementById('phone_number');
let error = document.getElementById('error');
let success = document.getElementById('success');

const validName = (value) => {
    if(value.length >= 4){
        return true;
    }
    return false;
}
const validPhoneNumber = (number) => {
    const verify = /^\d{11}$/;
    if(number.match(verify)){
        return true;
    } return false;
}
const validMessage = (msg) => {
    if(msg.length >= 20){
        return true;
    } return false;
}
const validateFormFields = (ev) => {
    ev.preventDefault();
    let msg = '';
    let trimmedName = name.value.replace(/\s/g, "");
    let trimmedNumber = phoneNumber.value;
    let trimmedMessage = message.value.replace(/\s/g, "");
    
    if(!validName(trimmedName)){
        msg = 'Enter a longer full name';
        error.innerHTML = msg ;
    }
    else if (!validPhoneNumber(trimmedNumber)){
        msg = `Enter an 11 digit phone number `;
        error.innerHTML = msg;
    }
    else if(!validMessage(trimmedMessage)){
        msg = `Message is too short`;
        error.innerHTML = msg ;
    }
    else{
        msg = 'Your message has been sent to Grace';
        success.innerHTML = msg;
        console.log('form is successful')
    }


}

contactForm.addEventListener('submit', validateFormFields);