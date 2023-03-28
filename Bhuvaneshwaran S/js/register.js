$(document).on('click', '#btn', function(e) {
    e.preventDefault();

    var username = $('#username').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var password2 = $('#password2').val();
    var atpos = email.indexOf('@');
    var dotpos = email.lastIndexOf('.com');
    var b = false;

    if (username == '') {
        document.getElementById("uerror").innerHTML = 'please enter username !!';
        b = false;
    } else {
        document.getElementById("uerror").innerHTML = '';
        b = true;
    }

    if (email == '') {
        document.getElementById("eerror").innerHTML = 'please enter email address !!';
        b = false;
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        document.getElementById("eerror").innerHTML = 'please enter valid email address !!';
        b = false;
    } else {
        document.getElementById("eerror").innerHTML = '';
        b = true;
    }

    if (password == '') {
        document.getElementById("perror").innerHTML = 'please enter password !!';
        b = false;
    } else if (password.length < 6) {
        document.getElementById("perror").innerHTML = 'password must be 6 !!';
        b = false;
    } else {
        document.getElementById("perror").innerHTML = '';
        b = true;
    }

    if (password2 == '') {
        document.getElementById("pcerror").innerHTML = 'please enter confirm password !!';
        b = false;
    } else if (password2 != password) {
        document.getElementById("pcerror").innerHTML = 'password and confirm password not equal!!';
        b = false;
    } else {
        document.getElementById("pcerror").innerHTML = '';
        b = true;
    }

    if (b) {
        // Create an object with the user's information
        var userInfo = {
            username: username,
            email: email,
            password: password
        };
        
        // Retrieve the existing user data from local storage
        var users = JSON.parse(localStorage.getItem('users')) || [];
    
        // Add the new user information to the users array
        users.push(userInfo);
    
        // Convert the users array to a JSON string and store it in local storage
        localStorage.setItem('users', JSON.stringify(users));
    
        // Send the user's information to the server
        $.ajax({
            url: './php/register.php',
            type: 'post',
            data: {
                nusername: username,
                nemail: email,
                npassword: password
            },
            success: function(response) {
                if (response.includes('success')) {
                    //alert('Data inserted successfully!');
                    window.location.href="login.html";
                    alert("Data inserted successfully!");
                } else {
                    alert('Data not inserted!');
                }
            }
        });
    }
    
});
