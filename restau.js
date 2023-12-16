let imgContainer = document.querySelector(".scrolls");
let imagess;
let myIndex = 0;

// image carousel for two screens
if (window.matchMedia("(min-width: 1024px)").matches) {
setInterval(nextcaroussel, 1000);
function nextcaroussel(){
	imgContainer.style.transform = "translateX(-50%)";
      const firstImage = imgContainer.firstElementChild;
      imgContainer.appendChild(firstImage);
      imgContainer.style.transition = "";
      imgContainer.style.transform = "translateX(0)";
	  imgContainer.style.transition = "transform 4s ease";
	}
}

// image carousel for small screen
if (window.matchMedia("(max-width: 768px)").matches) {
setInterval(caroussel, 1000);
function caroussel(){
	imagess = imgContainer.querySelectorAll("img");
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
