function validate()
{
        x = document.getElementById("email").value;
        y = document.getElementById("passwd").value;

        if (x == "") {
          alert("Name must be filled out");
          return false;
        }
        if(x == "a@a.com" && y == "admin")
        {
          alert("Logged In Successfully")
        document.location = '/home.html'; 
        }
        else
        {
          alert("You have entered an Incorrect Email or Password")
        }
      }
