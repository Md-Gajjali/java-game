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
  }else if (secondInput.value > 10 || secondInput.value < 0  ) {
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


