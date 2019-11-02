function grantToken() {
  window.location.replace("https://accounts.spotify.com/authorize?client_id=c7e183fe68ed459e95e67fde31ce89b8&redirect_uri=https://nostalgic-edison-5f972e.netlify.com&scope=user-read-private%20user-read-email&response_type=token&state=123");
}
function search() {
  var url = document.URL,
  access_token = url.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
  var q = document.getElementById('query').value;
  var type = document.getElementById('type').value;
  var auth = `Bearer ${access_token}`;
  var searchUrl = `https://api.spotify.com/v1/search?q=${q}&type=${type}`;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET",searchUrl,true);
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.setRequestHeader("Authorization", auth);
  xmlhttp.send();

  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
      console.log(xmlhttp.responseText);
       var data = JSON.parse(xmlhttp.responseText);
       var img = document.createElement('img');
       img.src = data.artists.items[0].images[0].url; // artist picture
       //  img.src = data.albums.items[0].images[0].url; album picture
       // img.src = data.tracks.items[0].album.images[0].url; //Album picture via song search
      document.getElementById('test').append(img);
   }
 }
}
