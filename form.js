function validationform()
{
    let name=document.forms["myform"]["Full Name"].value;
    let email=document.forms["myform"]["Email"].value;
    let number=document.forms["myform"]["Phone Number"].value;

    if(name=""){
        alert("Name must be filled");
        return false;
    }
    var emailpattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!emailpattern.test(email))
        {
        alert("Please enter the valid and strong email");
        return false;
    }
    var phone=/^[0-9]{10}$/;
    if(!phone.test(number))
        {
        alert("Please enter the valid phone number");
        return false;
    }
    

    
    alert("Form submitted successfully");

}