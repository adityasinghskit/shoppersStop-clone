
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