function printLinked(){
    var part1 = "www.linkedin.com/in/";
    var part2 = "https://";
    var part3 = String.fromCharCode(114);
    var part4 = "eric-darmusie/"
    var part5 = part2 + part1 + part4;
    var part6 = "mai";
    document.write("<a h"+ part3 +"ef=" + part2 + part1 + part4 + ">"+ part5 +"</a>.");
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
    var part4 = "darmuweb.fr"
    var part5 = part1 + String.fromCharCode(part2) + part4;
    var part6 = "mai";
    document.write("<a href=" + part6 + "lto" + ":" + part5 + ">" + part1 + part3 + part4 + "</a>.");
}
    
