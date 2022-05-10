// Crear objeto con 3 propiedades


/*const mascota ={
  nombre: "tyrone",
  raza: "pitbull",
  edad: "5 años perrunos",
}

// hacen console.log de esas 3 propiedades
console.log(mascota);
console.log(mascota.nombre);
console.log(mascota.raza);
console.log(mascota.edad);

console.log("-----------------------------------------------------------------");

// crean una funcion constructora para otro objeto

function jerbos (nombre,papasHumanos,estado){
  this.nombre=nombre;
  this.papasHumanos=papasHumanos;
  this.estado=estado;
}
// crean una instancia de esa función constructora
const jerbo = new jerbos ("test","maria camila","muy feliz y pachoncito");
console.log(jerbo)

/* Una constructora con la sintaxis nueva
* un metodo para la constructora que haga un console.log
* un metodo para la constructora que cambie alguna propiedad interna
* crear una instancia de ese objeto
* consologearlo
*/


class Mascota{
  constructor(nombre,raza,edad,estado,papasHumanos,adoptado){
    this.nombre=nombre;
    this.raza=raza;
    this.edad=edad;
    this.estado=estado;
    this.papasHumanos=papasHumanos;
    this.adoptado=adoptado;
  }
  presentar (){
    console.log("mi mascota es "+this.nombre);
  }
}

const mascotas1 = new Mascota("jest","jerbil",2,"muy intenso y mimado","maria camila y carlos","ya esta adoptado");
mascotas1.presentar();

const mascotas2 = new Mascota("rest","jerbil",2,"muy intenso y mimado","","no esta adoptado");
mascotas2.presentar();

if (mascotas1.adoptado == "ya esta adoptado"){
  console.log(mascotas1.adoptado);
}
else{
  console.log("hola mi nombre es", mascotas1.nombre,"y estoy en adopcion");
}

if (mascotas2.adoptado == "ya esta adoptado"){
  console.log(mascotas2.adoptado);
}
else{
  console.log("hola mi nombre es", mascotas2.nombre,"y estoy en adopcion");
}

alert("hola mi nombre",Mascota.nombre);