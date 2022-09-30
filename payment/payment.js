let form=document.getElementById("form")
form.addEventListener('submit',function(){
    submit1(event)
})
    const submit1=(event)=>{
        event.preventDefault()
        let a=document.getElementById("fname").value;
        let b=document.getElementById("email").value;
        let c=document.getElementById("adr").value;
        let d=document.getElementById("city").value;
        let e=document.getElementById("state").value;
        let f=document.getElementById("zip").value;
        let g=document.getElementById("cname").value;
        let h=document.getElementById("ccnum").value;
        let i=document.getElementById("expmonth").value;
        let j=document.getElementById("expyear").value;
        let k=document.getElementById("cvv").value;
        if(a==""||b==""||c==""||d==""||e==""||f==""||g==""||h==""||i==""||j==""||k==""){
            alert("fillup the form")
        }else{
            alert("payment is sucessfull")
            alert("your order placed")

        }


        

    }

    
