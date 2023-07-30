//Função para calcular a quantidade de assentos e informar ao usuário.
function calcAssenstos() {
    qtAssentosReserv = 0;
    qtAssentosDp = 192;
    for (var i = 0 ; i < 12 ; i++) {
        for (var j = 0 ; j < 16 ; j++) {
            if (mCinemaL[i][j] == 1) {
                qtAssentosReserv = qtAssentosReserv + 1;
                qtAssentosDp = qtAssentosDp - 1;
            }
        }
    }
    document.getElementById('infos').innerText = qtAssentosReserv;
    document.getElementById('infos2').innerText = qtAssentosDp;
}
