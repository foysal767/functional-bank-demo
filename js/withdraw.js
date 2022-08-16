document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementById('withdraw-total');
    const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousTotal = getTextElementById('balance-total')
    const newBalanceTotal = previousTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})