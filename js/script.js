// Variaveis
const date = new Date()

const inputDay = document.getElementById('inputDay')
const inputMonth = document.getElementById('inputMonth')
const inputYear = document.getElementById('inputYear')

const labelDay = document.getElementById('labelDay')
const labelMonth = document.getElementById('labelMonth')
const labelYear = document.getElementById('labelYear')

const errorMessageDayEmpty = document.getElementById('errorMessageDayEmpty')
const errorMessageMonthEmpty = document.getElementById('errorMessageMonthEmpty')
const errorMessageYearEmpty = document.getElementById('errorMessageYearEmpty')

const errorMessageDayValid = document.getElementById('errorMessageDayValid')
const errorMessageMonthValid = document.getElementById('errorMessageMonthValid')
const errorMessageYearValid = document.getElementById('errorMessageYearValid')

const errorMessageYearFourNumber = document.getElementById('errorMessageYearFourNumber')

const errorMessageDateValid = document.getElementById('errorMessageDateValid')

let resultDay = document.getElementById('resultDay')
let resultMonth = document.getElementById('resultMonth')
let resultYear = document.getElementById('resultYear')

const btnCalc = document.getElementById('btnCalc')

btnCalc.onclick = () => {
  if(inputDay.value == '') {    
    showErrorEmpty(errorMessageDayEmpty, inputDay, labelDay)      
  } else {    
    hideErrorEmpty(errorMessageDayEmpty, inputDay, labelDay)    

    if(dayValidation(inputDay.value) == false) {
      showErrorValid(errorMessageDayValid, inputDay, labelDay)
    } else {
      hideErrorValid(errorMessageDayValid, inputDay, labelDay)      
    }
  }

  if(inputMonth.value == '') {    
    showErrorEmpty(errorMessageMonthEmpty, inputMonth, labelMonth)      
  } else {
    hideErrorEmpty(errorMessageMonthEmpty, inputMonth, labelMonth)    

    if(monthValidation(inputMonth.value) == false) {
      showErrorValid(errorMessageMonthValid, inputMonth, labelMonth)
    } else {
      hideErrorValid(errorMessageMonthValid, inputMonth, labelMonth)
    }
  }

  if(inputYear.value == '') {    
    showErrorEmpty(errorMessageYearEmpty, inputYear, labelYear)      
  } else {
    hideErrorEmpty(errorMessageYearEmpty, inputYear, labelYear) 
    
    if(inputYear.value.length < 4) {
      showMinimimFourNumbersError(errorMessageYearFourNumber, inputYear, labelYear)
    } else {
      hideMinimimFourNumbersError(errorMessageYearFourNumber, inputYear, labelYear)

      if(yearValidation(inputYear.value) == false) {
        showErrorValid(errorMessageYearValid, inputYear, labelYear)
      } else {
        hideErrorValid(errorMessageYearValid, inputYear, labelYear)
        
        if(fullDateValidation(inputDay.value, inputMonth.value, inputYear.value) == false) {
          showErrorValidDate(errorMessageDateValid, inputDay, inputMonth, inputYear, labelDay, labelMonth, labelYear)
        } else {
          hideErrorValidDate(errorMessageDateValid, inputDay, inputMonth, inputYear, labelDay, labelMonth, labelYear)

          calculateData(inputDay.value, inputMonth.value, inputYear.value);          
        }
      }
    }
  }    
}

function calculateData(day, month, year) {
  const today = moment();
  const reference = moment(`${year}-${month}-${day}`)
  const diff = today.diff(reference)
  const duration = moment.duration(diff)    

  resultDay.innerText = duration.days()
  resultMonth.innerText = duration.months()
  resultYear.innerText = duration.years()     
}

// Error validations
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

function showErrorValid(element, input, label) {  
  element.classList.remove('hidden')
  element.classList.add('block')
  input.classList.add('border-[var(--Light-red)]')
  label.classList.remove('text-[var(--Smokey-grey)]')
  label.classList.add('text-[var(--Light-red)]')
}

function hideErrorValid(element, input, label) {
  element.classList.remove('block')
  element.classList.add('hidden')
  input.classList.remove('border-[var(--Light-red)]')
  input.classList.add('border-[var(--Light-grey)]')
  label.classList.remove('text-[var(--Light-red)]')
  label.classList.add('text-[var(--Smokey-grey)]')
}

function showMinimimFourNumbersError(element, input, label) {
  element.classList.remove('hidden')
  element.classList.add('block')
  input.classList.add('border-[var(--Light-red)]')
  label.classList.remove('text-[var(--Smokey-grey)]')
  label.classList.add('text-[var(--Light-red)]')
}

function hideMinimimFourNumbersError(element, input, label) {
  element.classList.remove('block')
  element.classList.add('hidden')
  input.classList.remove('border-[var(--Light-red)]')
  input.classList.add('border-[var(--Light-grey)]')
  label.classList.remove('text-[var(--Light-red)]')
  label.classList.add('text-[var(--Smokey-grey)]')
}

function showErrorValidDate(element, inputDay, inputMonth, inputYear, labelDay, labelMonth, labelYear) {
  element.classList.remove('hidden')
  element.classList.add('block')  
  inputDay.classList.add('border-[var(--Light-red)]')
  inputMonth.classList.add('border-[var(--Light-red)]')
  inputYear.classList.add('border-[var(--Light-red)]')
  labelDay.classList.remove('text-[var(--Smokey-grey)]')
  labelMonth.classList.remove('text-[var(--Smokey-grey)]')
  labelYear.classList.remove('text-[var(--Smokey-grey)]')
  labelDay.classList.add('text-[var(--Light-red)]')
  labelMonth.classList.add('text-[var(--Light-red)]')
  labelYear.classList.add('text-[var(--Light-red)]')
}

function hideErrorValidDate(element, inputDay, inputMonth, inputYear, labelDay, labelMonth, labelYear) {
  element.classList.remove('block')
  element.classList.add('hidden')  
  inputDay.classList.remove('border-[var(--Light-red)]')
  inputMonth.classList.remove('border-[var(--Light-red)]')
  inputYear.classList.remove('border-[var(--Light-red)]')
  inputDay.classList.add('border-[var(--Light-grey)]')
  inputMonth.classList.add('border-[var(--Light-grey)]')
  inputYear.classList.add('border-[var(--Light-grey)]')
  labelDay.classList.remove('text-[var(--Light-red)]')
  labelMonth.classList.remove('text-[var(--Light-red)]')
  labelYear.classList.remove('text-[var(--Light-red)]')
  labelDay.classList.add('text-[var(--Smokey-grey)]')
  labelMonth.classList.add('text-[var(--Smokey-grey)]')
  labelYear.classList.add('text-[var(--Smokey-grey)]')
}

// Date validation
function dayValidation(day) {
  if(day > 31) {
    return false
  } else {
    return true
  }
}

function monthValidation(month) {  
  if(month > 12) {
    return false
  } else {
    return true
  }
}

function yearValidation(year) {     
  if(year > date.getFullYear()) {
    return false
  } else {
    return true
  }
}

function fullDateValidation(day, month, year) {  
  const fullDate = new Date(year, month-1, day)
  
  if(fullDate.getDate() == day && fullDate.getMonth() == month-1 && fullDate.getFullYear() == year) {
    return true
  } else {   
    return false
  }
}