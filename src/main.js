import './style.scss';

//max value input number
const formNumber = document.querySelectorAll('.form__input-number');
const MAX_VALUE_INPUT = 4;

formNumber.forEach(function(elemInput) {
    elemInput.addEventListener('input', function() {
        console.log(elemInput.value);
        if (elemInput.value.length > MAX_VALUE_INPUT) {
            elemInput.value = MAX_VALUE_INPUT;
        }
    })
});

const btnApply = document.querySelector('.btn__apply');
const preferencesBlock = document.querySelector('.preferences');
const bodyBlock = document.querySelector('.body');
const footerBlock = document.querySelector('.footer');
const titleBlock = document.querySelector('.preferences__title');
const footerText = document.querySelectorAll('.footer__block-text');
const footerRule = document.querySelectorAll('.footer__block-rule');
const inputSpan = document.querySelectorAll('.input__span');
const input = document.querySelectorAll('.input');
const btnCancel = document.querySelector('.btn__cancel');
const formInput = document.querySelectorAll('.form__input');
const formInputNumber = document.querySelectorAll('.form__input-number');

//btn Apply change theme
btnApply.addEventListener('click', saveParams)

function saveParams () {

    const dropList = document.querySelectorAll('.dropdown__list');
    const dropButton = document.querySelectorAll('.dropdown__button');
    const dropListItem = document.querySelectorAll('.dropdown__list-item');

    if (document.querySelector(".input__radio--dark").checked) {
        preferencesBlock.classList.add('dark');
        bodyBlock.classList.add('dark');
        footerBlock.classList.add('dark');
        titleBlock.classList.add('dark');
        dropListItem.forEach(list => {
            list.classList.add('dark');
        })
        footerText.forEach(text => {
            text.classList.add('dark');
        })
        footerRule.forEach(rule => {
            rule.classList.add('dark');
        })
        formInput.forEach(input => {
            input.classList.add('dark');
        })
        formInputNumber.forEach(input => {
            input.classList.add('dark');
        })
        dropButton.forEach(btn => {
            btn.classList.add('dark');
        })
        inputSpan.forEach(span => {
            span.classList.add('dark');
        })
        input.forEach(input => {
            input.classList.add('dark');
        })
        btnCancel.classList.add('dark');
        btnApply.classList.add('dark');
        dropList.forEach(dropList => {
            dropList.classList.add('dark');
        })
        localStorage.setItem('theme', 'dark');
    }
    if (document.querySelector(".input__radio--light").checked) {
        preferencesBlock.classList.remove('dark');
        bodyBlock.classList.remove('dark');
        footerBlock.classList.remove('dark');
        titleBlock.classList.remove('dark');
        dropList.forEach(dropList => {
            dropList.classList.remove('dark');
        })
        footerText.forEach(text => {
            text.classList.remove('dark');
        })
        dropButton.forEach(btn => {
            btn.classList.remove('dark');
        })
        dropListItem.forEach(list => {
            list.classList.remove('dark');
        })
        footerRule.forEach(rule => {
            rule.classList.remove('dark');
        })
        inputSpan.forEach(span => {
            span.classList.remove('dark');
        })
        formInput.forEach(input => {
            input.classList.remove('dark');
        })
        formInputNumber.forEach(input => {
            input.classList.remove('dark');
        })
        input.forEach(input => {
            input.classList.remove('dark');
        })
        btnCancel.classList.remove('dark');
        btnApply.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}


//custom dropdown select
const dropdown = document.querySelectorAll('.dropdown');
dropdown.forEach(dropwrapper => {

    const dropInput = dropwrapper.querySelector('.dropdown__input');
    const dropButton = dropwrapper.querySelector('.dropdown__button');
    const dropList = dropwrapper.querySelector('.dropdown__list');
    const dropListItem = dropList.querySelectorAll('.dropdown__list-item');

    //open drop and rotate arrow
    dropButton.addEventListener('click', function() {
        dropList.classList.toggle('show');
        dropButton.classList.toggle('rotate');
    });

    //choose drop item
    dropListItem.forEach(dropItem => {
        dropItem.addEventListener('click', function(){
            dropButton.innerText = this.innerText;
            dropInput.value = this.dataset.value;
            dropInput.value = localStorage.setItem('dropvalue', dropInput.value)
            dropList.classList.remove('show');
            dropButton.classList.remove('rotate');
        })
    })
    //hidden dropdown list when click document
    document.addEventListener('click', function(evt) {
        if(evt.target !== dropButton) {
            dropList.classList.remove('show');
            dropButton.classList.remove('rotate');
        }
    })
})

//save params when reload page
document.addEventListener('DOMContentLoaded', () => {

    const dropList = document.querySelectorAll('.dropdown__list');
    const dropButton = document.querySelectorAll('.dropdown__button');
    const dropListItem = document.querySelectorAll('.dropdown__list-item');

    let data = localStorage.getItem('theme');
    let dateDrop = localStorage.getItem('dropvalue');
    //save params dropdown
    if (dateDrop === 'sun') {
        dropButton[0].innerText = 'Sunday';
    }
    if (dateDrop === 'syst') {
        dropButton[0].innerText = 'System';
    }
    if (dateDrop === 'mon') {
        dropButton[0].innerText = 'Monday';
    }
    //save theme
    if (data === 'light') {
        preferencesBlock.classList.remove('dark');
        bodyBlock.classList.remove('dark');
        footerBlock.classList.remove('dark');
        dropList.forEach(dropList => {
            dropList.classList.remove('dark');
        })
        titleBlock.classList.remove('dark');
        dropButton.forEach(btn => {
            btn.classList.remove('dark');
        })
        dropListItem.forEach(list => {
            list.classList.remove('dark');
        })
        formInput.forEach(input => {
            input.classList.remove('dark');
        })
        formInputNumber.forEach(input => {
            input.classList.remove('dark');
        })
        footerText.forEach(text => {
            text.classList.remove('dark');
        })
        footerRule.forEach(rule => {
            rule.classList.remove('dark');
        })
        inputSpan.forEach(span => {
            span.classList.remove('dark');
        })
        input.forEach(input => {
            input.classList.remove('dark');
        })
        btnCancel.classList.remove('dark');
        btnApply.classList.remove('dark');
    } else {
        preferencesBlock.classList.add('dark');
        dropList.forEach(dropList => {
            dropList.classList.add('dark');
        })
        bodyBlock.classList.add('dark');
        footerBlock.classList.add('dark');
        titleBlock.classList.add('dark');
        dropButton.forEach(btn => {
            btn.classList.add('dark');
        })
        dropListItem.forEach(list => {
            list.classList.add('dark');
        })
        formInput.forEach(input => {
            input.classList.add('dark');
        })
        formInputNumber.forEach(input => {
            input.classList.add('dark');
        })
        footerText.forEach(text => {
            text.classList.add('dark');
        })
        footerRule.forEach(rule => {
            rule.classList.add('dark');
        })
        inputSpan.forEach(span => {
            span.classList.add('dark');
        })
        input.forEach(input => {
            input.classList.add('dark');
        })
        btnCancel.classList.add('dark');
        btnApply.classList.add('dark');
    }
})
