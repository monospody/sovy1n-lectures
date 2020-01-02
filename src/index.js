import "./styles.css";

console.log("hello");
let count = 1;
function plus(){

	fetch('https://swapi.co/api/people/'+(++count))
	  .then((response) => {
		return response.json();
	  })
	  .then((myJson) => {
		console.log(myJson);
		document.getElementById("output").innerHTML = myJson.name;
	  });
}
function minus(){

	fetch('https://swapi.co/api/people/'+(--count))
	  .then((response) => {
		return response.json();
	  })
	  .then((myJson) => {
		console.log(myJson);
		document.getElementById("output").innerHTML = myJson.name;
	  });
}

document.getElementById("plus").addEventListener("click",plus,false);
document.getElementById("minus").addEventListener("click",minus,false);