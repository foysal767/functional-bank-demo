document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositTotal = getTextElementById('deposit-total');
    const newDepositTotal = newDepositAmount + previousDepositTotal;
    setTextElementValueById('deposit-total', newDepositTotal);
    const previousTotal = getTextElementById('balance-total')
    const newBalanceTotal = previousTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})