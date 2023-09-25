const botao = document.querySelector("#botao");
const botao2 = document.querySelector("#botao2");
const botao3 = document.querySelector("#botao3");
const contadorElemento = document.querySelector("#contador");

let contador = 0;

function aumentarContador()
{
    contador++;
    contadorElemento.textContent = contador;
}
 
function diminuirContador()
{
    if(contador <= 0){
        alert("Não é possível diminuir o valor");
        return;
    }
    contador--;
    contadorElemento.textContent = contador;
}

function zerarContador()
{
    contador = 0;
    contadorElemento.textContent = contador;

}

botao.addEventListener("click", aumentarContador); 
botao2.addEventListener("click", diminuirContador);
botao3.addEventListener("click", zerarContador);