//******** JS FOR SIGNIN FORM ********
let exist=false;
openForm1();
function openForm1() {
    document.getElementById("myForm1").style.display = "block";
  }

  function closeForm1() {
    document.getElementById("myForm1").style.display = "none";
  }

  function openForm2() {
      event.preventDefault();
    
    let mobile1=document.querySelector("#mobile").value;
    let signuparr=JSON.parse(localStorage.getItem("signupkey")) || [];
    exist=false;
    signuparr.map(function(el){
        if(el.mobile==mobile1){
            //alert("Found no.");
            exist=true;
        }
    })
    if(!exist){

        //alert("Not found!");
    }
    document.getElementById("myForm1").style.display = "none";
    document.getElementById("myForm2").style.display = "block";
  }
  
  function closeForm2() {
    document.getElementById("myForm2").style.display = "none";
    document.getElementById("myForm1").style.display = "block";
  }
  function closeForm3a() {
    document.getElementById("myForm3").style.display = "none";
    document.getElementById("myForm2").style.display = "block";
  }
  function closeForm3b() {
    document.getElementById("myForm3").style.display = "none";
  }

  function openForm3() {
    event.preventDefault();
let otp1=document.querySelector("#otp").value;
if(otp1=="1234"){
    if(exist){
        alert("You are Signed In!");
        document.getElementById("myForm2").style.display = "none";
        history.back();
    }else{
        document.getElementById("myForm2").style.display = "none";
        document.getElementById("myForm3").style.display = "block";
    }
}else{
    //alert("Enter a valid OTP");
    let div1=document.createElement("div");
    div1.setAttribute("class","alert");
    div1.setAttribute("class","alert-dark");
    div1.style.padding="20px";
    div1.role="alert";
    div1.innerText="Please enter a valid OTP";
    document.querySelector("#fc-2").append(div1);

    
}

  }

 function addDetail(){
    event.preventDefault();
     let name1=document.querySelector("#name").value;
     let mobile1=document.querySelector("#mobile").value;
     let email1=document.querySelector("#email").value;
     let gender1=document.querySelector("#gender").value;

     let obj={
         name:name1,
         mobile:mobile1,
         email:email1,
         gender:gender1,
     }
     let signuparr=JSON.parse(localStorage.getItem("signupkey")) || [];
     signuparr.push(obj);
     localStorage.setItem("signupkey",JSON.stringify(signuparr));
     alert("You have been registered & Signed In!");
     //closeForm3b();
     history.back();
     
 }