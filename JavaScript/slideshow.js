//Create a prefix variable for image iteration
var prefix = "images/page";
//Create new array and load it with images using prefix
var imageArray = new Array(3);
for (i = 0; i < imageArray.length; i++) {
	imageArray[i] = prefix + (i + 1) + ".png";
}
//Rotates through each image in the array
var imageCounter = 0;
function rotate() {
	var imageObject = document.getElementById('placeholder');
	imageObject.src = imageArray[imageCounter];
	++imageCounter;
	// If imagecounter == 3, restart back to the beginning of the slideshow
	if (imageCounter == 3) {
		imageCounter = 0;
	}
}
//Function that keeps time and calls the rotate function for the next image
function startSlideShow() {
	document.getElementById('placeholder').src = imageArray[2];
	setInterval('rotate()', 6000);
}