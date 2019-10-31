

function searchSpotify() {
  window.location.replace("https://accounts.spotify.com/authorize?client_id=c7e183fe68ed459e95e67fde31ce89b8&redirect_uri=https://projectra.netlify.com/&scope=user-read-private%20user-read-email&response_type=token&state=123");
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
