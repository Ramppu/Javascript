function grantToken() { // Maybe window.location could be within a clause, which would only be met when user first opens the site
  $(location).attr("href","https://accounts.spotify.com/authorize?client_id=c7e183fe68ed459e95e67fde31ce89b8&redirect_uri=https://jqueryspotifyapisearch.netlify.com/&scope=user-read-private%20user-read-email&response_type=token&state=123");
} //Grants access token so searches can be made

function search() {
  var url = $(location).attr('href'),
  access_token = url.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1]; //Pulls access token out of the url
  var q = $('#query').val(); //The search query from form
  var type = $('#type').val(); //The search type from form
  var searchUrl = `https://api.spotify.com/v1/search?q=${q}&type=${type}`; //Final search url for the AJAX request, using user inputs
  $.ajax({
    url: searchUrl,
    type: 'GET',
    dataType: 'json',
    headers: {
      'Authorization' : 'Bearer ' + access_token
    },
    success: function(data) {
       var img = $('<img>',{id: 'img'}); //Img element for the picture div
       var text = $('<p>',{id: 'linkP'}); //P element for the 'link' div
       var info = $('<p>',{id: 'infoP'}); //P element for the 'info' div

       //Respone given by the AJAX Request is different based on the search type
       if ($('#type').val() == 'artist') { //If user is searching for artists
         $(img).attr('src',data.artists.items[0].images[0].url);  // artist picture

         $(text).append('Go To The Artist');
         text.click(function(){window.open(data.artists.items[0].external_urls.spotify,'_blank')});

         $(info).append("Artist: " + data.artists.items[0].name);
         $(info).append('<br/>');
         $(info).append("Genre: " + data.artists.items[0].genres[0]);
         $(info).append('<br/>');
         $(info).append("Followers: " + data.artists.items[0].followers.total);
       }
       if($('#type').val() == 'album') { //If user is searching for albums
         $(img).attr('src',data.albums.items[0].images[0].url); //album picture
         $(text).append('Go To The Album');
         text.click(function(){window.open(data.albums.items[0].external_urls.spotify,'_blank')});

         $(info).append("Artist: " + data.albums.items[0].artists[0].name);
         $(info).append('<br/>');
         $(info).append("Album: " + data.albums.items[0].name);
         $(info).append('<br/>');
         $(info).append("Release Date: " + data.albums.items[0].release_date);
         $(info).append('<br/>');
         $(info).append("Song Count: " + data.albums.items[0].total_tracks);
       }
       if($('#type').val() == 'track') { //If user is searching for songs
        $(img).attr('src',data.tracks.items[0].album.images[0].url); // Album pic via song

        $(info).append("Artist: " + data.tracks.items[0].artists[0].name);
        $(info).append('<br/>');
        $(info).append("A Song Within: " + data.tracks.items[0].album.name);
        $(info).append('<br/>');
        $(info).append("Album's Release Date: " + data.tracks.items[0].album.release_date);

        $(text).append('Go To The Album');
        text.click(function(){window.open(data.tracks.items[0].external_urls.spotify,'_blank')});
      }

      $("#picture").html(img);

      $("#info").html(info);
      $("#info").css('cursor','default');

      $("#link").fadeIn(3000);
      $("#link").html(text);
      $("#link").css('cursor','pointer');

    }
  });
}
