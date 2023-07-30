let conjunto;
let linha;

//"let" para definir a matriz
let mCinemaL =  [Array(16),Array(16),Array(16),Array(16),Array(16),Array(16),Array(16),Array(16),Array(16),Array(16),Array(16),Array(16),]

let qtAssentosDp = 0
let qtAssentosReserv = 0;

//"for" para zerar toda a matriz
for (var i = 0 ; i < 12 ; i++) {
    for (var j = 0 ; j < 16 ; j++) {
        mCinemaL[i][j] = 0;
        console.log(mCinemaL[i][j]);
        qtAssentosDp = qtAssentosDp + 1;
    }
}
console.log(qtAssentosReserv);
console.log(qtAssentosDp);
document.getElementById('infos').innerText = qtAssentosReserv;
document.getElementById('infos2').innerText = qtAssentosDp;

/*
Função para realizar a reserva de assentos.
Os assentos reservador ficam salvos em uma matriz 12X16.
*/
function reservar() {
    linha = prompt("Informe a linha");
    if (linha > 0 || linha < 0) {
        alert("Não é uma entrada válida");  
    }
    wordToNumber();

    var fileira = prompt("informe a fileira");
    var fileiraConvert = fileira - 1;
    if (fileira <= 0 || fileira >= 17) {
        alert("Não é uma entrada válida");
    }
    
    if (mCinemaL[linhaConvert][fileiraConvert] == 1) {
        alert("Este assento já está reservado");
    } else {
        conjunto = linha + fileira;
        alert(`Assento ${conjunto} reservado com sucesso!`)
        document.getElementById(conjunto).style.backgroundColor = 'red';
        mCinemaL[linhaConvert][fileiraConvert] = 1;
        console.log(`${conjunto} = ${mCinemaL[linhaConvert][fileiraConvert]}`);

        //Função para calcular a quantidade de assentos e informar ao usuário.
        calcAssenstos();
    }
}

/*
Função para realizar o cancelamento de reservas.
*/
function cancelar() {
    linha = prompt("Informe a linha");
    if (linha > 0 || linha < 0) {
        alert("Não é uma entrada válida");  
    }
    wordToNumber();

    var fileira = prompt("informe a fileira");
    var fileiraConvert = fileira - 1;
    if (fileira <= 0 || fileira >= 17) {
        alert("Não é uma entrada válida");
    }

    if (mCinemaL[linhaConvert][fileiraConvert] == 0) {
        alert("Este assento ainda não foi reservado")
    } else {
        conjunto = linha + fileira;
        alert(`Assento ${conjunto} cancelado com sucesso!`)
        document.getElementById(conjunto).style.backgroundColor = '#00158e';
        mCinemaL[linhaConvert][fileiraConvert] = 0;
        console.log(`${conjunto} = ${mCinemaL[linhaConvert][fileiraConvert]}`);
    }

    //Função para calcular a quantidade de assentos e informar ao usuário.
    calcAssenstos();
}

