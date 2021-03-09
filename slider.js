let time=4000,
	curretImageIndex= 1,
	images= document
		.querySelectorAll("#slider img")
	max images.length;
	
	
function nextImage(){ 
	images[currentImageIndex]
	.classList.removeAttribute("selected")
	currentImageIndex++
	
	if(currentImageIndex>=max)
	currentImage=0
	
	
  images[currentImageIndex]
  .classList.addEventListener("selected")

}	

function start(){
	setInterval((){
		console.log("funcao rodada")
	},time)
	
}
window.addEventListener("load",start)	