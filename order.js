let selectors = document.querySelector(".classselect");
let firstDiv = document.querySelectorAll(".image-div");
let otherDiv = document.querySelectorAll(".other-div");
let hideButton = document.querySelectorAll(".remove");
let secDivs;
let theValue;
let firstdivName;
let secondivName;

// For showing the categories of food either local or international 
selectors.addEventListener("change", () => {
	theValue = selectors.value;
firstDiv.forEach(oneDiv => {
	secDivs =  oneDiv.getAttribute("data-set");	
	if (secDivs == theValue || theValue == "All Categories" ) {
			oneDiv.style.display = "block";
	} else {
			oneDiv.style.display = "none";
	}	
  });	
});

// For showing the otherdiv when press the main imagediv
firstDiv.forEach(eachCon => {
	eachCon.addEventListener("click", () => {
		firstdivName = eachCon.getAttribute("name");
otherDiv.forEach(theachCon => {
		secondivName = theachCon.getAttribute("name");
		if (firstdivName == secondivName){
	theachCon.style.display = "block";
// this doesnt seem to have a purpose though but i just leave it
	theachCon.classList.add("theclass");
}
		});
	});
});

// The hidebutton which hides the selected element when add to cart
hideButton.forEach(hidebtn => {
	hidebtn.addEventListener("click", () => {
		hidebtn.parentElement.style.display = "none";
	})
});

// the toggle of the beside div used for adding
let cartlogo = document.querySelector(".cartlogo");
let besidediv = document.querySelector(".besidediv");

cartlogo.addEventListener("click", ()=> {
	besidediv.classList.toggle("besidedivno")
 });

let newDiv;
let newImg;
let newPrice;
let newName;
let eachPrice;
let total = 0;
let pricesArray = [];
let amount = document.querySelector(".am");

// add to cart Button, showing the side div and showing the total price
let addcartBtn = document.querySelectorAll(".addcart");
addcartBtn.forEach(eachaddcartBtn => {
	eachaddcartBtn.addEventListener("click", function() {
		
		newDiv = document.createElement("div");
		newImg = document.createElement("img");
		newPrice = document.createElement("p");
		newName = document.createElement("h3");
		
		besidediv.appendChild(newDiv);
		newDiv.appendChild(newImg);
		newDiv.appendChild(newPrice);
		newDiv.appendChild(newName);
		
		newDiv.classList.add("newDiv");
		newImg.classList.add("newImg");
		newPrice.classList.add("newPrice");
		newName.classList.add("newName");
		
// newprice is the div and eachprice is the normal price		
		newImg.setAttribute("src", eachaddcartBtn.parentElement.querySelector("img").src);
		newName.innerHTML = eachaddcartBtn.parentElement.querySelector("h1").innerHTML;
		eachPrice = Number(eachaddcartBtn.parentElement.querySelector("b").innerText);
		
		pricesArray.push(eachPrice);
		total = pricesArray.reduce((acc, currentPrice) => acc + currentPrice, 0);
//		console.log("Total Price: $" + total);
		newPrice.innerText = `Price: $${eachPrice}`;
		amount.innerHTML = total;
	});
});
  
 



// proceeding to payment when button is clicked
let checkoutbtn = document.querySelector(".checkoutbtn");
checkoutbtn.addEventListener("click", () => {
window.location.href = "https://www.google.com";
});



// add the remove or cross sign to each added div 
// when pressed it will remove the parentelement and constantly update the price or amount automatically
 