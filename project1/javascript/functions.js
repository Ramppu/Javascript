function listPrint() {

  var x = document.getElementById('t1').value;
  var y = document.getElementById('t2').value;
  var z = document.getElementById('t3').value;

  if( z == '' && y == '') {
    var listElement = document.createElement("li");
    var listContent = document.createTextNode(x);
    listElement.appendChild(listContent);
    document.getElementById("list").appendChild(listElement);
  }

  else if( z == '' && x == '') {
    var listElement = document.createElement("li");
    var listContent = document.createTextNode(y);
    listElement.appendChild(listContent);
    document.getElementById("list").appendChild(listElement);
  }

  else if( x == '') {
    var listElement = document.createElement("li");
    var listContent = document.createTextNode(z);
    listElement.appendChild(listContent);
    document.getElementById("list").appendChild(listElement);

    var listElement = document.createElement("li");
    var listContent = document.createTextNode(y);
    listElement.appendChild(listContent);
    document.getElementById("list").appendChild(listElement);
  }
}
