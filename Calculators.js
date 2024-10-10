// Simple Calculator
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let multi = document.getElementById('multi')
let divide = document.getElementById('divide')
let input1 = document.getElementById('num1')
let input2 = document.getElementById('num2')
let sum = document.getElementById('output')
plus.addEventListener('click', function () {
    let numb1 = document.getElementById('num1').value;
    let numb2 = document.getElementById('num2').value;
    numb1 = Number(numb1);
    numb2 = Number(numb2);
    let calculate = numb1 + numb2;
    document.getElementById('symbol').innerHTML = '+'
    if (isNaN(numb1) || isNaN(numb2)) {
        document.getElementById('num1').textContent = "Input a number";
    }
    else {
        sum.textContent = `= ${calculate}`;
    }
})

minus.addEventListener('click', function () {
    let numb1 = document.getElementById('num1').value;
    let numb2 = document.getElementById('num2').value;
    numb1 = Number(numb1);
    numb2 = Number(numb2);
    let calculate = numb1 - numb2;
    document.getElementById('symbol').innerHTML = '-'
    if (isNaN(numb1) || isNaN(numb2)) {
        document.getElementById('num1').textContent = "Input a number";
    }
    else {
        sum.textContent = `= ${calculate}`;
    }
})

multi.addEventListener('click', function () {
    let numb1 = document.getElementById('num1').value;
    let numb2 = document.getElementById('num2').value;
    numb1 = Number(numb1);
    numb2 = Number(numb2);
    let calculate = numb1 * numb2;
    document.getElementById('symbol').innerHTML = '*'
    if (isNaN(numb1) || isNaN(numb2)) {
        document.getElementById('num1').textContent = "Input a number";
    }
    else {
        sum.textContent = `= ${calculate}`;
    }
})

divide.addEventListener('click', function () {
    let numb1 = document.getElementById('num1').value;
    let numb2 = document.getElementById('num2').value;
    numb1 = Number(numb1);
    numb2 = Number(numb2);
    let calculate = numb1 / numb2;
    document.getElementById('symbol').innerHTML = '/'
    if (isNaN(numb1) || isNaN(numb2)) {
        document.getElementById('num1').textContent = "Input a number";
    }
    else {
        sum.textContent = `= ${calculate}`;
    }
})




 
 // Investment Calculator
 let calculate = addEventListener('click', function () {
    let investedAmount = document.getElementById('amount').value;
    investedAmount = Number(investedAmount);
    let Duration = document.getElementById('duration').value;
    let ROIPerMonths = document.getElementById('ROI').innerHTML;
    let totalROI = Duration * [(15 / 100) * (investedAmount)];
    totalROI = Number(totalROI);
    let totalWithdrawal = totalROI + investedAmount;
    totalWithdrawal = Number(totalWithdrawal);

    if (isNaN(investedAmount) || (investedAmount == '')) {
        document.getElementById('result').textContent = "Please enter values";
    }
    else if(Duration == 1){
        document.getElementById('result').textContent = `You will withdraw #${totalWithdrawal} if you invest 
        ${investedAmount} in our business for ${Duration} month`
    }
  else{
      document.getElementById('result').textContent = `You will withdraw #${totalWithdrawal} if you invest 
            ${investedAmount} in our business for ${Duration} months`
  }
})

// Loan Calculator
let calculateLoan = addEventListener('click', function () {
    let loanAmount = document.getElementById('loan').value;
    loanAmount = Number(loanAmount);
    let Duration = document.getElementById('duration').value;
    let interestPerMonths = document.getElementById('interest').innerHTML;
    let totalAmountToPay = [(20 / 100) + loanAmount];
    totalAmountToPay = Number(totalAmountToPay)
    let monthlyRepayment = (totalAmountToPay / Duration);
    monthlyRepayment = Number(monthlyRepayment);
    if (isNaN(loanAmount) || (loanAmount == '')) {
        document.getElementById('solution').textContent = "Please enter values";
    }
    else if (Duration == 1) {
        document.getElementById('solution').textContent = `Your repayment is ${monthlyRepayment} per month if you 
        borrow ${loanAmount} for ${Duration} month`
    }
    else {
        document.getElementById('solution').textContent = `Your repayment is ${monthlyRepayment} per month if you 
        borrow ${loanAmount} for ${Duration} months`
    }
})