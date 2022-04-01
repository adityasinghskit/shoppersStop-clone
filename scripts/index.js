let data1=[
    {
        imageurl:"https://sslimages.shoppersstop.com/sys-master/images/h64/hc1/26898659508254/S22ALTRAGYE_YELLOW.jpg_136Wx204H",
        brand:"ALTLIFE",
        name:"Printed Cotton Regular Neck Womens T-Shirt",
        price:499,
        strprice:"",
        off:"",
    },
    {
        imageurl:"https://sslimages.shoppersstop.com/sys-master/images/hd1/h93/16407139352606/S21710BTEE060_WHITE.jpg_136Wx204H",
        brand:"STOP",
        name:"Printed Cotton Hoody Boys T-Shirt",
        price:249,
        strprice:499,
        off:50,
    },
    {
        imageurl:"https://sslimages.shoppersstop.com/sys-master/images/h04/hc7/17277800054814/S21VIPZOROPRO55_GREY.jpg_136Wx204H",
        brand:"VIP",
        name:"Zorro-Pro Polycarbonate TSA Lock Hard Trolley",
        price:5960,
        strprice:"",
        off:"",
    },
    {
        imageurl:"https://sslimages.shoppersstop.com/sys-master/images/h4e/h66/17380198121502/A21GJB945C303YE_YELLOW.jpg_136Wx204H",
        brand:"G & J",
        name:"Chest Printed Knits Plain Round Neck Boys T-Shirt",
        price:299,
        strprice:499,
        off:40,
    },
	{
        imageurl:"https://sslimages.shoppersstop.com/sys-master/images/h64/hc1/26898659508254/S22ALTRAGYE_YELLOW.jpg_136Wx204H",
        brand:"ALTLIFE",
        name:"Printed Cotton Regular Neck Womens T-Shirt",
        price:499,
        strprice:"",
        off:"",
    },
]
let data2=[
    {
        imageurl:"https://sslimages.shoppersstop.com/sys-master/images/h4f/h7e/26898613436446/S22ALTSHOYE_YELLOW.jpg_136Wx204H",
        brand:"ALTLIFE",
        name:"Regular Fit Thigh Length Cotton Womens Active Wear Shorts",
        price:499,
        strprice:"",
        off:"",
    },
    {
        imageurl:"https://sslimages.shoppersstop.com/sys-master/images/hd1/h93/16407139352606/S21710BTEE060_WHITE.jpg_136Wx204H",
        brand:"STOP",
        name:"Printed Cotton Hoody Boys T-Shirt",
        price:249,
        strprice:499,
        off:50,
    },
    {
        imageurl:"https://sslimages.shoppersstop.com/sys-master/images/h04/hc7/17277800054814/S21VIPZOROPRO55_GREY.jpg_136Wx204H",
        brand:"VIP",
        name:"Zorro-Pro Polycarbonate TSA Lock Hard Trolley",
        price:5960,
        strprice:"",
        off:"",
    },
    {
        imageurl:"https://sslimages.shoppersstop.com/sys-master/images/h4e/h66/17380198121502/A21GJB945C303YE_YELLOW.jpg_136Wx204H",
        brand:"G & J",
        name:"Chest Printed Knits Plain Round Neck Boys T-Shirt",
        price:299,
        strprice:499,
        off:40,
    },
	{
        imageurl:"https://sslimages.shoppersstop.com/sys-master/images/h64/hc1/26898659508254/S22ALTRAGYE_YELLOW.jpg_136Wx204H",
        brand:"ALTLIFE",
        name:"Printed Cotton Regular Neck Womens T-Shirt",
        price:499,
        strprice:"",
        off:"",
    },
]

showitems1(data1);
showitems2(data2);
	function showitems1(arr){
		document.querySelector("#cf-1").innerHTML="";
		arr.map(function(el){
			let div1=document.createElement("div");
			div1.setAttribute("class","item-card");
			let img1=document.createElement("img");
			img1.src=el.imageurl;
			let div3=document.createElement("div");
			div3.setAttribute("class","item-card-text");
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
			div3.append(brand1,name1,div2,add1)
			div1.append(img1,div3);
			document.querySelector("#cf-1").append(div1);
		})
	}
    function showitems2(arr){
		document.querySelector("#cf-2").innerHTML="";
		arr.map(function(el){
			let div1=document.createElement("div");
			div1.setAttribute("class","item-card");
			let img1=document.createElement("img");
			img1.src=el.imageurl;
			let div3=document.createElement("div");
			div3.setAttribute("class","item-card-text");
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
			div3.append(brand1,name1,div2,add1)
			div1.append(img1,div3);
			document.querySelector("#cf-2").append(div1);
		})
	}

//******** JS FOR SIGNIN FORM ********
let exist=false;

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