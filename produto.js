function calcular(){
    validaDescricao();
    let nTotal = quantidade.value * unitario.value;
    total.value = nTotal; 
}

function validaDescricao(){
    if(descricao.value.trim() === ""){
        descricao.style.background = "yellow";
        mensagem.innerHTML = "Preencha a descrição do Produto!";
        $('#alerta').modal('show');
    } else {
        descricao.style.background = "white";
    }
}