
const form = document.getElementById("formulario")
const nameInput = document.getElementById("nome")
const emailInput = document.getElementById("email")
const whatsappInput = document.getElementById("whatsapp")
const cidadeInput = document.getElementById("cidade")
const enderecoInput = document.getElementById("endereco")

console.log(form,nameInput,emailInput)

form.addEventListener("submit", (event) => {
    event.preventDefault()

    if(nameInput.value === ""){  
    alert("Por favor preencha o nome");
return;
}

    if (emailInput.value === "" || !validaEmail(emailInput.value)){
        alert("Por favor, preencha o seu email corretamente");
        return;
    }

    if(whatsappInput.value === ""){
        alert("Por favor, preencha seu whatsapp")
        return;
    }

    if(cidadeInput.value === ""){
        alert("Por favor, preencha sua cidade")
        return;
    }

    if(enderecoInput.value === ""){
        alert("Por favor, preencha seu endereço")
        return;
    }

    formulario.submit();
});

function validaEmail(email){
    const emailRegex = new RegExp(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );

    if(emailRegex.test(email)) {
        return true;
    }

    return false;
}

