//******** JS FOR SIGNIN FORM ********
let exist=false;
cartindi();
loginindi();
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
        //alert("You are already registered!");
        closeForm3b();
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
     alert("You have been registered!");
     closeForm3b();
 }


signInfunc();
 // CART ICON FUNCTION

function cartindi(){
    let icon=document.querySelector("#cartIcon-no");
    let cartarr=JSON.parse(localStorage.getItem("cartkey"));
    let l=cartarr.length;
    if(l>0){
        icon.innerText=l;
    }else{
        icon.innerText="";
    }
}

function cartindiRem(){
    let icon=document.querySelector("#cartIcon-no");
    icon.innerText="";
    
}
// LOGIN ICON FUNCTION
function loginindi() {
let icon=document.querySelector("#loginIcon");
    icon.style.color="#34eb37";

}
function loginindiRem() {
    let icon=document.querySelector("#loginIcon");
    icon.style.color="black";

    }
//*********** */ SIGNIN FUNCTION
function signInfunc(){
    let signin=localStorage.getItem("signinkey");
    if(signin=="true"){
        cartindi();
        loginindi();
        let login=document.querySelector("#loginIcon-id");
        login.addEventListener("mouseover",function(){
            let login2=document.querySelector("#login-drop-id");
            login2.style.display="block";
           
        })
        login.addEventListener("mouseleave",function(){
            let login2=document.querySelector("#login-drop-id");
            login2.style.display="none";
           
        })
        
    }else{
        cartindiRem();
        loginindiRem();
        let login=document.querySelector("#loginIcon-id");
        login.addEventListener("mouseover",function(){
            let login2=document.querySelector("#login-drop-id");
            login2.style.display="none";
    })
}
}
//*********** */ SIGNOUT FUNCTION
function signOutfunc() {
    localStorage.setItem("signinkey","false");
    window.location.reload();
}
//********** */ FUNCTION FOR CART ACCESS
function tocartfunc(){
    let sign=localStorage.getItem("signinkey");
    if(sign=="true"){
        window.location.href="cart.html";
    }else{
        alert("You need to SignUp/In first!");
    }
}
//********** */ FUNCTION FOR SIGNUP ACCESS
function tosignfunc(){
    let sign=localStorage.getItem("signinkey");
    if(sign=="false" || sign==null){
        window.location.href="signup.html";
    }else if(sign=="true"){
        alert("You are already SignedIn!");
    }
}




document.querySelector("#fb").addEventListener("click",Myfb);
function Myfb(){
    window.location.href="https://www.facebook.com/shoppersstopindia";
}

document.querySelector("#twitter").addEventListener("click",Mytwitter);

function Mytwitter(){
window.location.href="https://twitter.com/shoppersstop";
}

document.querySelector("#insta").addEventListener("click",Myinsta);

function Myinsta(){
window.location.href="https://www.instagram.com/shoppers_stop/";
}