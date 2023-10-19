
let selectors = document.querySelector(".classselect");
// let imgcontainer = document.querySelector(".image-container");
let firstDiv = document.querySelectorAll(".image-div");
// let othercontainer = document.querySelector(".other-container");
let otherDiv = document.querySelectorAll(".other-div");
let secDivs;
let theValue;
let firstdivName;
let secondivName;
let hideButton = document.querySelectorAll(".remove");
 
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

firstDiv.forEach(eachCon => {
	eachCon.addEventListener("click", () => {
		firstdivName = eachCon.getAttribute("name");
otherDiv.forEach(theachCon => {
		secondivName = theachCon.getAttribute("name");
		if (firstdivName == secondivName){
	theachCon.style.display = "block";
	theachCon.classList.add("theclass");
}
		});
	});
});

hideButton.forEach(hidebtn => {
	hidebtn.addEventListener("click", () => {
		hidebtn.parentElement.style.display = "none";
	})
});


let imageContainer = document.querySelector(".displayimage");
let imagess = document.querySelectorAll(".imgs");
let myIndex = 0;


caroussel();
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


