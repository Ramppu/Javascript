//Functions and variables for my useless project

var imgs = []; //Pictures for pepe
imgs.push('img/feelsbadman.png');
imgs.push('img/feelsgoodman.png');
imgs.push('img/feelsstrongman.png');
imgs.push('img/hypers.png');
imgs.push('img/monkas.png');
imgs.push('img/peepowtf.png');


var quotes = [];
quotes.push('I tried so hard and got so far');
quotes.push('All these people are so hard to negotiate with');
quotes.push('You all need to shit on ya bed bruv!');
quotes.push('All this shit about the next champ');
quotes.push('You would think all of these are just random sentences');
quotes.push('And they are, you just dont know it yet');
quotes.push('LOL! Youre all baddies ok?');
quotes.push('fack off bruv');
quotes.push('bruv, youve got it');
quotes.push('We are trying to shit on your bed');

//var l = document.createElement('p');
//var t = document.createTextNode(quotes[i]);
//l.append(t);
//document.getElementById('content').append(l);

function dropDown() {
  var chck = document.getElementById('query').value;
  if(chck != '') {
    for(var i = 0; i < quotes.length;i++) {
      if(quotes[i].indexOf(chck) > -1) {
        var l = document.createElement('p');
        var t = document.createTextNode(quotes[i]);
        l.append(t);
        document.getElementById("dropdown").classList.toggle("show");
        document.getElementById('dropdown').append(l);
        }
      }
      window.onclick = function(event) { // Close the dropdown if the user clicks outside of it
        if (!event.target.matches('.dropbtn')) { //If click doesnt happen on the button
          var dropdowns = document.getElementsByClassName("dropdown-content"); // Table the content within the class
          for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) { //If table content[i] is affected by 'show' css property,
              openDropdown.classList.remove('show'); //Remove the connection
              document.getElementById('dropdown').innerHTML = '';
            }
          }
        }
      }
    }
  }

function initiate() {
  for(var i = 0;i < 4;i++) {
    var img = $('<img>',{class: 'wc'});
    $(img).attr('src','img/weirdchamp.gif');
    $('#heading').append(img);
  }

  $('#heading').append("<h1>Placeholder forsenCD</h1>");

  for(var i = 0;i < 4;i++) {
    var img = $('<img>',{class: 'wc'});
    $(img).attr('src','img/okaychamp.png');
    $('#heading').append(img);
  }
    pict();
}

function sentence() {
  var text = document.getElementById('query').value;
  if(text != '') {
    quotes.push(text);
    Swal.fire({
      position: 'center',
      imageUrl: 'img/peepoclap.gif',
      title: text + ' Has been stored',
      showConfirmButton: false,
      timer: 1500
    })
    var k = localStorage.length;
    localStorage.setItem(k,text);
    document.getElementById('query').value = "";
    pict();
  }
  else {
    Swal.fire({
      imageUrl: 'img/weirdchamp.gif',
      title: 'Halt!',
      text: 'We dont accept empty submissions'
    })
  }
}
function pict() {
  var pepe = $('<img>',{id: 'pepe'});
  switch(localStorage.length) {
    case 1:
      $(pepe).attr('src','img/peepowtf.png');
      break;
    case 2:
      $(pepe).attr('src','img/feelsstrongman.png');
      break;
    case 3:
      $(pepe).attr('src','img/hypers.png');
      break;
    case 4:
      $(pepe).attr('src','img/monkas.png');
      break;
    default:
      $(pepe).attr('src','img/feelsbadman.png');
      break;
  }
    $('#pic').html(pepe);
}
