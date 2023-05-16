const inputDay = document.getElementById('inputDay')
const inputMonth = document.getElementById('inputMonth')
const inputYear = document.getElementById('inputYear')

const labelDay = document.getElementById('labelDay')
const labelMonth = document.getElementById('labelMonth')
const labelYear = document.getElementById('labelYear')

const errorMessageDay = document.getElementById('errorMessageDay')
const errorMessageMonth = document.getElementById('errorMessageMonth')
const errorMessageYear = document.getElementById('errorMessageYear')

const btnCalc = document.getElementById('btnCalc')

btnCalc.onclick = () => {
  if(inputDay.value == '') {    
    showErrorEmpty(errorMessageDay, inputDay, labelDay)      
  } else {
    hideErrorEmpty(errorMessageDay, inputDay, labelDay)    
  }

  if(inputMonth.value == '') {    
    showErrorEmpty(errorMessageMonth, inputMonth, labelMonth)      
  } else {
    hideErrorEmpty(errorMessageMonth, inputMonth, labelMonth)    
  }

  if(inputYear.value == '') {    
    showErrorEmpty(errorMessageYear, inputYear, labelYear)      
  } else {
    hideErrorEmpty(errorMessageYear, inputYear, labelYear)    
  }
}

function showErrorEmpty(element, input, label) {  
  element.classList.remove('hidden')
  element.classList.add('block')
  input.classList.add('border-[var(--Light-red)]')
  label.classList.remove('text-[var(--Smokey-grey)]')
  label.classList.add('text-[var(--Light-red)]')
}

function hideErrorEmpty(element, input, label) {
  element.classList.remove('block')
  element.classList.add('hidden')
  input.classList.remove('border-[var(--Light-red)]')
  input.classList.add('border-[var(--Light-grey)]')
  label.classList.remove('text-[var(--Light-red)]')
  label.classList.add('text-[var(--Smokey-grey)]')
}
