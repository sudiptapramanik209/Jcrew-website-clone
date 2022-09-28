const show=()=>{
    let x=document.getElementById("password");
    //console.log(x)
    if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
}

const add_data=()=>{
    console.log("hiii")
}