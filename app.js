var botonEncriptar = document.querySelector("#btn-encriptar");
        var botonDesencriptar = document.querySelector("#btn-desencriptar");
        var botonCopiar = document.querySelector("#btn-copiar");
        var textAreaEncriptador = document.querySelector("#text-encriptador");
        var textAreaDesencriptador = document.querySelector("#text-desencriptador");
        var textAreaResultado = document.querySelector("#text-resultado");
        var botonAvisaCopiado = document.querySelector("#btn-info-copiado");

        textAreaEncriptador.addEventListener("input", function () {
            textAreaEncriptador.value = depuraTexto(textAreaEncriptador.value);
        });

        textAreaDesencriptador.addEventListener("input", function () {
            textAreaDesencriptador.value = depuraTexto(textAreaDesencriptador.value);
        });

        botonEncriptar.addEventListener("click", function () {
            textAreaResultado.value = encripta(textAreaEncriptador.value);
            textAreaEncriptador.value = "";
        });

        botonDesencriptar.addEventListener("click", function () {
            textAreaResultado.value = desEncripta(textAreaDesencriptador.value);
            textAreaDesencriptador.value = "";
        });

        botonCopiar.addEventListener("click", function (event) {
            copiaTexto();
            muestraBotonAvisoCopiado();
        });

        function depuraTexto(textoIngresado) {
            var textoReemplazado = textoIngresado.replace(/á/g, "a");
            textoReemplazado = textoReemplazado.replace(/é/g, "e");
            textoReemplazado = textoReemplazado.replace(/í/g, "i");
            textoReemplazado = textoReemplazado.replace(/ó/g, "o");
            textoReemplazado = textoReemplazado.replace(/ú/g, "u");
            textoReemplazado = textoReemplazado.replace(/[^A-Za-z\s]/g, "").toLowerCase();
            return textoReemplazado;
        }

        function encripta(texto) {
            var textoEncriptado = texto.replace(/e/g, "enter")
                                       .replace(/i/g, "imes")
                                       .replace(/a/g, "ai")
                                       .replace(/o/g, "ober")
                                       .replace(/u/g, "ufat");
            return textoEncriptado;
        }

        function desEncripta(texto) {
            var textoDesencriptado = texto.replace(/enter/g, "e")
                                          .replace(/imes/g, "i")
                                          .replace(/ai/g, "a")
                                          .replace(/ober/g, "o")
                                          .replace(/ufat/g, "u");
            return textoDesencriptado;
        }

        function copiaTexto() {
            var copyText = document.getElementById("text-resultado");
            copyText.select();
            copyText.setSelectionRange(0, 99999); // Para dispositivos móviles
            navigator.clipboard.writeText(copyText.value);
        }

        function muestraBotonAvisoCopiado() {
            botonAvisaCopiado.classList.remove("invisible");
            setTimeout(function () {
                botonAvisaCopiado.classList.add("invisible");
            }, 600);
        }

