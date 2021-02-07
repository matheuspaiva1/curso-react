/*EXPRESSÕES 

1º
const grupoA = 100
const grupoB = 200

const vencedor = grupoA > grupoB ? 'GrupoA Venceu' : 'GrupoB Venceu'

console.log(vencedor)

2º
const grupoA = 500;
const grupoB = 200;

const active = true;
const button = active && 'Botão está ativo';

// RETORNA 'Botão está ativo'

console.log(button);

const grupoA = 500;
const grupoB = 200;

const active = false;
const button = active && 'Botão está ativo';

// RETORNA false

console.log(button);

*/

/* FETCH, ASYNC, FILTER E MAP

FETCH
fetch("https://google.com")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });

ASYNC
async function fetchProdutos(url) {
  const response = await fecht(url)
  const json = await response.json()
  return json
}

const produtos = fetchProdutos(
  'https://google.com',
)

FILTER
const precos = [
  'Credito',
  'R$ 200',
  'R$ 400',
  'Contas Pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados'
]

const precosFiltro = precos.filter((p) => {p.includes('R$')})

console.log(precosFiltro)

MAP
const precos = [
  "Credito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados",
];

const precosFiltro = precos.filter((p) => {
  p.includes("R$");
});
const precosNumeros = precosFiltro.map((preco) =>
  Number(preco.replace("R$ ", ""))
);
console.log(precosNumeros);

*/

/* MODULES
import quadrado from './quadrado.js';
import {numeroAleatorio} from './numeroAleatorio.js';


console.log(quadrado.areaQuadrado(5))
console.log(quadrado.perimetroQuadrado(5))
console.log(numeroAleatorio())

 */

/* ARRAYS 2
const numeros = [10, 5, 20]
const maior = Math.max(...numeros)
console.log(maior)

const numeros2 = [...numeros, 24, 32]
console.log(numeros2)

const carro = {
    cor: 'Azul',
    portas: 4,
};

carroAno = { ...carro, ano: 2008};

console.log(carro);

function showlist(empresa, ...clientes) {
    clientes.forEach((cliente) => {
        console.log(cliente, empresa)
    })
}

showlist('Google', 'Andre', 'Rafael', 'item2')

*/

/* DESESTRUTURANDO ARRAY
function handleMouse({ clientX, clientY }) {
  console.log(clientX, clientY);
}

const frutas = ["banana", "uva"];
const [fruta1, fruta2] = frutas;
console.log(fruta2);

const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];

const [lados, perimetro] = useQuadrado
console.log(lados)
console.log(perimetro(10))

document.addEventListener("click", handleMouse);
*/

/*ARROW-FUNCTION
const upperName = (name) => name.toUpperCase();
console.log(upperName('Andre'));
*/

/* 1º CONCEITO
const menu = {
    seletor: '.principal',
};

console.log(menu.seletor.toUpperCase())
*/

