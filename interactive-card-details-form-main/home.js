var nameInp = document.getElementById('card-name');
var nam = document.getElementById('name');

var numberInp = document.getElementById('card-number');
var number = document.getElementById('number');

var monthInp = document.getElementById('card-month');
var month = document.getElementById('month');

var yearInp = document.getElementById('card-year');
var year = document.getElementById('year');

var cvcInp = document.getElementById('card-cvc');
var cvc = document.getElementById('cvc');

var submit = document.getElementById('submit-btn');

var thankPage = document.querySelector('.thank');
var form = document.querySelector('form');
var continueButton = document.getElementById('continue-btn');

function setCardNumber(e){
    number.value = (e.target.value);
}
function setCardName(e){
    nam.value = e.target.value;
}
function setCardMonth(e){
    month.value = e.target.value; 
}
function setCardYear(e){
    year.value = e.target.value;
}
function setCardCvc(e){
    cvc.value = e.target.value;
}
function submitCard(e){
    e.preventDefault();
    if(!nameInp.value){
        nameInp.classList.add('error');
        nameInp.parentElement.classList.add('error-message');
    } else{
        nameInp.classList.remove('error');
        nameInp.parentElement.classList.remove('error-message');
    }
    if(!numberInp.value){
        numberInp.classList.add('error');
        numberInp.parentElement.classList.add('error-message');
    } else{
        numberInp.classList.remove('error');
        numberInp.parentElement.classList.remove('error-message');
    }
    if(!monthInp.value){
        monthInp.classList.add('error');
        monthInp.parentElement.classList.add('error-message');
    } else{
        monthInp.classList.remove('error');
        monthInp.parentElement.classList.remove('error-message');
    }
    if(!yearInp.value){
        yearInp.classList.add('error');
        yearInp.parentElement.classList.add('error-message');
    } else{
        yearInp.classList.remove('error');
        yearInp.parentElement.classList.remove('error-message');
    }
    if(!cvcInp.value){
        cvcInp.classList.add('error');
        cvcInp.parentElement.classList.add('error-message');
    } else{
        cvcInp.classList.remove('error');
        cvcInp.parentElement.classList.remove('error-message');
    }
    if(/[A-Z]+/gi.test(nameInp.value) && !(/[A-Z]+/gi.test(nameInp.value) && /[0-9]+/gi.test(nameInp.value))  && /[0-9]+/gi.test(numberInp.value) && !(/[0-9]+/gi.test(numberInp.value) && /[A-Z]+/gi.test(numberInp.value)) && nameInp.value && numberInp.value && monthInp.value && yearInp.value && cvcInp.value){
        thankPage.classList.remove('hidden');
        form.classList.add('hidden');
    }
}
function submitCardName(){
    if(/[0-9]+/gi.test(nameInp.value)){
        nameInp.classList.add('error-2');
        nameInp.parentElement.classList.add('error-message-2');
    } else{
        nameInp.classList.remove('error-2');
        nameInp.parentElement.classList.remove('error-message-2');
    }
}
function submitCardNumber(){
    if(/[A-Z]+/gi.test(numberInp.value)){
        numberInp.classList.add('error-3');
        numberInp.parentElement.classList.add('error-message-3');
    } else{
        numberInp.classList.remove('error-3');
        numberInp.parentElement.classList.remove('error-message-3');
    }
    if(numberInp.value.length < 19){
        numberInp.classList.add('error-4');
        numberInp.parentElement.classList.add('error-message-4');
    } else{
        numberInp.classList.remove('error-4');
        numberInp.parentElement.classList.remove('error-message-4');
    }
}

function continueCard(e){
    form.classList.remove('hidden');
    thankPage.classList.add('hidden');
}

numberInp.addEventListener('keyup', setCardNumber);
numberInp.addEventListener('blur', submitCardNumber);
nameInp.addEventListener('keyup', setCardName);
nameInp.addEventListener('blur', submitCardName);
monthInp.addEventListener('keyup', setCardMonth);
yearInp.addEventListener('keyup', setCardYear);
cvcInp.addEventListener('keyup', setCardCvc);
submit.addEventListener('click', submitCard);
continueButton.addEventListener('click', continueCard);