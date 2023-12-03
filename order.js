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


// The hidebutton which hides the other selected element when add to cart
hideButton.forEach(hidebtn => {
	hidebtn.addEventListener("click", () => {
		hidebtn.parentElement.style.display = "none";
	})
});

let newDiv;
let newImg;
let newPrice;
let newName;
/*
// add to cart Button, showing the side div
let addcartBtn = document.querySelectorAll(".addcart");
addcartBtn.forEach(eachaddcartBtn => {
	eachaddcartBtn.addEventListener("click", function() {
		console.log(eachaddcartBtn.parentElement.getAttribute("name"));
	})
})
*/

let cartlogo = document.querySelector(".cartlogo");
let besidediv = document.querySelector(".besidediv");

cartlogo.addEventListener("click", ()=> {
	besidediv.classList.toggle("besidedivno")
	console.log("toggle now");
 })