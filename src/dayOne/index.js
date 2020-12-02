import filereader from '../utils/filereader.js';


const inputArray = filereader('input.txt').join('').split('\n').map(Number);

/**********      PART 1     **********/
//time&space is o(n)
function updateExpenseReport(expensesArray, n = 2020) {
  if(!expensesArray) throw Error('Give me the DATA!')
  let expensesSet = new Set()

  for(let i=0;i<expensesArray.length;i++){
    if(expensesSet.has(expensesArray[i])){
      if(expensesArray[i] === n/2) return n*n
    } else if(expensesSet.has(n-expensesArray[i])){
      return expensesArray[i] * (n-expensesArray[i])
    } else {
      expensesSet.add(expensesArray[i])
    }
  }
  return "no dice"
}

console.log(updateExpenseReport(inputArray, 2020))


/**********      PART 2     **********/
//space o(n), time o(n^2)
function updateExpenseReportByThree(expensesArray, n = 2020) {
  if(!expensesArray) throw Error('Give me the DATA!')
  let expensesSet = new Set()

  for(let i=0;i<expensesArray.length;i++){
    if(expensesSet.has(expensesArray[i])){
      if(expensesArray[i] === n/2) return n*n
    } else {
      expensesSet.add(expensesArray[i])
    }
  }

  for(let i=1; i<expensesArray.length; i++){
    for(let j=2; j<expensesArray.length; j++){
      if(expensesSet.has(n-(expensesArray[i] + expensesArray[j]))){
        console.log(expensesArray[i], expensesArray[j], n-(expensesArray[i] + expensesArray[j]))
        return expensesArray[i] * expensesArray[j] * (n-(expensesArray[i] + expensesArray[j]))
      }
    }
  }
  return "no dice"
}

console.log(updateExpenseReportByThree(inputArray, 2020))