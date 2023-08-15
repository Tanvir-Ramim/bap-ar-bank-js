document.getElementById('btn-deposit').addEventListener('click',function(){
    const deposit =document.getElementById('deposit-field');
    const depositAmount=deposit.value;
    const depositTotalEle=document.getElementById('deposit-total')
    const depositTotal=depositTotalEle.innerText;
    depositTotalEle.innerText=depositAmount
})