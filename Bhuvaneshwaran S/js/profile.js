
 function calculateAge() {
        const dobElement = document.getElementById("dob");
        const ageElement = document.getElementById("age");
      
        const dobValue = new Date(dobElement.value);
        const today = new Date();
      
        let age = today.getFullYear() - dobValue.getFullYear();
        const monthDiff = today.getMonth() - dobValue.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobValue.getDate())) {
            age--;
        }
      
        ageElement.value = age;
      }
    
    
     