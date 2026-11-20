document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted!");

    const lastname = document.getElementById("lastname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    // if (!lastname || !username || !email || !password) {
    //     alert("Please fill in all required fields.");
    //     return;
    // }

    // if (!bdate || bdate<18) {
    //     alert("You need to be 18")
    //     return;
    // }

    if (new Date(dob) > new Date().setFullYear(new Date().getFullYear() - 18)) {
        alert("You need to be 18")
        return;
    };
    
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    };
    
    const formData = {
        name:lastname,
        username:username,
        email:email,
        password:password
    };

    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'notification.json', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            //alert('Form submitted successfully.');
            notification = document.getElementById('notification');
            const response = JSON.parse(xhr.responseText);
            notification.textContent = response.notification;
            form = document.getElementById('myForm');
            form.reset();
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));
    /*when trying to use f-string, we have to use backticks instead of single quotes, and use ${} to insert variables into the string. */
    alert(`Success: ${username}, your form has been submitted.`);
});
