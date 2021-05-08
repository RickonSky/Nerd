let memb_details = {
	rick : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
	sidd : "text\n about \nsid",
	solo : "text\n about \nsolo",
	fave : "text/n about /nfave",
}
let pics_src = {
	rick : "https://robohash.org/uno",
	sidd : "https://robohash.org/deux", 
	solo : "https://robohash.org/tres",
	fave : "https://robohash.org/quatre",
}
let memb_arr = ["rick", "sidd", "solo", "fave"]

let pic = document.getElementById("pic");
let text = document.getElementById("details");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

prev.addEventListener("click", prev_func);
next.addEventListener("click", next_func);

let i = 0;
function prev_func(){
	--i;
	if (i < 0) {
		i = (memb_arr.length - 1);
	}
	pic.src = pics_src[memb_arr[i]];
	text.innerHTML = memb_details[memb_arr[i]];
	
}
function next_func(){
	i++;
	if (i > (memb_arr.length - 1)) {
		i = 0
	}
	pic.src = pics_src[memb_arr[i]]
	text.innerHTML = memb_details[memb_arr[i]];
	

}

