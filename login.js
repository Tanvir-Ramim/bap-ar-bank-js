document.getElementById('btn-submit').addEventListener('click',function(){
   const emailField=document.getElementById('user-email')
   const emailValue = emailField.value;

    //   password
    const pass=document.getElementById('user-pass')
    const passValue=pass.value

    if(emailValue=='ramimhossan14@gmail.com' && passValue=='ramimpass'){
        window.location.href='bank.html'
    }
    else{
        alert('Invalid Password')
    }
})