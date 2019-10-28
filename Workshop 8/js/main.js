var text = '{ "employees" : [' +
  '{ "id":"0" , "firstName":"John" , "lastName":"Doe" },' +
  '{ "id":"1" , "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "id":"2" , "firstName":"Peter" , "lastName":"Jones" } ]}';

var tbl = JSON.parse(text);

function printFL() {
  for (var i = 0; i < text.length;i++) {
      document.getElementById('FL').append(tbl.employees[i].firstName + ' ' + tbl.employees[i].lastName);
      document.getElementById('FL').append(document.createElement("br"));
  }
}

function printALL() {
      document.getElementById('ALL').append(JSON.stringify(tbl));
}

function webRaw() {
  let req = new Request('https://api.myjson.com/bins/18bfgz');
  fetch(req)
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
        document.getElementById('rawdata').innerHTML = JSON.stringify(data);
    });
}

function web() {
  let req = new Request('https://api.myjson.com/bins/18bfgz');
  fetch(req)
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
        for(var i = 0; i < data.length;i++) {
          document.getElementById('rawdata').append(data[i].name.first + ' ' + data[i].name.last + ' ' + data[i].age);
          var img = document.createElement("img");
          img.src = data[i].picture;
          img.style.width = '10%'
          img.style.height = 'auto'
          document.getElementById('rawdata').append(img);
          document.getElementById('rawdata').append(document.createElement("br"));
        }
    });
}
