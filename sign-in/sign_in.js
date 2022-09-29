const show=()=>{
    let x=document.getElementById("password");
    //console.log(x)
    if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
}


//-------------sign_in----------------//

let signupls = JSON.parse(localStorage.getItem("signup")) || [];

let flag = false;
const add = () =>{
  let email=document.getElementById("username").value;
  let password=document.getElementById("password").value;
console.log(email,password)
  
  if (email == "" || password == "") {
    alert("Fill the form");
  } else {
    //let email=document.getElementById("username").value;
    //let password=document.getElementById("password").value;
    
    let obj = {
      Email: email,
      Password: password,
    };

    if (signupls.length <= 0) {
      alert("User Data is not found please Register");
      window.location.href = "../sign_up/sign_up.html";
    } else if (signupls.length >= 1) {
      for(let i=0;i<signupls.length;i++) {
        if (obj.Email === signupls[i].email && obj.Password === signupls[i].password) {
          flag = true;
          alert("Login Successfully Completed");
          localStorage.setItem("flag", JSON.stringify(flag));
          return window.location.href = "#";
        } else {
          flag=false;
        }
      }
    }
  }
  if(flag===false){
    alert("Invalid Data")
  }
}

//console.log(signupls)