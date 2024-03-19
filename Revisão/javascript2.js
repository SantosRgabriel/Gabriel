//Matrizes
//exercicio1

//variáveis
let matriz = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let matrizT = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let matrizRandom = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let matrizRessultado = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let rSoma = 0;
let rSubtracao = 0;
let simetricas = true;

console.log("Teste")

for (let l = 0; l < 3; l++) {

    for (let c = 0; c < 3; c++) {
        matriz[l][c] = parseInt(window.prompt("Por Favor insira um numero na posicao: " + [l] + [c]))
    }


};
console.log(matriz);
//somando valores da matriz
function soma() {
    for (let l = 0; l < 3; l++) {

        for (let c = 0; c < 3; c++) {
            rSoma += matriz[l][c]
        }
    } return rSoma;
};
console.log(soma());
//subtraindo os valores da matriz

function subtrai() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            rSubtracao -= matriz[i][j]
        }
    } return rSubtracao;
};
console.log(subtrai());

//exercicio2

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        matrizT[j][i] = matriz[i][j];
    }
};

console.log(matriz);
console.log(matrizT);


for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matrizT.length; j++) {
        if (matriz[i][j] === matrizT[i][j]) {
        } else {
            simetricas = false;
        }

    }

};
console.log(simetricas ? "Simetrica" : "Nao Simetrica");
//exercicio3    

//criando matriz aleatoria até 10
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        matrizRandom[i][j] = parseInt(Math.random() * 10)

    }
};
console.log(matrizRandom);

//multiplicando matriz
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
        matrizRessultado[i][j] = matriz[i][j] * matrizRandom[j][i]

    }

};

console.log(matrizRessultado);

// end //