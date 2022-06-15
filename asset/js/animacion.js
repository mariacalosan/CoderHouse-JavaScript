//animacion que quiero agregar a mi proyecto esta es de prueba

// agregando un metodo que indica que la animacion se va empezar a ejecutar cuando se cargue la pagina web

window.onload = function () {
    //inicializando la variable que va a empezar en 0
    var pocicion = 0;
    //variable que va a tomar el objeto con id de la caja_animacion
    var caja_animacion = document.getElementById('caja_animacion');
    //se crea la variable que a va a temporizar atraves de la funcion la cual va estar llamando acada 10 segundos la funcion de mover
    var temporizar = setInterval(mover, 10);

    //funcion que va a evaluar la posicion 

    function mover(){
        if(pocicion >= 75){
            clearInterval(temporizar);
        }
        else{
            pocicion += 1;
            caja_animacion.style.left = pocicion+ 'px';
        }
    }


};