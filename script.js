document.getElementById('VerSenha').addEventListener('click', function() {
    var IconOlhoAberto = document.getElementById("IconVendoSenha");
    var IconOlhoFechado = document.getElementById("IconNãoVendoSenha");
    var InputdaSenha = document.getElementById("InputSenha");
    
    if (window.getComputedStyle(IconOlhoFechado).display === "none") {
        InputdaSenha.type = "password"
        IconOlhoFechado.style.display = "block";
        IconOlhoAberto.style.display = "none";
    } else {
        InputdaSenha.type = "text";
        IconOlhoFechado.style.display = "none";
        IconOlhoAberto.style.display = "block";
    }
});
