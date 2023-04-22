function printLinked(){
    var part1 = "www.linkedin.com/in/";
    var part2 = "https://";
    var part3 = String.fromCharCode(114);
    var part4 = "eric-darmusie/"
    var part5 = part2 + part1 + part4;
    var part6 = "mai";
    document.write("<a h"+ part3 +"ef=" + part2 + part1 + part4 + ">"+ part5 +"</a>");
}
    
function printPhone(){
    var part3 = String.fromCharCode(51); 
    var part4 = String.fromCharCode(53); 
    var part5 = String.fromCharCode(56); 
    var part6 = part2 + part1 + part4;
    var part7 = String.fromCharCode(54);
    var part8 = String.fromCharCode(45); 
    var part1 = part4 + part8 + part3 + part7; // 5-36
    var part2 = String.fromCharCode(48) + part7 + part8 + part5; 
    var part9 = part3 + part8 + part4 + part5 + part8 + part5;
    document.write(part2 + part9 + part1);
}
    
function printWrite(){
    var part1 = "eric.darmusie";
    var part2 = Math.pow(2,6);
    var part3 = String.fromCharCode(part2);
    var part4 = "darmuweb.com"
    var part5 = part1 + String.fromCharCode(part2) + part4;
    var part6 = "mai";
    document.write("<a href=" + part6 + "lto" + ":" + part5 + ">" + part1 + part3 + part4 + "</a>");
}
    
function menuFr(){
    document.write(
        '<ul><li><a href="index.html">Présentation</a></li><li><a href="today.html">Aujourd\'hui</a></li><li><a href="history.html">Historique</a></li><li><a href="project.html">Projets</a></li><li><a href="Contact.html">Contact</a></li></ul>'
      );
}

function menuGb(){
    document.write(
        '<ul><li><a href="index.html">Presentation</a></li><li><a href="today.html">Today</a></li><li><a href="history.html">History</a></li><li><a href="project.html">Projects</a></li><li><a href="Contact.html">Contact</a></li></ul>'
    );
}

function presFr(){
    document.write(
        "<h1>Eric Darmusié</h1><h2>A propos de moi</h2><p>Si je vous dis gwbasic, je vous téléporte au début des années 80. <br>C'est à cette période que l'informatique m'a adopté.<br>Pas de GitHub à l'époque, ni de cloud. Mes lignes de code sont reparties au-delà du virtuel.<br>Eloigné de la programmation pendant une décennie, j'ai à coeur de réactualiser mes compétences.<br>Développer est une activité passionnante, dés lors que a créativité y conserve une place raisonnable.</p>"
      );
}

function presGb(){
    document.write(
        "<h1>Eric Darmusié</h1><h2>About me</h2><p>If I tell you gwbasic, I teleport you to the early 80s. <br>It was during this period that the IT adopted me.<br>No GitHub at the time, nor cloud. My lines of code went beyond the virtual.<br>Away from programming for a decade, I care to update my skills.<br>Developing is an exciting activity, as long as there is a reasonable place for creativity.</p>"
      );
}