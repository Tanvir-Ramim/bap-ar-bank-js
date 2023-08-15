document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField=document.getElementById('withdraw-field')
    const withdrawAmountString=withdrawField.value ;
    const withdrawAmount=parseFloat(withdrawAmountString)
    const withdrawTotal =document.getElementById('withdraw-total')
    const withdrawTotalString=withdrawTotal.innerText
    const withdrawTotalNum=parseFloat(withdrawTotalString)
    const newWithdrawTotal=withdrawAmount+withdrawTotalNum
    withdrawTotal.innerText=newWithdrawTotal
    
    const balanceTotalEle=document.getElementById('balance-total')
    const previousBalanceTotalString=balanceTotalEle.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString)
    

    const currentBalanceTotal=previousBalanceTotal-withdrawAmount
    balanceTotalEle.innerText=currentBalanceTotal
    

    withdrawField.value=""
})