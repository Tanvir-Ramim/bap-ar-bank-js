document.getElementById('btn-deposit').addEventListener('click',function(){
    const deposit =document.getElementById('deposit-field');
    const newDepositAmountString=deposit.value;
    const newDepositAmount=parseFloat(newDepositAmountString)
    const depositTotalEle=document.getElementById('deposit-total')
    const previousDepositTotalString=depositTotalEle.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalString)

    const currentDepositTotal=previousDepositTotal+newDepositAmount
    depositTotalEle.innerText=currentDepositTotal;

    // new
    const balanceTotalEle=document.getElementById('balance-total')
    const previousBalanceTotalString=balanceTotalEle.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString)
    

    const currentBalanceTotal=previousBalanceTotal+newDepositAmount
    balanceTotalEle.innerText=currentBalanceTotal
   
    deposit.value=""
})