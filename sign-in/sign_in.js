//-------------Silder homepage----------------//

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  // let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  slides[slideIndex - 1].style.transition = "0.2s ease";
  // dots[slideIndex - 1].className += "active";
  // captionText.innerHTML = dots[slideIndex - 1].alt;
}

//-------------Silder homepage end----------------//

var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const show = () => {
  let x = document.getElementById("password");
  //console.log(x)
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
};

//-------------sign_in----------------//

let signupls = JSON.parse(localStorage.getItem("signup")) || [];

let flag = false;
const add = () => {
  let email = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  console.log(email, password);

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
      for (let i = 0; i < signupls.length; i++) {
        if (
          obj.Email === signupls[i].email &&
          obj.Password === signupls[i].password
        ) {
          flag = true;
          alert("Login Successfully Completed");
          localStorage.setItem("flag", JSON.stringify(flag));
          return (window.location.href = "../HomePage/index.html");
        } else {
          flag = false;
        }
      }
    }
  }
  if (flag === false) {
    alert("Invalid Data");
  }
};

//console.log(signupls)
