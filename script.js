document.querySelector("form").addEventListener("submit", function(e) {

    e.preventDefault();

    const tipo = document.getElementById("tipoDocumento").value;
    const numero = document.getElementById("numeroDocumento").value;

    // ocultar resultados primero
    document.getElementById("rucResults").classList.add("hidden");
    document.getElementById("dniResults").classList.add("hidden");

    if (tipo === "ruc") {

        if (numero === "20142701597") {

            document.getElementById("rucResults").classList.remove("hidden");

            document.getElementById("razonSocial").value = "MUNICIPALIDAD PROVINCIAL DE BARRANCA";
            document.getElementById("numeroDeLicencia").value = "LIC-2026-001";
            document.getElementById("fechaEmitida").value = "15/03/2026";
            document.getElementById("administrado").value = "Ing. Yuri";
            document.getElementById("lugar").value = "JR. ZAVALA NRO. 500";
            document.getElementById("giro").value = "Gestión Pública Municipal";

        } else {

            alert("RUC no encontrado o incorrecto");

        }

    } else if (tipo === "dni") {

        if (numero === "61072842") {

            document.getElementById("dniResults").classList.remove("hidden");

            document.getElementById("nombres").value = "Eduardo Ilich Zuriel";
            document.getElementById("apellidos").value = "Taboada Huerta";

        } else {

            alert("DNI no encontrado o incorrecto");

        }

    } else {

        alert("Seleccione tipo de documento");

    }

});


function limpiarFormulario() {

    document.getElementById("tipoDocumento").value = "";
    document.getElementById("numeroDocumento").value = "";

    document.getElementById("rucResults").classList.add("hidden");
    document.getElementById("dniResults").classList.add("hidden");

    document.getElementById("razonSocial").value = "";
    document.getElementById("numeroDeLicencia").value = "";
    document.getElementById("fechaEmitida").value = "";
    document.getElementById("administrado").value = "";
    document.getElementById("lugar").value = "";
    document.getElementById("giro").value = "";

    document.getElementById("nombres").value = "";
    document.getElementById("apellidos").value = "";

}