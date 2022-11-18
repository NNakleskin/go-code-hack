function setLocalStorageProgress(){
		let val = localStorage.getItem("progress")
		if (val !== null && !isNaN(val)){
			if (val < 10){
				val = parseInt(val) + 1
				localStorage.setItem("progress", val.toString())
			}
		} else{
			localStorage.setItem("progress", "1")
		}
}


function setProgressBarValue(){
	const progressBar = document.querySelector(".progress-bar")
	const progressPoints = document.querySelector(".progress-points")
	const progressValue = parseInt(localStorage.getItem("progress"))
	if (progressValue === null || isNaN(progressValue) || progressValue == 0){
		progressBar.style.background = "#fff"
		progressPoints.innerHTML = "0 / 10"
		return
	}
	progressBar.style.background = `linear-gradient(to right, #b1b811 ${progressValue*10}%, #fff ${progressValue*10}% ${100 - progressValue*10}% )`
	progressPoints.innerHTML = progressValue + " / 10"
}

if (localStorage.getItem("progress") !== null && !isNaN(localStorage.getItem("progress"))){
	setProgressBarValue()
}
