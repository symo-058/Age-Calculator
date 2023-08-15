const errorDay= document.querySelector('#error-day');
const errorMonth= document.querySelector('#error-month');
const errorYear= document.querySelector('#error-year');

const dayLable = document.querySelector('#day-lable');
const monthLable = document.querySelector('#month-lable');
const yearLable = document.querySelector('#year-lable');

const inputs = document.querySelector('input');

const yearNow =new Date().getFullYear();

const inputDay = document.getElementById ('day');
const inputMonth = document.getElementById ('month');
const inputYear = document.getElementById ('year');

const outputDays = document.querySelector ('.output-days');
const outputMonths = document.querySelector ('.output-months');
const outputYears = document.querySelector ('.output-years');

let isValid = false;

inputDay.addEventListener('input', function(){
    if (+inputDay.value > 31 && +inputDay.value < 0) {
        errorDay.textContent = 'Must be a valid day';
        inputDay.style.border = "1px solid hsl(0, 100%, 67%)";
        dayLable.style.color = 'hsl(0, 100%, 67%)';
        // inputs.style.border = 'none';
        isValid = false;
        return;
    }
    else {
        isValid = true;
        errorDay.textContent = '';
        inputDay.style.border = "";
        dayLable.style.color = '';
    }

    if (+inputDay.value === 0){
        errorDay.textContent = "This field is required";
        inputDay.style.border = "1px solid hsl(0, 100%, 67%)";
        dayLable.style.color = 'hsl(0, 100%, 67%)';
        isValid = false;
        return;
    }
    else{
        isValid = true;
        errorDay.textContent = "";
        inputDay.style.border = "";
        dayLable.style.color = '';
    }
});

inputMonth.addEventListener('input', function(){
    if (+inputMonth.value > 12 ) {
        errorMonth.textContent = 'Must be a valid month';
        inputMonth.style.border = "1px solid hsl(0, 100%, 67%)";
        monthLable.style.color = 'hsl(0, 100%, 67%)';
        // inputs.style.border = 'none';
        isValid = false;
        return;
    }
    else {
        isValid = true;
        errorMonth.textContent = '';
        inputMonth.style.border = "";
        monthLable.style.color = '';
    }

    if (+inputMonth.value === 0){
        errorMonth.textContent = "This field is required";
        inputMonth.style.border = "1px solid hsl(0, 100%, 67%)";
        monthLable.style.color = 'hsl(0, 100%, 67%)';
        isValid = false;
        return;
    }
    else{
        isValid = true;
        errorMonth.textContent = "";
        inputMonth.style.border = "";
        monthLable.style.color = '';
    }
});

inputYear.addEventListener('input', function(){
    if (+inputYear.value > yearNow) {
        errorYear.textContent = 'Must be in the past';
        inputYear.style.border = "1px solid hsl(0, 100%, 67%)";
        yearLable.style.color = 'hsl(0, 100%, 67%)';
        // inputs.style.border = 'none';
        isValid = false;
        return;
    }
    else {
        isValid = true;
        errorYear.textContent = '';
        inputYear.style.border = "";
        yearLable.style.color = '';
    }

    if (+inputYear.value === 0){
        errorYear.textContent = "This field is required";
        inputYear.style.border = "1px solid hsl(0, 100%, 67%)";
        yearLable.style.color = 'hsl(0, 100%, 67%)';
        isValid = false;
        return;
    }
    else{
        isValid = true;
        errorYear.textContent = "";
        inputYear.style.border = "";
        yearLable.style.color = '';
    }
});

const subBtn = document.querySelector('button');
subBtn.addEventListener('click', calculateDate);

function calculateDate() {

    const enteredDay = parseInt(inputDay.value);
    const enteredMonth = parseInt(inputMonth.value);
    const enteredYear = parseInt(inputYear.value);

    if (isValid) {
        
        let birthdayObj = new Date(enteredYear,enteredMonth - 1,enteredDay);
        let milliSec = birthdayObj.getTime();
        // console.log(milliSec)
        let ageDiffMill = Date.now() - milliSec;
        let ageDate = new Date(ageDiffMill);
        // console.log(ageDate)
        let ageYears = ageDate.getUTCFullYear() - 1970;
        // console.log(ageYears)
        let ageMonths = ageDate.getUTCMonth();
        // console.log(ageMonths)
        let ageDays = ageDate.getUTCDay() - 1;
        // console.log(ageDays)

        animateCount(outputYears,ageYears);
        outputYears.textContent = ageYears;
        animateCount(outputMonths,ageMonths);
        outputMonths.textContent = ageMonths;
        animateCount(outputDays,ageDays);
        outputDays.textContent = ageDays;
    }
    else {
        alert('Error!!!');
    }
}


function animateCount(outputYears,ageYears) {
    let currentValue = 0;
    const interval = setInterval(() =>{
        if (currentValue < ageYears) {
            currentValue++;
            outputYears.textContent = currentValue;
        }
        else {
            clearInterval(interval);
        }
    }, 25);
}

function animateCount(outputMonths,ageMonths) {
    let currentValue = 0;
    const interval = setInterval(() =>{
        if (currentValue < ageMonths) {
            currentValue++;
            outputMonths.textContent = currentValue;
        }
        else {
            clearInterval(interval);
        }
    }, 25);
}

function animateCount(outputDays,ageDays) {
    let currentValue = 0;
    const interval = setInterval(() =>{
        if (currentValue < ageDays) {
            currentValue++;
            outputDays.textContent = currentValue;
        }
        else {
            clearInterval(interval);
        }
    }, 25);
}
