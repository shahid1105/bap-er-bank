//step-1: add even listener to the deposit btn 
document.getElementById('btn-deposit').addEventListener('click', function (){
    // step-2: get the deposit amount from the deposit input field
     // always remember to use .value to get text from input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-7: deposite field clear
    depositField.value = '';

    
    if(isNaN(newDepositAmount)){
        alert('Please provide a valid number')
        return;
    }


    // step-3: get the current deposit amount
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    
    // step-4: add number total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    // step-5: add number main balance
    const totalMainBalance = document.getElementById('main-balance');
    const previousMainBalanceString = totalMainBalance.innerText;
    const previousMainBalance = parseFloat(previousMainBalanceString);


    const currentMainBalance = previousMainBalance + newDepositAmount;
    
    // step-6: calculate balance 
    totalMainBalance.innerText = currentMainBalance;
})