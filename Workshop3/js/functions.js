//Function for the first button, puts date and time in alert.
function alertDate () {
  var date = new Date();
  window.alert("The day is " + date.getDate() +  "." + date.getMonth() + " And the time is " + date.getHours() + ":" + date.getMinutes());
}

// Creates a table, and summons it when pressing the 2nd button.
function showTable() {
  var html = `
    <table id="tbl">
      <tr>
        <th>artist</th>
        <th>album</th>
        <th>Release Year</th>
      </tr>
      <tr>
        <td>Tool</td>
        <td>Fear Inoculum</td>
        <td>2019</td>
      </tr>
      <tr>
        <td>Haken</td>
        <td>Vector</td>
        <td>2018</td>
      </tr>
      <tr>
        <td>Riverside</td>
        <td>Wasteland</td>
        <td>2018</td>
      </tr>
    </table>
  `;
  document.getElementById('tbl').innerHTML = html;
}

// Prints out an array into a showTable
function arrayTable() {
  var persons = ["Nyssa P. Skinner", "593-4241 Lacus, St.","Cape Verde",
	       "Camilla F. Strickland","391-2150 Ac Rd.","Andorra",
	       "Reagan U. Andrews", "P.O. Box 472, 2271 Mauris Ave","Faroe Islands",
	       "Kelsey D. Clark", "P.O. Box 866, 7793 Aliquet Ave","Bulgaria"];
  document.write("<table>");
  document.write("<tr><th>Name</th><th>Address</th><th>Country</th></tr>");
  for(var i = 0; i < persons.length;i += 3) {
    document.write("<tr><td>" + persons[i] + "</td><td>"  + persons[i+1] + "</td><td>" + persons[i+2] + "</td><td></tr>");
  }
  document.write("</table>");
}

//MOUSE OVER
function mouseOver() {
  console.log("Menit päältäni >:(");
}
function mouseOut() {
  window.alert("haha.");
}

//Onfocus,blur
function onFocus() {
  var x = document.getElementById('heh').value = "Fill out the information";
  document.getElementById('heh').style.background = "blue";
}

function onBlur() {
  var x = document.getElementById('heh').value = "";
  document.getElementById('heh').style.background = "white";
}

//Keydown event
var x = 0;
function keyDown() {
  document.getElementById("count").innerHTML = x++;
}
