
function submit() {
    var name = document.getElementById('name').value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("mobile").value;
    var sms = document.getElementById("sms").value;
    var list = document.getElementById('list');
    var strUser = list.options[list.selectedIndex].value;    
    var strUser1 = list.options[list.selectedIndex].text;
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!name) {
        document.getElementById("demo").innerHTML = "empty field";
    }
    else if ((name.length < 2) || (name.length > 20)) {
        document.getElementById("demo").innerHTML = "user name should be between 2 and 20 characters";
    }
    else if (!isNaN(name)) {
        document.getElementById("demo").innerHTML = "only characters allowed";
    } 
    else {
        document.getElementById("demo").innerHTML = "";
        document.getElementById('name').value="";
    }
    if (!email) {
        document.getElementById("mail").innerHTML = "empty field";
    }
    else if(!email.match(emailPattern)){
        document.getElementById("mail").innerHTML = "invalid field";
    }
    else {
        document.getElementById("mail").innerHTML = "";
        document.getElementById('email').value="";
    }
    if (!phone) {
        document.getElementById("mobile_no").innerHTML = "empty field";
      
    }
    else if (isNaN(phone)) {
        document.getElementById("mobile_no").innerHTML = "number should only be in digits";
    }
    else if (phone.length < 10) {
        document.getElementById("mobile_no").innerHTML = "number should consists of 10 digits";
    }
    else {
        document.getElementById("mobile_no").innerHTML = "";
        document.getElementById('mobile').value="";
    }
    if (!sms) {
        document.getElementById("sms_no").innerHTML = "empty field";
    }
    else if (isNaN(sms)) {
        document.getElementById("sms_no").innerHTML = "number should only be in digits";
    }
    else if (sms.length > 5) {
        document.getElementById("sms_no").innerHTML = "number should consists of character";
    }
    else {
        document.getElementById("sms_no").innerHTML = "";
        document.getElementById('sms').value="";
    }
    if(strUser==0)
    {
    document.getElementById('list_item').innerHTML="Please select a time";
    }
    else{
        document.getElementById('list_item').innerHTML="";
        document.getElementById("list").value="";
    }
    if (!name || !phone || !sms || !email) {
        return;
    }
     else {
        alert("Form Submitted successfully");
    }
}




















