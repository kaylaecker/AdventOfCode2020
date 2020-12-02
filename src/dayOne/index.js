import filereader from '../utils/filereader.js';


const inputArray = filereader('input.txt').join('').split('\n').map(Number);

function updateExpenseReport(expensesArray, n = 2020) {
  if(!expensesArray) throw Error('Give me the DATA!')
  let expensesSet = new Set()

  for(let i=0;i<expensesArray.length;i++){
    if(expensesSet.has(expensesArray[i])){
      if(expensesArray[i] === n/2) return n*n
    } else {
      expensesSet.add(expensesArray[i])
    }
  }
  
  for(let i=0; i<expensesArray.length;i++){
    if(expensesSet.has(n-expensesArray[i])){
      return expensesArray[i] * (n-expensesArray[i])
    }
  }
  return "no dice"
}

console.log(updateExpenseReport(inputArray, 2020))