var barraProgresso = document.querySelector(".progress");
barraProgresso.style.display = "none";

function validar(nome, idade, cidade)
{
    if(nome == "" || idade == "" || cidade == "")
    {
        document.querySelector("#mostrar").innerHTML = `<div class="alert alert-danger fade show"> 
        <div class="d-flex justify-content-between">
        <span>Preencha todos os campos </span>
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button> </div>`;
        return true;
    }
}
function enviarResposta()
{
    var idade = document.querySelector("#idade").value;
    var nome  = document.querySelector("#nome").value;
    var cidade = document.querySelector("#cidade").value;

    var validarCampos = validar(nome, idade, cidade);
    if(validarCampos == true)
    {
        return;
    }

//
if (idade >= 0 && idade <= 190 ){

} else {
    ExibirAlertaErro("Idade digitada é invalida");
    return
}

var progresso = 0;
var barra = document.querySelector(".progress-bar");
barraProgresso.style.display = "block";

var intervalo = setInterval(function(){
    if (progresso > 100)
    {
        clearInterval(intervalo);
        barraProgresso.style.display = "none";
        document.querySelector("#mostrar").innerHTML = 
        `<div class="alert alert-success fade show" role="alert">
        <span> Olá, bem vindo ao Sesi ${nome} <span>
        <button type="button" class="btn-close" data-bs-dismiss="alert"> </button>
        </div>
        `
    }
    else{
        document.querySelector(".progress-bar").innerHTML= `${progresso}%`;
        progresso++;
        barra.style.width = progresso + "%";
    }
}, 50);
}

function ExibirAlertaErro(texto){
document.querySelector("#mostrar").innerHTML = `<div class="alert alert-danger fade show" role="alert">
<span> ${texto} </span>
<button type="button" class="btn-close" data-bs-dismiss="alert"><button>
<div>`
}