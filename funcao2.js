function Seleciona() {
    var teste = ["Não se preocupe tanto com o futuro.", "Não deixe que as pessoas te desanimem.", "Não tenha medo de mudar.", "Aproveite o momento presente.", "Não se esqueça de cuidar de si mesmo.", "Não se preocupe tanto com os detalhes.", "Não tenha medo de ser você mesmo.", "Não tenha medo de se abrir para novas possibilidades.", "Aproveite a vida ao máximo.", "Não deixe que o trabalho consuma sua vida.", "Não tenha medo de ser diferente.", "Acredite em si mesmo e siga em frente."];
    let gabsn = 0;
    var botao = document.getElementsByClassName("answers");
    for(let i = 0; i < 12; i++){
        var klau = botao[i];
        klau.innerHTML = "";
    }
    while (document.signo.questao1[gabsn].checked == false) {
        gabsn++;
    }
    klau = botao[gabsn];
    klau.innerHTML = teste[gabsn];
}
