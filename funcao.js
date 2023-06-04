function Seleciona() {
    var teste = ["Não se preocupe tanto com o futuro.", "Não deixe que as pessoas te desanimem.", "Não tenha medo de mudar.", "Aproveite o momento presente.", "Não se esqueça de cuidar de si mesmo.", "Não se preocupe tanto com os detalhes.", "Não tenha medo de ser você mesmo.", "Não tenha medo de se abrir para novas possibilidades.", "Aproveite a vida ao máximo.", "Não deixe que o trabalho consuma sua vida.", "Não tenha medo de ser diferente.", "Acredite em si mesmo e siga em frente."];
    let gabsn = 0;
    
        for(let i = 0; i < document.getElementsByClassName("ativo").length; i++){
        document.getElementsByClassName("ativo")[i].innerHTML = "";
        document.getElementsByClassName("ativo")[i].classList.replace('ativo', 'answers');
    }
    while (document.signo.questao1[gabsn].checked == false) {
        gabsn++;
 }
document.getElementsByClassName("answers")[gabsn].innerHTML = teste[gabsn];
document.getElementsByClassName("answers")[gabsn].classList.replace('answers', 'ativo');
let margem = 47.2*(gabsn);
margem = margem +"px 0px 0px 0px";
alert(margem)
document.getElementsByClassName("ativo")[0].style.margin = margem

}
