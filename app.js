window.onload = function() {

    
    document.getElementById("btnName").addEventListener('click', function(){
        var name= document.getElementById("contName").value;
        document.getElementById("name").innerText = name;
        document.getElementById('upperBar').style.display = 'none';
    });

document.getElementById('btnPlay').addEventListener('click', function(){
    var wantToPlay = document.getElementById('s/n').value;
    if (wantToPlay.toLowerCase() == "s") {
       
       var answer1 = prompt("¿han egresado hombres en Laboratoria? s/n");
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
       var answer2 = prompt("¿hay laboratoria en concepción? s/n");
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
   } else {
       document.getElementById("warningMessage").innerText = "Bueno Chao";
   }
})
     
 }
