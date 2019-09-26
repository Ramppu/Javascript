function listPrint() {

  var x = document.getElementById('t1').value;
  var y = document.getElementById('t2').value;
  var z = document.getElementById('t3').value;

//IF THE FORM IS SUBMITTED EMPTY
  if (z == '' && x == '' && y == '') {
    // Get the modal
    var modal = document.getElementById("mod");
    modal.style.display = "block";
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
//-------------------------------------------------//

//IF ONLY ONE ELEMENT IS ADDED-----------------------//

  else if( z == '' && y == '') {
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

  else if( x == '' && y == '') {
    var listElement = document.createElement("li");
    var listContent = document.createTextNode(z);
    listElement.appendChild(listContent);
    document.getElementById("list").appendChild(listElement);
  }

//--------------------------------------------------------------//

//IF TWO ELEMNTS ARE ADDED-------------------------------------//

  else if( x == '') {
    var listElement = document.createElement("li");
    var listContent = document.createTextNode(y);
    listElement.appendChild(listContent);
    document.getElementById("list").appendChild(listElement);

    var listElement = document.createElement("li");
    var listContent = document.createTextNode(z);
    listElement.appendChild(listContent);
    document.getElementById("list").appendChild(listElement);
  }

  else if( z == '') {
  var listElement = document.createElement("li");
  var listContent = document.createTextNode(x);
  listElement.appendChild(listContent);
  document.getElementById("list").appendChild(listElement);

  var listElement = document.createElement("li");
  var listContent = document.createTextNode(y);
  listElement.appendChild(listContent);
  document.getElementById("list").appendChild(listElement);
  }

  else if( y == '') {
    var listElement = document.createElement("li");
    var listContent = document.createTextNode(x);
    listElement.appendChild(listContent);
    document.getElementById("list").appendChild(listElement);

    var listElement = document.createElement("li");
    var listContent = document.createTextNode(z);
    listElement.appendChild(listContent);
    document.getElementById("list").appendChild(listElement);
  }
  //--------------------------------------------------------//

  //IF ALL 3 ARE ADDED
  else {
    var listElement = document.createElement("li");
    var listContent = document.createTextNode(x);
    listElement.appendChild(listContent);
    document.getElementById("list").appendChild(listElement);

    var listElement = document.createElement("li");
    var listContent = document.createTextNode(y);
    listElement.appendChild(listContent);
    document.getElementById("list").appendChild(listElement);

    var listElement = document.createElement("li");
    var listContent = document.createTextNode(z);
    listElement.appendChild(listContent);
    document.getElementById("list").appendChild(listElement);
  }
}
