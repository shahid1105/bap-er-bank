document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';


    if(newWithdrawAmount <= 0){
        alert('Please provide a valid number');
        return;
    }
    else if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    
    
    const totalMainBalance = document.getElementById('main-balance');
    const previousMainBalanceString = totalMainBalance.innerText;
    const previousMainBalance = parseFloat(previousMainBalanceString);

    const currentMainBalance = previousMainBalance - newWithdrawAmount;

    if(newWithdrawAmount > previousMainBalance){
        alert('insufficient balance');
        return;
    }
    withdrawTotalElement.innerText = currentWithdrawTotal;

    totalMainBalance.innerText = currentMainBalance;

})