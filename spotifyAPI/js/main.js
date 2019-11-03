function grantToken() {
  window.location.replace("https://accounts.spotify.com/authorize?client_id=c7e183fe68ed459e95e67fde31ce89b8&redirect_uri=https://nostalgic-edison-5f972e.netlify.com&scope=user-read-private%20user-read-email&response_type=token&state=123");
}
function search() {
  //document.getElementById('picture').removeChild(document.getElementById('picture').firstChild);
  //document.getElementById('info').InnerHTML = "";
  //document.getElementById('link').InnerHTML = "";

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
       var img = document.createElement('img'); // Picture
       var text = document.createElement('p');
       var info = document.createElement('p');

       if (document.getElementById('type').value == 'artist') {
         img.src = data.artists.items[0].images[0].url; // artist picture
         var link = document.createTextNode("Go To The Artist");
         text.onclick = function(e) {window.open(data.albums.items[0].external_urls.spotify,'_blank')};
         //MORE ARTIST SHIT
       }
       if(document.getElementById('type').value == 'album') {
         img.src = data.albums.items[0].images[1].url; //album picture
         var link = document.createTextNode("Go To The Album");
         text.onclick = function(e) {window.open(data.albums.items[0].external_urls.spotify,'_blank')};
         text.style.cursor = "pointer";
         text.append(link);
         var count = document.createTextNode("Song Count: " + data.albums.items[0].total_tracks);
         var release = document.createTextNode("Release Date: " + data.albums.items[0].release_date);
         var album = document.createTextNode("Album: " + data.albums.items[0].name);
         var artist = document.createTextNode("Artist: " + data.albums.items[0].artists[0].name);
         info.append(artist);
         info.append(document.createElement('br'));
         info.append(album);
         info.append(document.createElement('br'));
         info.append(release);
         info.append(document.createElement('br'));
         info.append(count);
         //MORE ALBUM SHIT
       }
       if(document.getElementById('type').value == 'track') {
        img.src = data.tracks.items[0].album.images[1].url; // Album pic via song
        var album = document.createTextNode("A Song Within: " + data.tracks.items[0].album.name);
        var release = document.createTextNode("Album's Release Date: " + data.tracks.items[0].album.release_date);//MORE SONG SHIT
        var artist = document.createTextNode("Artist: " + data.tracks.items[0].artists[0].name);
        info.append(artist);
        info.append(document.createElement('br'));
        info.append(album);
        info.append(document.createElement('br'));
        info.append(release);

        var link = document.createTextNode("Go To The Album");
        text.onclick = function(e) {window.open(data.tracks.items[0].external_urls.spotify,'_blank')};
        text.style.cursor = "pointer";
        text.append(link);
      }
      document.getElementById('picture').append(img);

      document.getElementById('info').append(info);
      document.getElementById('info').style.height = "200px";
      document.getElementById('info').style.border = "solid #1DB954";
      document.getElementById('info').style.borderRadius = "25px";

      document.getElementById('link').append(text);
   }
 }
}
//ALBUM SONG COUNT = document.getElementById('info').append(data.albums.items[0].total_tracks);
//ALBUM RELEASE DATE = document.getElementById('info').append(data.albums.items[0].release_date);
//ALBUM NAME = document.getElementById('info').append(data.albums.items[0].name);
//ARTIST NAME FROM ALBUM = document.getElementById('info').append(data.albums.items[0].artists[0].name);
