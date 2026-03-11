const cores = [
    "#e63946",
    "#457b9d",
    "#e9c46a",
    "#f4a261",
    "#264653",
    "#6d6675",
    "#1b4332",
    "#0077b6",
    "#9b2226",
    "#780000",
    "#3a0ca3",
    "#4cc9f0",
    "#7b2d8b",
    "#d62828",
    "#023e8a",
    "#386641"
];
const btn = document.getElementById('btnTrocar');
const corAtual = document.getElementById('corAtual');
const contador = document.getElementById('contador');

let totalTrocas = 0;

btn.addEventListener('click', function () {
    const indiceAleatorio = Math.floor(Math.random() * cores.length);
    const corSorteada = cores[indiceAleatorio];
    document.body.style.backgroundColor = corSorteada;
    corAtual.textContent = corSorteada;
    corAtual.style.transform = 'scale(1.2)';
    setTimeout(function () {
        corAtual.style.transform = 'scale(1)';
    }, 150);
    totalTrocas++;
    contador.textContent = totalTrocas;
});