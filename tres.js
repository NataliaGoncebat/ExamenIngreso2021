function mostrar()/* Bienvenidos. debemos alquilar el servicio de transporte para llegar a Mar 
	del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos: 14:54hs/15.39
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600. Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que tiene mas de 60 años , el precio final tiene un 
descuento del 25%, que solo mostramos si corresponde.*/
{
	let ;
	let ;
	let ;
	let ;
	let ;
	let ;
	let ;
	let ; 
	let ;
	let ;
	let respuesta="s";
	let contF=0;
	let contM=0;
	let contNB=0;
	let acum=0;
	let acum=0;
	let acum=0;
	let flag=1;
	let flag2=1;
	

//for(let=i; i<5;i++)  o 
do{   
	nombre= parseInt(prompt("ingrese nombre:"));
	
	estCivil= prompt("Ingrese estCivil: soltero/ casado/ viudo");
	while (estCivil != "soltero" && estCivil !="casado" && estCivil != "viudo"){
		tipo = prompt("Error. Reingrese estCivil: soltereo/ casado/ viudo");
	}

	edad= parseInt(prompt("ingrese edad mayor a 17:"));
	while (isNaN(edad) || edad <18) {
	edad= parseInt(prompt("Error, reingrese edad mayor a 17:"));
	}
	temp= parseInt(prompt("ingrese temperatura:"));

	sexo= prompt("Ingrese sexo: femenino/ masculino/ nobinario");
	while (sexo != "femenino" && sexo !="masculino" && sexo != "nobinario"){
		tipo = prompt("Error. Reingrese sexo: femenino/ masculino/ nobinario");
	}
	precio = parseFloat(prompt("ingrese precio entre 100 y 300"));
    while (isNaN(precio) || precio <= 100 || precio > 300) {
      precio = parseInt(prompt("Error. Reingrese precio entre 100 y 300"));
    }

     


	//...................................................................
	respuesta= prompt("desea ingresar mas pasajeros?");
	}while(respuesta == "s");

}
	if(flag == 0){ 
		console.log(` ${}`);
	}else{ 
		console.log(`a)${} `);
	//-------------------------------------------------------

	if(flag == 0){ 
		console.log(` ${}`);
	}else{ 
		console.log(`b)  ${} `);
	//------------------------------------------------------------
	if(flag == 0){ 
		console.log(` ${}`);
	}else{ 
		console.log(`c)${} `);
	//-------------------------------------------------------

	if(flag == 0){ 
		console.log(` ${}`);
	}else{ 
		console.log(`d)  ${} `);
	//------------------------------------------------------------
}	/* 	let nombre;
let estCivil;
let edad;
let temp;
let sexo;
let precio=600;
let flagMayor60=1;
let contViudoMayor; 
let flagMujerMasJovenSolt=1;
let edadMujerSoltJov;
let nombreMujerSoltJov;
let respuesta="s";
let contF=0;
let contM=0;
let contNB=0;
let contMay60=0;
let precioConDesc; */

//a) La cantidad de personas con estado "viudo" de mas de 60 años.

//b) el nombre y edad de la mujer soltera mas joven.

//d) si hay mas del 50% de los pasajeros que tiene mas de 60 años , el precio final tiene un 
//descuento del 25%, que solo mostramos si corresponde.
/*


do{   
	Nombre= parseInt(prompt("ingrese nombre:"));
	
	estCivil= prompt("Ingrese estCivil: soltero/ casado/ viudo");
	while (estCivil != "soltereo" && estCivil !="casado" && estCivil != "viudo"){
		tipo = prompt("Error. Reingrese estCivil: soltereo/ casado/ viudo");
	}
	edad= parseInt(prompt("ingrese edad:"));
	while (isNaN(edad) || edad <=7) {
	edad= parseInt(prompt("Error, reingrese edad:"));
}
	temp= parseInt(prompt("ingrese temperatura:"));
	while (isNaN(temp) || edad <=0) {
		temp= parseInt(prompt("Error, reingrese temperatura:"));

	sexo= prompt("Ingrese sexo: femenino/ masculino/ nobinario");
	while (sexo != "femenino" && sexo !="masculino" && sexo != "nobinario"){
		tipo = prompt("Error. Reingrese sexo: femenino/ masculino/ nobinario");
	}


//a) La cantidad de personas con estado "viudo" de mas de 60 años.

if(estCivil == "viudo"){
	if(flagViudoMayor || edad>60){
		contMayorDe60++;
		flagViudoMayor=0;
	}
}
 //b) el nombre y edad de la mujer soltera mas joven.

if(sexo == "femenino" ){ 
	if (estCivil == "soltero"){
		if(flagFemSolt || edad < edadMujerSolt){
			nombreMujerSoltJov=nombre;
			edadMujerSoltJov=edad;
			flagFemSoltJov=0;
		}
	}

}


if(flagPasMayores || contPasMayorescont > 2){
	precioFinalConDesc = precio - (precio*0.25);
	flagPasMayores=0;
}

seguir=prompt("desea agregar mas pasajeros? s/n");
}while(seguir == "s");
	
------------------------------------------------------------------------



if(flagViudoMayor == 0){
	console.log(`a) No ingresaron viudos mayores a 60 años.`);
}else{ 
console.log(`a)Hay ${contMayorDe60} viudos de mas de 60 años.`);
}

if(flagFemSoltJov == 0){
	console.log(`a) No ingresaro nmujeres de PAMI  .`);
}else{ 
console.log(`b) La mujer de PAMI mas joven es ${nombreMujerSoltJov} y tiene ${edadMujerSoltJov}.`);
}

console.log(`c)El viaje total sin descuento sale ${precio}.`);

if(flagPasMayores == 0){
	console.log(`d) No hay descuento porque menos del 50% de los pasajeros tienen 60 años.`);
}else{ 
console.log(`d) como hay mas del 50% de los pasajeros con mas de 60 años , el precio final con descuento es de ${precioFinalConDesc}`);
}*/
}


