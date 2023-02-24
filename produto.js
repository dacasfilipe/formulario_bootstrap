function calcular(){
    if(validaDescricao() && validaQuantidade() && validaUnitario()){
        let nTotal = quantidade.value * unitario.value;
        total.value = nTotal;
    }     
}
function validaDescricao(){
    if(descricao.value.trim() === ""){
        descricao.style.background = "yellow";
        mensagem.innerHTML = "Preencha a descrição do Produto!";
        $('#alerta').modal('show');
        return false;
    } else {
        descricao.style.background = "white";
        return true;
    }
}

function validaQuantidade(){
    //verifica se o campo está vazio
    if(quantidade.value.trim() === ""){
        quantidade.style.background = "yellow";
        mensagem.innerHTML = "Preencha a quantidade do Produto!";
        $('#alerta').modal('show');
        return false;
    } else {
        if(quantidade.value > 0 && quantidade.value <= 1000){
            quantidade.style.background = "white";
            return true;
        }else{
            quantidade.style.background = "yellow";
            mensagem.innerHTML = "O valor da quantidade deve estar entre 1 e 1000!";
            $('#alerta').modal('show');
            return false;
        }
        
    }
}

function validaUnitario(){
    //verifica se o campo está vazio
    if(unitario.value.trim() === ""){
        unitario.style.background = "yellow";
        mensagem.innerHTML = "Preencha a valor unitário do Produto!";
        $('#alerta').modal('show');
        return false;
    } else {
        unitario.style.background = "white";
        return true;
    }
}