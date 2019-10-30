var url = "https://api.spotify.com/v1/search?q=tania%20bowra&type=artist";
var auth = "BQAgEveRY72-yvZXv-kugJGDz6XZTJ9eFY_Wph0Jb-bgmKzXUD9MM4ITY-zho0R4nl9gUQ4-v5w82mp-CEYozUkdOMADNkBVILfCfVvtzWy83UEdfG7kSEk303xTbh5M-LSG5C_1kfbGVlC6-LGCUHPyV1ZyQ_Jx_hY";

function searchSpotify() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET",url,true);
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.setRequestHeader("Authorization", auth);
  xmlhttp.send();

  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
       console.log(xmlhttp.responseText);
    }
  }
}
