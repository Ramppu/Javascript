function listPrint() {
  var x = document.getElementById('t1').value;
  var y = document.getElementById('t2').value;// X, Z and Y VALUES ARE USED FOR THE MODAL GENERATION
  var z = document.getElementById('t3').value;
  var tasks = document.getElementsByTagName('input'); // used for the list print

  if(document.getElementsByTagName('li').length < 6) {
      //IF THE FORM IS SUBMITTED EMPTY
        if (z == '' && x == '' && y == '') {
          var modal = document.getElementById('mod');
          modal.style.display = "block";
          var span = document.getElementsByClassName('close')[0];
          //Modal generation

          span.onclick = function() {
            modal.style.display = "none"; //Clicking span elements hides the modal
          }

          window.onclick = function(event) {
            if (event.target == modal) { //Clicking anywhere on the window hides the modal too
              modal.style.display = "none";
            }
          }
        }
        else {
          for(var i = 0; i < tasks.length-1;i++) { //tasks.length-1 because 'submit' considers itself as input, and we dont want to print that to the site
            var listElement = document.createElement("li"); //Creating an 'li' element
            listElement.onclick = function(e) { this.parentNode.removeChild(this)}; //Creating a function for every 'li' element, that removes it by mouseclick
            var listContent = document.createTextNode(tasks[i].value); //Creating a text node, that can be given to the 'li' element
              if(tasks[i].value == ''){
                console.log('Empty values are not printed'); //if 'tasks[i].value' is empty, it is not printed to the user
              }
              else {
                listElement.appendChild(listContent);
                document.getElementById('list').appendChild(listElement); //Else, it is printed on the site
              }
          }
        }
        document.getElementById('t1').value = '';
        document.getElementById('t2').value = ''; //Used to empty the form after submission
        document.getElementById('t3').value = '';
        hideInfo(); //Brings out the 'info' div
        document.getElementById('list').style.opacity = '1.0';
  }
  else {
    alert("The list can only hold 6 items in it");
  }
}

//  NOT SURE IF THIS WILL EVER BE USED------------------------------------------------------------
function show(){
  document.getElementById('who').style.opacity = '1.0';
}
function hide() {
  document.getElementById('who').style.opacity = '0.0'; //On mouseout, the text is hidden again
}
//-------------------------------------------------------------------------------------------------

function hideInfo() {
  if(document.getElementsByTagName('li').length <= 0) { // if there are no 'li' elements on the website, 'info' div is hidden
    document.getElementById('info').style.opacity = '0.0';
  }
  else {
    document.getElementById('info').style.opacity = '1.0';
  }
}
