function generateNumber()
{
	var min = document.getElementById("minValue").value;
	var max = document.getElementById("maxValue").value;
	var rand = parseInt(Math.floor(Math.random()*(max-min+1))) + parseInt(min);
	document.getElementById("result").innerHTML = rand;
}
