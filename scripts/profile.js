
showprof();

function showprof(){
    let profarr=JSON.parse(localStorage.getItem("signupkey"));
    let mob=localStorage.getItem("mobilekey");
    let ind1=0;
    profarr.map(function(el,ind){
        if(el.mobile==mob){
            ind1=ind;
            console.log("mob match found!");
        }
    })
    let name1=profarr[ind1].name;
    let email1=profarr[ind1].email;
    let gender1=profarr[ind1].gender;
    let mobile1=profarr[ind1].mobile;

    let name=document.querySelector("#name-l");
    name.innerText="Name: "+name1;
    let email=document.querySelector("#email-l");
    email.innerText="Email: "+email1;
    let mobile=document.querySelector("#mobile-l");
    mobile.innerText="Mobile: "+mobile1;
    let name2=document.querySelector("#name-r");
    name2.innerText=name1;
    let email2=document.querySelector("#email-r");
    email2.innerText=email1;
    let mobile2=document.querySelector("#mobile-r");
    mobile2.innerText=mobile1;
    let gender2=document.querySelector("#gender-r");
    gender2.innerText=gender1;
}

signInfunc();
// CART ICON FUNCTION

function cartindi(){
    let icon=document.querySelector("#cartIcon-no");
    let cartarr=JSON.parse(localStorage.getItem("cartkey")) || [];
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
// WISH ICON FUNCTION

function wishindi(){
    let icon=document.querySelector("#wishIcon-no");
    let cartarr=JSON.parse(localStorage.getItem("wishkey")) || [];
    let l=cartarr.length;
    if(l>0){
        icon.innerText=l;
    }else{
        icon.innerText="";
    }
}

function wishindiRem(){
    let icon=document.querySelector("#wishIcon-no");
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
        wishindi();
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
        wishindiRem();
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
    window.location.href="index.html";
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
//********** */ FUNCTION FOR WISHLIST ACCESS
function towishfunc(){
    let sign=localStorage.getItem("signinkey");
    if(sign=="true"){
        window.location.href="wishlist.html";
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
// FUNCTION FOR POPUP FORM
function openForm() {
    document.getElementById("myForm-3").style.display = "block";
    
    
  }
  
  function closeForm() {
    document.getElementById("myForm-3").style.display = "none";
  }

  function editfunc(){
      event.preventDefault();
    let name1=document.querySelector("#name-3").value;
    let email1=document.querySelector("#email-3").value;
    let mobile1=document.querySelector("#mobile-3").value;
    let mob=localStorage.getItem("mobilekey");
    let signuparr=JSON.parse(localStorage.getItem("signupkey"));
    let index=0;
    signuparr.map(function(el,ind){
        if(el.mobile==mob){
            index=ind;
        }
    })
    if(name1!="") signuparr[index].name=name1;
    if(email1!="") signuparr[index].email=email1;
    if(mobile1!="") signuparr[index].mobile=mobile1;
    
    localStorage.setItem("signupkey",JSON.stringify(signuparr));
    document.getElementById("myForm-3").style.display = "none";
    document.getElementById("myForm-4").style.display = "block";
  }

  function otpfunc(){
      event.preventDefault();
    let otp1=document.querySelector("#otp-3").value;
    if(otp1=="1234"){
        alert("Profile edited!");
        document.getElementById("myForm-4").style.display = "none";
        window.location.reload();
    }else{
        alert("Incorrect OTP!");
    }
  }

  function closeForm2() {
    document.getElementById("myForm-4").style.display = "none";
  }