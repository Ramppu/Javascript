function grantToken() {
  window.location.replace("https://accounts.spotify.com/authorize?client_id=c7e183fe68ed459e95e67fde31ce89b8&redirect_uri=https://nostalgic-edison-5f972e.netlify.com&scope=user-read-private%20user-read-email&response_type=token&state=123");
} //Grants access token so searches can be made

function search() {
  //document.getElementById('picture').removeChild(document.getElementById('picture').firstChild);
  //document.getElementById('info').InnerHTML = "";
  //document.getElementById('link').InnerHTML = "";

  var url = document.URL,
  access_token = url.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1]; //Pulls access token out of the url
  var q = document.getElementById('query').value; //The search query from form
  var type = document.getElementById('type').value; //The search type from form
  var auth = `Bearer ${access_token}`; //Access token for the AJAX request
  var searchUrl = `https://api.spotify.com/v1/search?q=${q}&type=${type}`; //Final search url for the AJAX request
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET",searchUrl,true);
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.setRequestHeader("Authorization", auth);
  xmlhttp.send(); //Completed AJAX request with all the required information

  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
      console.log(xmlhttp.responseText);
       var data = JSON.parse(xmlhttp.responseText);
       var img = document.createElement('img'); //Img element for the picture div
       var text = document.createElement('p'); //P element for the link div
       var info = document.createElement('p'); //P element for the info div

       //Respone given by the AJAX Request is different based on the search type
       if (document.getElementById('type').value == 'artist') { //If user is searching for artists
         img.src = data.artists.items[0].images[1].url; // artist picture
         var link = document.createTextNode("Go To The Artist");
         text.onclick = function(e) {window.open(data.artists.items[0].external_urls.spotify,'_blank')}; //Onclick function for the previous text node that takes the user to the artist page
         text.append(link);
         text.style.cursor = "pointer";

         var artist = document.createTextNode("Artist: " + data.artists.items[0].name);
         var followers = document.createTextNode("Followers: " + data.artists.items[0].followers.total);
         var genre = document.createTextNode("Genre: " + data.artists.items[0].genres[0]);
         info.append(artist);
         info.append(document.createElement('br'));
         info.append(genre);
         info.append(document.createElement('br'));
         info.append(followers);
         //MORE ARTIST SHIT
       }
       if(document.getElementById('type').value == 'album') { //If user is searching for albums
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
       if(document.getElementById('type').value == 'track') { //If user is searching for songs
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
      $("#picture").html(img);//document.getElementById('picture').innerHTML = `${img}`;

      $("#info").html(info);//document.getElementById('info').innerHTML = `${info}`;

      document.getElementById("info").classList.add("info");

      $("#link").html(text);//document.getElementById('link').innerHTML = `${text}`;
   }
 }
}
//ALBUM SONG COUNT = document.getElementById('info').append(data.albums.items[0].total_tracks);
//ALBUM RELEASE DATE = document.getElementById('info').append(data.albums.items[0].release_date);
//ALBUM NAME = document.getElementById('info').append(data.albums.items[0].name);
//ARTIST NAME FROM ALBUM = document.getElementById('info').append(data.albums.items[0].artists[0].name);
