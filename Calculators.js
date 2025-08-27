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
let calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function () {
    let investedAmount = Number(document.getElementById('amount').value);
    let Duration = Number(document.getElementById('duration').value);
    let ROIPerMonths = Number(document.getElementById('ROI').innerHTML);
    let totalROI = Number(Duration * [(15 / 100) * (investedAmount)]);
    let totalWithdrawal = Number(totalROI + investedAmount);
    if (isNaN(investedAmount) || (investedAmount == '')) {
        document.getElementById('result').textContent = "Please enter values";
    }
    else if (Duration == 1) {
        document.getElementById('result').textContent = `You will withdraw #${totalWithdrawal} if you invest 
        ${investedAmount} in our business for ${Duration} month`
    }
    else {
        document.getElementById('result').textContent = `You will withdraw #${totalWithdrawal} if you invest 
            ${investedAmount} in our business for ${Duration} months`
    }
})


// Loan Calculator
let calculateLoan = document.getElementById('calculateL');
calculateLoan.addEventListener('click', function () {
    let loanAmount = Number(document.getElementById('loan').value);
    let Duration = Number(document.getElementById('durations').value);
    let interestPerMonths = 20;
    let totalAmountToPay = Number(loanAmount + ((interestPerMonths / 100) * loanAmount * Duration));
    let monthlyRepayment = (totalAmountToPay / Duration).toFixed(2);
    if (isNaN(loanAmount) || (loanAmount == '')) {
        document.getElementById('solution').textContent = "Please enter valid values";
    }
    else if (Duration == 1) {
        document.getElementById('solution').textContent = `Your repayment is ₦${monthlyRepayment} per month if 
        you borrow ₦${loanAmount} for ${Duration} month`
    } else {
        document.getElementById('solution').textContent = `Your repayment is ₦${monthlyRepayment} per month if 
        you borrow ₦${loanAmount} for ${Duration} months`
    }
});

// Retirement Calculator
function calculateRetirement() {
    let userName = document.getElementById('name').value;
    let yearOfBirth = document.getElementById('birthYear').value;
    let retirementAge = 65;
    let currentYear = new Date().getFullYear();
    let userAge = currentYear - Number(yearOfBirth);
    let yearsLeft = retirementAge - userAge;

    let result = document.getElementById('answer');

    if (yearsLeft <= 0) {
        result.textContent = `${userName}, you are old enough to retire.`;
    } else if (yearsLeft === 1) {
        result.textContent = `${userName}, you have ${yearsLeft} year left in service.`;
    } else {
        result.textContent = `${userName}, you have ${yearsLeft} years left in service.`;
    }
}



