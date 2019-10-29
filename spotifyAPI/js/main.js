var url = "url here";
var auth = "auth here";

function searchSpotify() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET","https://api.spotify.com/v1/albums/{id}",true);
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.setRequestHeader('Authorization', auth);
  xmlhttp.send();

  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
       alert(xmlhttp.responseText);
    }
  }
}
