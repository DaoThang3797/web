
var animalContainer = document.getElementById("animal-info");
var lessonNameContainer = document.getElementById("lessonName");
var sectorNameContainer = document.getElementById("sectorName");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://raw.githubusercontent.com/DaoThang3797/web/master/jsonHtml.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();

});

function renderHTML(data) {
  var strLessonName = "";
  var strSectorName = "";

  for (i = 0; i < data.length; i++) {
    strLessonName+='<p>'+data[i].lessonName + '</p>';
    // document.getElementById("lessonName").innerHTML = strLessonName;
    strSectorName+='<p>'+data[i].sector[0].sectorName+'</p>';
    // for(int ii=0;ii<data[i].sector.length;ii++){
    //   // strSectorName+='<p>'+data[i].sector[ii].strSectorName+'</p>';
    //   strSectorName+='<p>'+data[i].sector[ii].sectorName+'</p>';
    //   document.getElementById("sectorName").innerHTML = strSectorName;
    // }
  }


  lessonNameContainer.insertAdjacentHTML('beforeend', strLessonName);
  sectorNameContainer.insertAdjacentHTML('beforeend', strSectorName);
}