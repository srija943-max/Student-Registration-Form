function validateForm() {\
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") 
{
        alert("All fields are required!");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }
    let phone=document.getElementByld(phone").value;
    if(phone.length!==10)
    {
	alert("phone number must be 10 digits");
	return false;
    }


    alert("Form submitted successfully!");
    return true;
}