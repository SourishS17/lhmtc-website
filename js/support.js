var modals = document.querySelectorAll(".my-modal");

function showBio(patron) {
	var bio = document.querySelectorAll(`.my-modal#${patron}`)[0];
	bio.style.display = "revert";	
	document.body.style.overflow = "hidden";
}

function closeBio(patron) {
	var bio = document.querySelectorAll(`.my-modal#${patron}`)[0];
	bio.style.display = "none";	
	document.body.style.overflow = "auto";
}

