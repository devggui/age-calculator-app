const inputDay = document.getElementById('inputDay')
const inputMonth = document.getElementById('inputMonth')
const inputYear = document.getElementById('inputYear')

const labelDay = document.getElementById('labelDay')
const labelMonth = document.getElementById('labelMonth')
const labelYear = document.getElementById('labelYear')

const errorMessageDayEmpty = document.getElementById('errorMessageDayEmpty')
const errorMessageMonthEmpty = document.getElementById('errorMessageMonthEmpty')
const errorMessageYearEmpty = document.getElementById('errorMessageYearEmpty')

const btnCalc = document.getElementById('btnCalc')

btnCalc.onclick = () => {
  if(inputDay.value == '') {    
    showErrorEmpty(errorMessageDayEmpty, inputDay, labelDay)      
  } else {
    hideErrorEmpty(errorMessageDayEmpty, inputDay, labelDay)    
  }

  if(inputMonth.value == '') {    
    showErrorEmpty(errorMessageMonthEmpty, inputMonth, labelMonth)      
  } else {
    hideErrorEmpty(errorMessageMonthEmpty, inputMonth, labelMonth)    
  }

  if(inputYear.value == '') {    
    showErrorEmpty(errorMessageYearEmpty, inputYear, labelYear)      
  } else {
    hideErrorEmpty(errorMessageYearEmpty, inputYear, labelYear)    
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
