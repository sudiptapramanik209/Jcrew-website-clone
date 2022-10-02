const show=()=>{
    let x=document.getElementById("password");
    //console.log(x)
    if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
}

//--------------------sign_up------------------------//
let signup = JSON.parse(localStorage.getItem("signup")) || [];
const add_data=()=>{
  let name=document.getElementById("username").value;
  let password=document.getElementById("password").value;
  let country=document.getElementById("country").value;
if (
  name == "" ||
  password == "" ||
  country == ""
) {
  alert("Fill the form");
} else {
  let Email =name;
  let pas = password;
  let coun = country;
  let obj = {
    email: Email,
    password: pas,
    country: coun,
  };
  signup.push(obj);
  localStorage.setItem("signup", JSON.stringify(signup));
  window.location.href = "../index.html";
}
}
//console.log(signup);
//---------------------sign up page end------------------------//