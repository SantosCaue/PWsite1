function Seleciona(){
let gabsn = 0;

while(document.signo.questao1[gabsn].checked == false){
gabsn++;
}
var teste = gabsn;
gabsn = gabsn + 1;
switch(gabsn){
    case 1:
        document.getElementById(teste).innerHTML="Não se preocupe tanto com o futuro.";
    break;
    case 2: 
        document.getElementById(teste).innerHTML="Não deixe que as pessoas te desanimem.";
    break;
    case 3:
        document.getElementById(teste).innerHTML="Não tenha medo de mudar.";
    break;
    case 4:
        document.getElementById(teste).innerHTML="Aproveite o momento presente.";
    break;
    case 5:
        document.getElementById(teste).innerHTML="Não se esqueça de cuidar de si mesmo.";
    break;
    case 6:
        document.getElementById(teste).innerHTML="Não se preocupe tanto com os detalhes.";
    break;
    case 7:
        document.getElementById(teste).innerHTML="Não tenha medo de ser você mesmo.";
    break;
    case 8:
        document.getElementById(teste).innerHTML="Não tenha medo de se abrir para novas possibilidades.";
    break;
    case 9:
        document.getElementById(teste).innerHTML="Aproveite a vida ao máximo.";
    break;
    case 10:
        document.getElementById(teste).innerHTML="Não deixe que o trabalho consuma sua vida.";
    break;
    case 11:
        document.getElementById(teste).innerHTML="Não tenha medo de ser diferente.";
    break;
    case 12:
        document.getElementById(teste).innerHTML="Acredite em si mesmo e siga em frente.";
    break;
}
}