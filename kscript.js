////////////////////////////////////////////////////////////
//------------------ ee companion ------------------------//
////////////////////////////////////////////////////////////

//Create the truth table values and populate with dont cares.
var truthValue = [];
for(i = 0; i < 16; i++){truthValue[i] = "D";}

//Counts the number of tabs in the k-map variables
function numOfVar(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabcontent.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classList.add("active");
}
//Validate if input is a single character and capitilize if not.
function validate(input){
    input.value = input.value.replace(/\W|\d/g, '').substr(0, 1).toUpperCase();
}
//Copies a document value from one location to another.
function copyVar(destinationId, sourceId) {
		var x;
		x = document.getElementById(sourceId).value;
		document.getElementById(destinationId).innerHTML = x;
	
}
//Changes the color of the row that is being clicked with the mouse
function changeRowColor(id, num){
		if( truthValue[num] == "D")
	{
		document.getElementById(id).style.backgroundColor = "#BCC1C4";
	}
	else if( truthValue[num] == 1)
	{
		document.getElementById(id).style.backgroundColor = "#F7C2B0";
	}
	else if( truthValue[num] == 0)
	{
		document.getElementById(id).style.backgroundColor = "#C2F7B0";
	}
}
// Changes the truth value from D to 1 to 0 back to dont care D.
function rotateTruthV(id, num) {
	if( truthValue[num] == "D")
	{
		document.getElementById(id).innerHTML = 1;
		truthValue[num] = 1;
	}
	else if( truthValue[num] == 1)
	{
		document.getElementById(id).innerHTML = 0;
		truthValue[num] = 0;
	}
	else if( truthValue[num] == 0)
	{
		document.getElementById(id).innerHTML = "D";
		truthValue[num] = "D";
	}
}
