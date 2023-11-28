let count = 1;

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