//Functions and variables for my useless project

var imgs = []; //Pictures for pepe
imgs.push('img/feelsbadman.png');
imgs.push('img/feelsgoodman.png');
imgs.push('img/feelsstrongman.png');
imgs.push('img/hypers.png');
imgs.push('img/monkas.png');
imgs.push('img/peepowtf.png');


var quotes = [];//What has been said

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
