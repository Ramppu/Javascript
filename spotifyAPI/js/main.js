

function searchSpotify() {
  window.location.replace("https://accounts.spotify.com/authorize?client_id=c7e183fe68ed459e95e67fde31ce89b8&redirect_uri=https://nostalgic-edison-5f972e.netlify.com&scope=user-read-private%20user-read-email&response_type=token&state=123");
}
function search() {
  var url = document.URL,
  access_token = url.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
  var q = document.getElementById('artist').value;
  var auth = `Bearer ${access_token}`;
  var searchUrl = `https://api.spotify.com/v1/search?q=${q}&type=artist`;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET",searchUrl,true);
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.setRequestHeader("Authorization", auth);
  xmlhttp.send();

  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
      console.log(xmlhttp.responseText);
   }
 }
}
