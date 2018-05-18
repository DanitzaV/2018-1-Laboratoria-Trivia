window.onload = function() {

    
    document.getElementById("btnName").addEventListener('click', function(){
        var name= document.getElementById("contName").value;
        document.getElementById("name").innerText = name;
        document.getElementById('upperBar').style.display = 'none';
    });

document.getElementById('btnPlay').addEventListener('click', function(){
    var wantToPlay = document.getElementById('s/n').value;
    if (wantToPlay.toLowerCase() == "s") {
       document.getElementById('click1').addEventListener('click', function(){
        var answer1 = document.getElementById('respuesta1').value;
        if (answer1.toLowerCase() == "n") {
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No han egresado hombres</p>"
            "</div>";
        } else {
            document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No han egresado hombres</p>"
            "</div>";
        }
       })
      document.getElementById('click2').addEventListener('click', function(){
        var answer2 = document.getElementById('respuesta2').value;
        if (answer2.toLowerCase() == "n") {
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No hay laboratoria en concepción</p>"
            "</div>";
        } else {
            document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No hay laboratoria en concepción</p>"
            "</div>";
        }
      })
       
   } else {
       document.getElementById("warningMessage").innerText = "Bueno Chao";
   }
})
     
 }