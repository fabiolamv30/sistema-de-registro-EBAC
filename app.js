//Imprime un mensaje de bienvenida en la consola
console.log("Sistema EBAC de Registro de Alumnos");


//se define un arreglo de registro con datos de alumnos en EBAC
var registro = [

    //Se muestra lista de alumnos por medio de objetos
  {nombre: "Fabiola Medina", edad: "33", zonaResidencia:"Aguascalientes", nombrePrograma: "IT Para Principiantes", email: "fabiola.mv@hotmail.com"},
  {nombre: "Salvador Alvarez", edad: "34", zonaResidencia:"Guadalajara", nombrePrograma: "Desarrollo Front End", email: "chavalvarez_@hotmail.com"},
  {nombre: "Alejandro Velarde", edad: "35", zonaResidencia:"CDMX", nombrePrograma: "IT Para Principiantes", email: "alejandro.velarde@hotmail.com"},
  {nombre: "Luis Borrego", edad: "32", zonaResidencia:"Merida", nombrePrograma: "Como Potenciar tu Talento", email: "luis.borrego@hotmail.com"},
  {nombre: "Mariana Rizo", edad: "31", zonaResidencia:"Tijuana", nombrePrograma: "Backend Python", email: "mariana.rizo@hotmail.com"},
];


//Función que permite agregar un nuevo alumno al arreglo de registro
function agregarAlumno(){

    //Se le solicita información al usuario para el registro de un nuevo alumno
    var nombre = prompt("Ingresa el nombre del nuevo alumno"); 
    var zonaResidencia = prompt("Ingresa la zona de residencia del alumno");
    var edad = prompt("Ingresa la edad del alumno");
    var nombrePrograma = prompt("Ingresa el nombre del Programa a estudiar");
    var email = prompt("Ingresa el correo email del alumno");

    //Crea un objeto que se llama nuevoAlumno con los datos ingresados
    var nuevoAlumno = {nombre: nombre, edad: edad, zonaResidencia: zonaResidencia, nombrePrograma: nombrePrograma, email: email};

    //Agrega la información de nuevoAlumno al arreglo
    registro.push(nuevoAlumno);

}

//Función para consultar los registro de los alumnos
function consultarRegistros(){

    //Este ciclo for itera sobre cada uno de los registros del arreglo
    for(var i = 0; i < registro.length; i++){

        //Esta lista de console.log permite ver al usuario el registro en la consola
        console.log("Nombre: " + registro[i].nombre);
        console.log("Edad: " + registro[i].edad);
        console.log("Zona de Residencia: " + registro[i].zonaResidencia);
        console.log("Nombre del Programa: " + registro[i].nombrePrograma);
        console.log("Email: " + registro[i].email);
    };
}


//Función que permite generar un nuevo arreglo que no contenga la información del alumno deseado
function eliminarAlumno(){

    //Solicita al usuario el nombre del alumno a eliminar
    var nombreAeliminar = prompt ("Ingresa el nombre del alumno a eliminar");

    //Utiliza el método filter para crear un nuevo arreglo sin el alumno a eliminar
    registro = registro.filter(alumno => alumno.nombre !== nombreAeliminar);
}


//Ciclo do while permite repetir el menú cuando es indicado hasta que no se cumpla la condición
do{

//Variable que toma la elección del usuario para ejecutar la función indicada
var opcion = prompt ("Seleccione una opción: \n1. Agregar registro \n2. Consultar registro de alumnos \n3. Eliminar registro \n4. Salir");


//Se declara este if para dar a elegir al usuario la opción que quiera
if (opcion === "1"){
    agregarAlumno();
} else if (opcion === "2"){
    consultarRegistros();
} else if(opcion === "3"){
    eliminarAlumno();
} else if ("Salida"){
    alert ("Salir del sistema");
} else {
    alert ("Opción inválida, elige otra");
}


    //esta variable nos permite elegir si hacemos otra acción o cerramos el ciclo
    var continuar = prompt ("¿Deseas hacer otra acción? (S/N)");


    //while que se encarga de cerrar el ciclo
} while(continuar === "s");






