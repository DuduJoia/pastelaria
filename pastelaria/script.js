
/*document.getElementById("radio1").checked = true

setInterval(function () {
    proximaImagem();
}, 6000)

function proximaImagem() {
    count++;
    if (count > 5) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;

}
*/
const form = document.querySelector("#form")
const nameInput = document.querySelector("#nome")
const emailInput = document.querySelector("#email")
const whatsappInput = document.querySelector("#whatsapp")
const cidadeInput = document.querySelector("#cidade")
const enderecoInput = document.querySelector("#endereco")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nameInput.value === "")  
    alert("Por favor preencha o nome")
return;
})


/*
    if (emailinput.value === "" || !validaEmail(emailinput.value))
    formulario.submit();
});

function validaEmail(email){
    const emailRegex = new RegExp(
        /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
    );

    if(emailRegex.test(email)) {
        return true;
    }

    return false;
}