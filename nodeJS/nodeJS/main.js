document.getElementById('main-form').addEventListener('submit', checkForm);

function checkForm (event) {
    event.preventDefault(); 
    const el = document.getElementById("main-form");

    var name = el.name.value;
    var password = el.password.value;
    var repassword = el.repass.value;
    var state = el.state.value;
    var email = el.email.value;
    var fail = "";

    const dateForm = {
        name,
        password
    };
    
    localStorage.setItem("dateForm", JSON.stringify(dateForm));
    
    console.log("Name: " + name + ", Password: " + password + ", Re-entered Password: " + repassword + ", State: " + state);

    if (name == ""|| password == "" || repassword == "" || state == "") {
        fail = "Incomplete data";
    }else if (password != repassword) {
        fail = "Passwords do no match";
    }else if (name.length < 1 || name.length >= 50) {
        fail = "Name must be between 1 and 50 characters";
    }else if  (email.length < 1 || email.length >= 50) {
        fail = "Email must be between 1 and 50 characters";
    }

    if (fail !="") {
        document.getElementById("error").innerHTML = fail;
    }else {
        alert("Form submited succesufully!");
        window.location.href = "login"
    }

}


document.getElementById("main-login-form").addEventListener("submit", loginFrom);

function loginFrom(event){

    event.preventDefault();
    const el= document.getElementById("main-login-form");

    let name = el.name.value;
    let password = el.password.value;
    let fail = "";
    const dateForm = JSON.parse(localStorage.getItem("dateForm"));

    // if (!dateForm) {
    //     fail = "No user data found. Please register first.";
    // }else if (name == "" || password == "") {
    //     fail = "Incomplete data";
    // } else if (name.length < 1 ||password.length < 1 ) {
    //     fail = "Complitati numele si parola";
    // } else if (name != dateForm.name || password != dateForm.password) {
    //     fail = "Invalid username or password";
    // } 
        if (name == ""|| password == "") {
        fail = "Incomplete data";
    }else if (name.length < 1 || name.length >= 50) {
        fail = "Name must be between 1 and 50 characters";
    }else if  (password.length < 1 || password.length >= 50) {
        fail = "Email must be between 1 and 50 characters";
    }

    if (fail != "") {
        document.getElementById("error").innerHTML = fail;
    } else {
        alert("Form submitted successfully!");
        window.location.href = "https://www.youtube.com/watch?v=AB7dxN2Zr8M&list=RDAB7dxN2Zr8M&start_radio=1";
    }
} 