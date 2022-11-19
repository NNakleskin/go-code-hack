function getParams(){
	let params = window
	    .location
	    .search
	    .replace('?','')
	    .split('&')
	    .reduce(
	        function(p,e){
	            var a = e.split('=');
	            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
	            return p;
	        },
	        {}
	    );

	return parseInt(params['vid']);
}

function setProgressStorage(vid){
	let val = localStorage.getItem("progressStorage")
	let data
	data = JSON.parse(val)
	for(let i in data){
		if (parseInt(i) === vid){
			data[i] = "1"
			localStorage.setItem("progressStorage", JSON.stringify(data))
		}
	}
}


function getProgressStorage(){
	const progressBar = document.querySelector(".progress-bar")
	const progressPoints = document.querySelector(".progress-points")
	let progressValue
	let val = JSON.parse(localStorage.getItem("progressStorage"))
	if (val === null){
		data = {"1" : "0", "2" : "0", "3" : "0", "4" : "0", "5" : "0", "6" : "0", "7" : "0", "8" : "0", "9" : "0", "10" : "0", "11" : "0", "12" : "0"}
		localStorage.setItem("progressStorage", JSON.stringify(data))
	}
	val = JSON.parse(localStorage.getItem("progressStorage"))
	let count = 0
	for(let i in val){
		if (parseInt(val[i]) === 1) count++
	}
	progressValue = count

	progressBar.style.background = `linear-gradient(to right, #b1b811 ${(progressValue*10) / 1.2}%, #fff ${(progressValue*10) / 1.2}% ${100 - (progressValue*10) / 1.2}% )`
	progressPoints.innerHTML = progressValue + " / 12"
}

getProgressStorage()

