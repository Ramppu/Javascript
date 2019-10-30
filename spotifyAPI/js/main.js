var url = "https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF"; // var url = käyttäjänPaska
var auth = "BQCP-6uppt0dKZ8YHqiKLbnbUDR0ToENgeMol6h-YZYcfGi1LIl_hC3FNJkWhwF9oTHxhnILiWdRD2HFuo6gZskflrm-5IzVBX0nraiN_wWqB2_Ie-bKYziYhbQG3Yk5Kxp9DixmWOYNn0AC1DAE67IO8-ubw1UgIH4";

function searchSpotify() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET",url,true);
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.setRequestHeader("Authorization", auth);
  xmlhttp.send();

  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
       console.log(xmlhttp.responseText);
       var k = JSON.parse(xmlhttp.responseText);
       document.getElementById('FL').append(k.followers.total);
       var img = document.createElement('img');
       img.src = k.images[2].url;
      document.getElementById('rawdata').append(img);
    }
  }
}

function login() {
  console.log("lol");
    main.get('/login', function(req, res) {
    var scopes = 'user-read-private user-read-email';
    res.redirect('https://accounts.spotify.com/authorize' +
  '?response_type=code' +
  '&client_id=' + my_client_id +
  (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
  '&redirect_uri=' + encodeURIComponent(redirect_uri));
});
}
    //input field id="paska"
    //var url = document.getElementById('paska').value;
    //<p id="kulli">iqj092093ieweoiqwqe3gpoiwgwgojg</p>
    //var auth = document.getElementById('kulli').innerHTML;/.value;
