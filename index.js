let vals = ["left", "center", "right"];
var m = document.getElementsByTagName("header");
// m[0].style.textAlign = vals[1];



// let elem = document.getElementsByTagName("header");
window.load(setInterval(mover, 2000));
function mover(){
	while(i < vals.length) {
		if(i >= 3 ){
			i = 0;
		}
		m[0].style.textAlign = vals[i]
	}
	



