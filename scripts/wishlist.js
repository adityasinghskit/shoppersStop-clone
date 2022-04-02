let wisharr=JSON.parse(localStorage.getItem("wishkey"));
showitems(wisharr);

function showitems(arr){
    document.querySelector("#items").innerHTML="";
    arr.map(function(el){
        let div1=document.createElement("div");
        div1.setAttribute("class","item-card");
        let img1=document.createElement("img");
        img1.src=el.imgurl;
        let brand1=document.createElement("p");
        brand1.setAttribute("class","item-brand");
        brand1.innerText=el.brand;
        let name1=document.createElement("p");
        name1.setAttribute("class","item-name");
        name1.innerText=el.name;
        let div2=document.createElement("div");
        div2.setAttribute("class","item-pricediv");
        let price1=document.createElement("p");
        price1.setAttribute("class","item-price");
        price1.innerText="₹"+el.price;
        let strprice1=document.createElement("p");
        strprice1.setAttribute("class","item-strprice");
        if(el.strprice!=""){
            strprice1.innerText="₹"+el.strprice;
        }
        strprice1.style.textDecoration="line-through";
        let off1=document.createElement("p");
        off1.setAttribute("class","item-off");
        if(el.off!=""){
            off1.innerText=el.off +"% off";
        }
        div2.append(price1,strprice1,off1);
        
        add1=document.createElement("button");
        add1.setAttribute("class","item-btn");
        add1.innerText="Add to Cart";
        add1.onclick=function() {
            addtocart(el);
        }
        div1.append(img1,brand1,name1,div2,add1);
        document.querySelector("#items").append(div1);
    })
}
function addtocart(el) {
    let cartarr=JSON.parse(localStorage.getItem("cartkey")) || [];
    let wisharr=JSON.parse(localStorage.getItem("wishkey"));
    let dup=false;
    cartarr.map(function(elm){
        if(el.name==elm.name) {
            dup=true;
        }
    })
    if(!dup){
    cartarr.push(el);
    localStorage.setItem("cartkey",JSON.stringify(cartarr));
    }else if(dup){
        alert("already in cart!");
    }
    wisharr.map(function(elm,ind){
        if(el.name==elm.name) {
            wisharr.splice(ind,1);
            localStorage.setItem("wishkey",JSON.stringify(wisharr));
        }
    })

    cartindi();
     wishindi();
    showitems(wisharr);
}

function tocartfunc(){
    let sign=localStorage.getItem("signinkey");
    if(sign=="true"){
        window.location.href="cart.html";
    }else{
        alert("You need to SignUp/In first!");
    }
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
// CART ICON FUNCTION

function wishindi(){
    let icon=document.querySelector("#wishIcon-no");
    let cartarr=JSON.parse(localStorage.getItem("wishkey"));
    let l=cartarr.length;
    console.log(l);
    if(l>0 && l!=null){
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