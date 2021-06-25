function validar(e) {
    if (document.getElementById("flexCheckDefault").checked) {
        return true;
    }
    else {
        alert("El formulario no puede ser envia si no acepta los terminos");
        return false;
    }
}