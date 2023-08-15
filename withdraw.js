document.getElementById('btn-withdraw').addEventListener('click',function(){
    
    const withdrawField=document.getElementById('withdraw-field')
    const withdrawAmountString=withdrawField.value ; 
    const withdrawAmount=parseFloat(withdrawAmountString)
    withdrawField.value=""
    if(isNaN(withdrawAmount)){
        alert('Please provide a valid Number')
        return;
    }
    const withdrawTotal =document.getElementById('withdraw-total')
    const withdrawTotalString=withdrawTotal.innerText
    const withdrawTotalNum=parseFloat(withdrawTotalString)
   
    
    const balanceTotalEle=document.getElementById('balance-total')
    const previousBalanceTotalString=balanceTotalEle.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString)

    
    if(withdrawAmount>previousBalanceTotal){
        alert("Bap ar bank a taka nai")
        return ;
    }
    const newWithdrawTotal=withdrawAmount+withdrawTotalNum
    withdrawTotal.innerText=newWithdrawTotal
         
    const currentBalanceTotal=previousBalanceTotal-withdrawAmount
    balanceTotalEle.innerText=currentBalanceTotal
    
})