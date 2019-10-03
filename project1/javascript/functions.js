function listPrint() {

  var x = document.getElementById('t1').value;
  var y = document.getElementById('t2').value;// X, Z and Y VALUES ARE USED FOR THE MODAL GENERATION
  var z = document.getElementById('t3').value;
  var tasks = document.getElementsByTagName('input'); // used for the list print

  if(document.getElementsByTagName('li').length < 6) {
      //IF THE FORM IS SUBMITTED EMPTY
        if (z == '' && x == '' && y == '') {
          var modal = document.getElementById("mod");
          modal.style.display = "block";
          var span = document.getElementsByClassName("close")[0];
          //Modal generation

          span.onclick = function() {
            modal.style.display = "none"; //Clicking span elements hides the modal
          }

          window.onclick = function(event) {
            if (event.target == modal) { // Clicking anywhere on the window hides the modal too
              modal.style.display = "none";
            }
          }
        }
        else {
          for(var i = 0; i < tasks.length-1;i++) { //tasks.length-1 because 'submit' considers itself as input, and we dont want to print that to the site
            var listElement = document.createElement("li"); //Creating an 'li' element
            var listContent = document.createTextNode(tasks[i].value); //Creating a text node, that can be given to the 'li' element
              if(tasks[i].value == ''){
                console.log('Empty values are not printed'); //if 'tasks[i].value' is empty, it is not printed to the user
              }
              else {
                listElement.appendChild(listContent);
                document.getElementById("list").appendChild(listElement); //Else, it is printed on the site
              }
          }
        }
        document.getElementById('t1').value = '';
        document.getElementById('t2').value = ''; //REMOVE COMMENT TAG IF WE WANT THE FORM TO EMPTY ITSELF AFTER SUBMISSION
        document.getElementById('t3').value = '';
        hideBtn(); //Initializes the button to the site
  }
  else {
    alert("The list can only hold 6 items in it");
  }
}

function deleteChild() {
  var remove = document.getElementById('list');
  remove.removeChild(remove.firstChild);
  hideBtn(); //After every deletion, the button's display condition is checked
}

function hideBtn() {
  if(document.getElementsByTagName('li').length <= 0){ //If there are no 'li' elements on the site, button is hidden
    document.getElementById('dlt').style.display = 'none'; // when 'deleteChild()' removes the final element, the button hides itself
  }
  else {
     document.getElementById('dlt').style.display = 'block'; //As form submission adds 'li' element to the site, it is always shown after the first submission
  }
}

function show(){
  document.getElementById('who').style.display = 'inline';
}

function hide() {
  document.getElementById('who').style.display = 'none'; //On mouseout, the text is hidden again
}
