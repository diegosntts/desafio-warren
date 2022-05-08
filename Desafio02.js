let x = 3;
let tempoChegada = [-2, -1, 0, 1, 2];

let alunosPresentes = 0;

for (let i = 0; i <= tempoChegada.length; i++) {
    if (tempoChegada[i] <= 0) {
        alunosPresentes++
    }
}
if (alunosPresentes >= x) {
    console.log('Aula normal');
} else {
    console.log('Aula cancelada');
}
