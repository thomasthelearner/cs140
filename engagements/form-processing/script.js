document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted!");

    const fullname = document.getElementById("personname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const bdate = document.getElementById("bdate").value;
    const password = document.getElementById("password").value;

    if (!fullname || !username || !email || !bdate || !password) {
        alert("Please fill in all required fields.");
        return;
    }

    if (!bdate || bdate<18) {
        alert("You need to be 18")
        return;
    }

    const formData = {
        name:fullname,
        username:username,
        email:email,
        bdate:bdate,
        password:password
    };

    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'submit.json', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            //alert('Form submitted successfully.');
            message = document.getElementById('message');
            const response = JSON.parse(xhr.responseText);
            message.textContent = response.message;
            form = document.getElementById('myForm');
            form.reset();
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));
    /*when trying to use f-string, we have to use backticks instead of single quotes, and use ${} to insert variables into the string. */
    alert(`Success: ${fullname}, your form has been submitted.`);
});
