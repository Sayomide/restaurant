let selectors = document.querySelector(".classselect");
let firstDiv = document.querySelectorAll(".image-div");
let otherDiv = document.querySelectorAll(".other-div");
let secDivs;
let theValue;
let firstdivName;
let secondivName;
let hideButton = document.querySelectorAll(".remove");

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

let imgContainer = document.querySelector(".scrolls");
let imagess = imgContainer.querySelectorAll("img");
let myIndex = 0;

// image carousel for small screen
if (window.matchMedia("(max-width: 768px)").matches) {
setInterval(caroussel, 1000);
function caroussel(){
	for( let i=0; i < imagess.length; i++){
		imagess[i].style.display = "none";
	}
	myIndex++;
		
	imagess[myIndex - 1].style.display = "block";
	if (myIndex == imagess.length){
		myIndex = 0;
	}
}
}




// add to cart Button, showing the side div


