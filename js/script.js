let FirstUI = document.querySelector('.FirstUI')
let FirstInput = document.querySelector('.FirstInput')
let FirstError = document.querySelector('.FirstError')
let FirstBtn = document.querySelector('.FirstBtn')

let secondUi = document.querySelector('.secondUi')
let secondHeading = document.querySelector('.secondHeading')
let secondInput = document.querySelector('.secondInput')
let secondError = document.querySelector('.secondError')
let secondBtn = document.querySelector('.secondBtn')

let ThirdUi = document.querySelector('.ThirdUi')
let ThirdHeading = document.querySelector('.ThirdHeading')
let ThirdInput = document.querySelector('.ThirdInput')
let ThirdError = document.querySelector('.ThirdError')
let ThirdBtn = document.querySelector('.ThirdBtn')
let counterChance = document.querySelector('.counterChance')

let FourUi = document.querySelector('.FourUi')
let FourHeading = document.querySelector('.FourHeading')



FirstBtn.addEventListener('click', () => {
  let value = Number(FirstInput.value)

  if (FirstInput.value == '') {
    FirstError.innerHTML = 'please enter your name'
  } else if (value) {
    FirstError.innerHTML = 'numbers are not allowed'
  } else {
    FirstUI.style.display = 'none'
    secondUi.style.display = 'block'
    secondHeading.innerHTML ='Hello ' + FirstInput.value + ', please enter your number'
  }
})



secondBtn.addEventListener('click', () => {
  let secondValue = Number(secondInput.value)

  if (secondInput.value == '') {
    secondError.innerHTML = 'please enter a number 😒'
  } else if (! secondValue) {
    secondError.innerHTML = 'only number are allowed'
  }else if (secondInput.value > 0 && secondInput.value >= 10) {
    secondError.innerHTML='please inter a number between 1 to 10'
  }else {
    secondUi.style.display = 'none'
    ThirdUi.style.display = 'block'
    ThirdHeading.innerHTML ='Okay ' + FirstInput.value + ', now guess the number!'
  }
})

let number = 3
counterChance.innerHTML = number

ThirdBtn.addEventListener('click', () => {
  let value = Number(ThirdInput.value)

  if (ThirdInput.value == '') {
    ThirdError.innerHTML = 'please enter a number'
  } else if (ThirdInput.value == secondInput.value) {
    ThirdUi.style.display = 'none'
    FourUi.style.display = 'block'
    FourHeading.innerHTML = 'Congratulations! You win!'
  } else if (number == 1) {
    ThirdUi.style.display = 'none'
    FourUi.style.display = 'block'
    FourHeading.innerHTML = 'Game Over! You lost!'
  } else {
    number--
    counterChance.innerHTML = number
    ThirdError.innerHTML = 'Wrong number, try again!'
  }
})









window.onload = () => {
    let button = document.querySelector("#btn");

    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    let height = parseInt(document
        .querySelector("#height").value);

    /* Getting input from user into weight variable. 
    Input is string so typecasting is necessary.*/
    let weight = parseInt(document
        .querySelector("#weight").value);

    let result = document.querySelector("#result");

    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height))
        result.innerHTML = "Provide a valid Height!";

    else if (weight === "" || isNaN(weight))
        result.innerHTML = "Provide a valid Weight!";

    // If both input is valid, calculate the bmi
    else {

        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height)
            / 10000)).toFixed(2);

        // Dividing as per the bmi conditions
        if (bmi < 18.6) result.innerHTML =
            `Under Weight : <span>${bmi}</span>`;

        else if (bmi >= 18.6 && bmi < 24.9)
            result.innerHTML =
                `Normal : <span>${bmi}</span>`;

        else result.innerHTML =
            `Over Weight : <span>${bmi}</span>`;
    }
}