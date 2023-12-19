
const form = document.getElementById("formulario")
const nameInput = document.getElementById("nome")
const emailInput = document.getElementById("email")
const whatsappInput = document.getElementById("whatsapp")
const cidadeInput = document.getElementById("cidade")
const enderecoInput = document.getElementById("endereco")
const enviar = $("#enviar")

console.log(form, nameInput, emailInput)

form.addEventListener("submit", (event) => {
    event.preventDefault()

    if (nameInput.value === "") {
        alert("Por favor preencha o nome");
        return;
    }

    if (emailInput.value === "" || !validaEmail(emailInput.value)) {
        alert("Por favor, preencha o seu email corretamente");
        return;
    }

    if (whatsappInput.value === "" || whatsappInput.length < 9) {
        alert("Por favor, preencha seu whatsapp")
        $('#whatsapp').css("border-color", "red")
        return;

    }

    if (cidadeInput.value === "") {
        alert("Por favor, preencha sua cidade")
        return;
    }

    if (enderecoInput.value === "") {
        alert("Por favor, preencha seu endereço")
        return;
    }

    formulario.submit();
});

function validaEmail(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }
    else {
        return false;
    }
}

$(document).ready(function () {
    $('#whatsapp').mask('(00) 0000-0000')

})

$(document).ready(function () {

    $("#nome").blur(function () {
        let nome = $(this).val();

        if (nome === "" || nome.length < 4) {
            $(this).css("border-color", "red");
            $(this).css("border-radius", "5px");
            enviar.disabled = true
        } else {
            $(this).css("border-color", "green");
            $(this).css("border-radius", "5px");
        }
    });

    $("#email").blur(function () {
        let mail = $("#email").val()
        if (validaEmail(mail) == false) {
            $(this).css("border-color", "red");
            $(this).css("border-radius", "5px");
        }
        else {
            $(this).css("border-color", "green");
            $(this).css("border-radius", "5px");
        }
    })

    $("#whatsapp").blur(function () {
        let whatsapp = $(this).val();

        if (whatsapp === "" || whatsapp.length < 14) {
            $(this).css("border-color", "red")
            $(this).css("border-radius", "5px")
        }
        else {
            $(this).css("border-color", "green");
            $(this).css("border-radius", "5px");
        }
    })

    $("#cidade").blur(function() {
        let cidade = $(this).val();
        
        if(cidade === "" || cidade.length < 3){
            $(this).css("border-color", "red")
            $(this).css("border-radius", "5px")
        }
        else {
            $(this).css("border-color", "green");
            $(this).css("border-radius", "5px");
        }
    })

    $("#endereco").blur(function() {
        let endereco = $(this).val();

        if(endereco === ""){
            $(this).css("border-color", "red")
            $(this).css("border-radius", "5px")
        }
        else {
            $(this).css("border-color", "green");
            $(this).css("border-radius", "5px");
        }
    })

    $("#nome").on("keydown",function(e){
        const tecla = (e.tecla ? e.tecla : e.which);

        if(tecla > 47 && tecla < 58) {
            e.preventDefault();
        }
    })

    $("#cidade").on("keydown",function(e){
        const tecla = (e.tecla ? e.tecla : e.which);

        if(tecla > 47 && tecla < 58){
            e.preventDefault();
        }
    })

    $("#limpar").click(function(){
        $(".formulario__campo").css("border", "black solid 2px")
        $(".formulario__campo").css("border-radius", "0")
    })

    
});