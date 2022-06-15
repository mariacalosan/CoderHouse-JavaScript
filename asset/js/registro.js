function capturar(evento) {
    //previene el comportamiento por defecto dependiendo de la etiqueta de html
    //en este caso es un formulario entonces previene que refresque la pagina. en un ancor <a></a> va a eliminar el funcioonamiento de hrf 
    evento.preventDefault();
    //console.log("capturar");
    // constructor de objeto
    function Usuario(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
    }
    // variables para capturar los datos
    var nombreCapturar = document.getElementById("nombre").value;
    //console.log("nombre:", nombreCapturar);
    var correoCapturar = document.getElementById("correo").value;
    //console.log("correo:", correoCapturar);

    //creando un nuevo usuario
    let nuevoUsuario = new Usuario(nombreCapturar, correoCapturar)
    console.log("nuevo usuario", nuevoUsuario);
}
//agregar los usuarios a una array lo que los va amostrar por medio de una array

var baseDatos = [];
function agregar() {
    //console.log("capturar");
    baseDatos.push(nuevoUsuario);
    //console.log(guardararray);
    document.getElementById("tabla").innerHTML += '<tbody><td>', nuevoUsuario.nombre, '</td><td>', nuevoUsuario.correo, '</td></tbody>';
};

document.getElementById("formulario").addEventListener("submit", capturar)
