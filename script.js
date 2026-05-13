const inputDocumento = document.getElementById("numeroDocumento");


// SOLO NÚMEROS
inputDocumento.addEventListener("input", function () {

    this.value = this.value.replace(/\D/g, "");

    const tipo = document.getElementById("tipoDocumento").value;

    // LIMITE DNI Y RUC
    if (tipo === "dni") {

        this.value = this.value.slice(0, 8);

    } else if (tipo === "ruc") {

        this.value = this.value.slice(0, 11);

    }

});



document.querySelector("form").addEventListener("submit", function(e) {

    e.preventDefault();

    const tipo = document.getElementById("tipoDocumento").value;
    const numero = document.getElementById("numeroDocumento").value;

    const mensajeError = document.getElementById("mensajeError");

    // limpiar errores
    mensajeError.textContent = "";

    // ocultar resultados
    document.getElementById("rucResults").classList.add("hidden");
    document.getElementById("dniResults").classList.add("hidden");



    // VALIDACIÓN RUC
    if (tipo === "ruc") {

        if (numero.length !== 11) {

            mensajeError.textContent = "El RUC debe tener 11 dígitos";
            return;
        }

        if (numero === "20142701597") {

            document.getElementById("rucResults").classList.remove("hidden");

            document.getElementById("razonSocial").value = "MUNICIPALIDAD PROVINCIAL DE BARRANCA";
            document.getElementById("numeroDeLicencia").value = "LIC-2026-001";
            document.getElementById("fechaEmitida").value = "15/03/2026";
            document.getElementById("administrado").value = "Ing. Yuri";
            document.getElementById("lugar").value = "JR. ZAVALA NRO. 500";
            document.getElementById("giro").value = "Gestión Pública Municipal";

        } else {

            mensajeError.textContent = "RUC incorrecto o no encontrado";

        }

    }



    // VALIDACIÓN DNI
    else if (tipo === "dni") {

        if (numero.length !== 8) {

            mensajeError.textContent = "El DNI debe tener 8 dígitos";
            return;
        }

        if (numero === "61072842") {

            document.getElementById("dniResults").classList.remove("hidden");

            document.getElementById("nombres").value = "Eduardo Ilich Zuriel";
            document.getElementById("apellidos").value = "Taboada Huerta";

        } else {

            mensajeError.textContent = "DNI incorrecto o no encontrado";

        }

    }



    else {

        mensajeError.textContent = "Seleccione un tipo de documento";

    }

});



function limpiarFormulario() {

    document.getElementById("tipoDocumento").value = "";
    document.getElementById("numeroDocumento").value = "";

    document.getElementById("mensajeError").textContent = "";

    document.getElementById("rucResults").classList.add("hidden");
    document.getElementById("dniResults").classList.add("hidden");

}