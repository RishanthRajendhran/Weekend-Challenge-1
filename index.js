var inputs = Array.from(document.getElementsByTagName("input"));
var errBoxes = Array.from(document.getElementsByClassName("errBox"));
inputs.forEach(input => {
    console.log(input.attributes.name);
    input.onblur = () => {
        var i = inputs.indexOf(input);
        if(input.attributes.name.value == "firstName" || input.attributes.name.value == "lastName") {
            if(input.value.length ==0)
            {
                errBoxes[i].style.display = "block";
                errBoxes[i].innerHTML = "<h6 class='errMess'>"+ input.attributes.name.value + " cannot be empty.</h6>";
            } else if(input.value.length > 10)
            {
                errBoxes[i].style.display = "block";
                errBoxes[i].innerHTML = "<h6 class='errMess'>"+ input.attributes.name.value + " cannot be longer than 10 characters.</h6>";
            } else {
                var patt = new RegExp("^[a-zA-Z]{1,10}$");
                if(!patt.test(input.value)) {
                    patt = new RegExp("[0-9]{1,}");
                    if(patt.test(input.value)) {
                        errBoxes[i].style.display = "block";
                        errBoxes[i].innerHTML = "<h6 class='errMess'>"+ input.attributes.name.value + " cannot contain a number.</h6>";
                    } else {
                        errBoxes[i].style.display = "block";
                        errBoxes[i].innerHTML = "<h6 class='errMess'>"+ input.attributes.name.value + " cannot contain any special character.</h6>";
                    }
                } else {
                    errBoxes[i].style.display = "none";
                }
            }
        } else if(input.attributes.name.value == "emailAddress") {
            var patt = new RegExp("^([a-zA-Z0-9_]{1,})@([a-zA-Z]{1,}).([a-zA-Z]{1,3})$");
            if(!patt.test(input.value)) {
                if(/[^@]/.test(input.value)) {
                    errBoxes[i].style.display = "block";
                    errBoxes[i].innerHTML = "<h6 class='errMess'>Email ID should have an '@' symbol.</h6>";
                } else if(/[^.]/.test(input.value)) {
                    errBoxes[i].style.display = "block";
                    errBoxes[i].innerHTML = "<h6 class='errMess'>Email ID should have an '.' symbol.</h6>";
                } else {
                    errBoxes[i].style.display = "block";
                    errBoxes[i].innerHTML = "<h6 class='errMess'>Invalid email address.</h6>";
                } 
            } else {
                errBoxes[i].style.display = "none";
            }
        } else if(input.attributes.name.value == "password") {
            if(input.value.length ==0)
            {
                errBoxes[i].style.display = "block";
                errBoxes[i].innerHTML = "<h6 class='errMess'>"+ input.attributes.name.value + " cannot be empty.</h6>";
            } else if(input.value.length > 10)
            {
                errBoxes[i].style.display = "block";
                errBoxes[i].innerHTML = "<h6 class='errMess'>"+ input.attributes.name.value + " cannot be longer than 10 characters.</h6>";
            } else {
                var patt = new RegExp("[a-z]*[A-Z]{1,}[0-9]{1,}");
                if(!patt.test(input.value)) {
                    if(/[^A-Z]/.test(input.value)) {
                        errBoxes[i].style.display = "block";
                        errBoxes[i].innerHTML = "<h6 class='errMess'>Password should have atleast one uppercase character.</h6>";
                    } else if(/[^0-9]/.test(input.value)) {
                        alert("");
                        errBoxes[i].innerHTML = "<h6 class='errMess'>Password should have atleast one number.</h6>";
                    } 
                } else {
                    errBoxes[i].style.display = "none";
                }
            }
        }
    };
});