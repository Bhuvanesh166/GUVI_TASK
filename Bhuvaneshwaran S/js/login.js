$(document).on('click','#btn',function(e){
        
  e.preventDefault();
          
  var email = $('#email').val();
  var password = $('#password').val();
  var atpos = email.indexOf('@');
  var dotpos = email.lastIndexOf('.com');
  var b = false;
  
  if(email == ''){ 
      document.getElementById("eerror").innerHTML = 'please enter email address !!'; 
      b = false;   
  }
  else if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length){ //check valid email format
      document.getElementById("eerror").innerHTML = 'please enter  valid email address !!'; 
      b = false;   
  }
  else{
      document.getElementById("eerror").innerHTML ='';
      b = true;   
  }

  if(password == ''){ //check password not empty
      document.getElementById("perror").innerHTML ='please enter password !!'; 
      b = false;   
  }
  else if(password.length < 6){ //check password value length six 
      document.getElementById("perror").innerHTML ='password must be 6 !!';
      b = false;   
  }
  else{
      document.getElementById("perror").innerHTML ='';
      b = true;   
  } 

  if(b){
      $.ajax({
          type: "POST",
          url: "./php/login.php",
          data: {
              email: email,
                password: password
          },
          success: function(response){
              if(response.includes('valid')){
                // alert('Invalid password!');
                window.location.href='./html/profile.html';
              }
              if(response.includes('invalid')){
                  // do something with the response if needed
                  alert('Invalid password!');
              }
          }
      });
  }   
});
