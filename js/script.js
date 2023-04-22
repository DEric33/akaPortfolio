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
        '<ul><li><a href="index.html">Présentation</a></li><li><a href="today.html">Aujourd\'hui</a></li><li><a href="history.html">Historique</a></li><li><a href="project.html">Projets</a></li><li><a href="contact.html">Contact</a></li></ul>'
      );
}

function menuGb(){
    document.write(
        '<ul><li><a href="index.html">Presentation</a></li><li><a href="today.html">Today</a></li><li><a href="history.html">History</a></li><li><a href="project.html">Projects</a></li><li><a href="contact.html">Contact</a></li></ul>'
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

function todayFr(){
    document.write(
    "<h1>Aujourd'hui</h1><p>Gérer des sites Wordpress ou/et créer quelques scripts personnels en php ne fait pas de soi un développeur professionnel.<br>Bien qu\'étant toujours curieux de l\'évolution d\'Internet, mon milieu professionnel m\'avait éloigné des ompétences nécessaires.<br>Aujourd\'hui, j\'ai retrouvé mon appétance pour le développement, grace à une formation (trop rapide) de développeur java Fullstack.<br>      Le titre est ronflant, mais le délai de 3 mois n'est en fait qu'une préparation pour, au mieux enchainer sur une alternance.<br>Clairement, heureusement que j\'ai découvert Codacademy.<br>Certes, étant francophone, c\'est un peu compliqué au départ, mais une fois les bonnes méthodes mises en place, la progression peut s\'installer.<br>Il sera toujours temps de revenir sur la constellation Java après avoir solidifié les bases.<br>On ne construit pas de la confiance sur de l\'aléatoire. Pour le coup, la confiance, c\'est totalement binaire: ou 0 ou 1 !<br></p>")
    ;
}

function todayGb(){
    document.write(
        "<h1>Today</h1><p>Managing Wordpress sites or/and creating some personal scripts in php does not make a professional developer out of oneself.<br>Although I was always curious about the evolution of the Internet, my professional environment had taken me away from the necessary skills.<br>Today, I regained my appetite for development, thanks to a (too quick) training as a Fullstack java developer.<br>The title is high-sounding, but the 3-month period is in fact only a preparation for, at best, continuing on a work-study program.<br>Clearly, fortunately I discovered Codacademy.<br>Of course, being French-speaking, it's a bit complicated at first, but once the right methods are in place, progress can be made.<br>There will always be time to return to the Java constellation after solidifying the basics.<br>You don't build trust on randomness. For once, trust is totally binary: either 0 or 1!<br></p>"
    )
}

function historyFr(){
    document.write(
        "<h1>Historique</h1><p>Mes premiers codes étaient en gwbasic et il m'a fallu quelques années pour devenir analyste programmeur et exploiter principalement Delphi.<br>Le C (et Merise aussi) m'a poussé dans la logique, tandis que VB ne m'a jamais passioné.</p><p>Si mariaDB se trouve dans cette section, c'est parce qu'elle a accompagné la montée en compétence de php au fil du temps. Et de mariaDB à SQL, le lien est fait.</p>"
    )
}

function historyGb(){
    document.write(
"<h1>History</h1><p>My first codes were in gwbasic and it took me a few years to become a programmer analyst and exploit mainly Delphi.<br>C (and Merise too) pushed me into logic, while VB did not has never been passionate.</p><p>If mariaDB is in this section, it is because it has accompanied the rise in competence of php over time. And from mariaDB to SQL, the link is made.</p>"
    )
}
        
function projectFr(){
    document.write(
        "<h1>Projets</h1><h2>Chicken</h2><p>A la fin du millénaire, j'ai développé l'ntralité du site de Sasso. Le site a été remanié depuis, ce qui est logique puisqu'il avait été construit uniquement avec du HTML.<br>Un site rempli de \"poules de compétition\".</p><h2>Todo List</h2><p>J'avais dans le cadre professionnel développé une application pense-bête qui se logeait à côté de l'heure.<br>J'avais repris l'idée plus tard pour en faire un shareware appelé justefaisle.<br>Ce logiciel reprenait l'idée d'être accessible depuis le sysicon. Il étaot possible d'enregistrer et de gérer les tâches quotidiennes et programmées.</p>"
    )
}

function projectGb(){
    document.write(
        "<h1>Projects</h1><h2>Chicken</h2><p>At the end of the millennium, I developed the entire Sasso site. The site has since been redesigned, which makes sense since it was built with just HTML.<br>A site full of \"competition hens\".</p><h2>Todo List</h2><p >In the professional context, I had developed a reminder application that was placed next to the time.<br>I took up the idea later to make it a shareware called just do it.<br>This software took up the idea of being accessible from the sysicon. It was possible to save and manage daily and scheduled tasks.</p>"
    )
}
