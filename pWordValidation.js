
function getMessage(){
    let userName = document.getElementById('uName').value;
    let passWord = document.getElementById('pWord').value;
    //alert("hello Validation" + passWord);

    let regEx = /[a-zA-Z \-]{8}/;

    if(regEx.test){

        document.getElementById('pMsg').innerHTML="Login Successfully"
    }
}


 document.getElementById('btnSignIn').addEventListener("click",getMessage);