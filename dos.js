function mostrar() /* 
-----------------------------------------------------------------------------------
                               CORREJIDA
 -------------------------------------------------------------------------------------                              
 Realizar el algoritmo que permita ingresar los datos de 
los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota  */ {

  let nombre;
  let tipo;
  let cant;
  let sexo;
  let nota;
  let seguir= "s";
  let mayorNotaNoMasc;
  let flagNoMasc=1;
  let nombreNotaNoMasc;
  let flagLibre=1;
  let nombreLibreMenor;
  let edadLibreMenor;
  let acumF=0;
  let acumM=0;
  let acumNB=0;
  let contNF=0;
  let contNM=0;
  let contNNB=0;
  let contF=0;
  let contM=0;
  let contNB=0;
  let promF=0;
  let promM=0;
  let promNB=0;
  let flagRemota=1;
  let mayorCantRemota;
  let nombreMayorRemota;
  let edadMayorRemota;
  let acumNF=0;
  let acumNM=0;
  let acumNNB=0;
  //let acumNotaF;

  



  do{
    nombre = prompt("Ingrese nombre");

tipo = prompt("Ingrese tipo: libre/ presencial/ remota").toLowerCase();
while (tipo != "libre" && tipo !="presencial" && tipo != "remota"){
	tipo = prompt("Error. Reingrese tipo: libre/ presencial/ remota");
}

nota= parseInt(prompt("ingrese nota entre 0 y 10"));
while (isNaN(nota) || cant <0 || cant >10) {
	nota= parseInt(prompt("Error, reingrese nota entre 0 y 10"));
}


cant= parseInt(prompt("ingrese cantidad entre 0 y 8"));
while (isNaN(cant) || cant <=0 || cant >8) {
	cantidad= parseInt(prompt("Error, reingrese cantidad entre 0 y 8"));
}

sexo = prompt("Ingrese sexo: femenino/ masculino/ nobinario");
while (sexo != "femenino" && sexo !="masculino" && sexo != "nobinario"){
	tipo = prompt("Error. Reingrese sexo: femenino/ masculino/ nobinario");
}
 
edad= parseInt(prompt("ingrese edad:"));
while (isNaN(edad) || edad <=0) {
	edad= parseInt(prompt("Error, reingrese edad:"));
}

//a- mejor promedio q no sea m. de los f y nb el de mayor nota.
//mejor nota no masculino

if(sexo != "masculino"){
  if (flagNoMasc || nota> mayorNotaNoMasc ){  //flagNpMAsc: cuando encontraste el primero. flag1 si estoy en la primer iteracion, flag 0 en otras
    mayorNotaNoMasc=nota;
    nombreNotaNoMasc=nombre;
    flagNoMasc=0;
}//buscar menores que sean libres
}
if(tipo == "libre" && (flagLibre|| edad< edadLibreMenor)){
    edadLibreMenor=edad;
    nombreLibreMenor=nombre;
    flagLibre=0;
  }
  switch (sexo){
    case "femenino":
      acumNF = nota;
      contNF++;
    break;
    case "masculino":
      acumNM = nota;
      contNM++;
    break;
    case "nobinario":
     acumNNB = nota;
    contNB++;
    break;
  }//edad y nombre del que cursa mas materias que no sean en forma remota
  if(tipo != "remota" && flagRemota || cant > mayorCantRemota ){
    nombreMayorRemota=nombre;
    edadMayorRemota=edad;
    flagRemota=0;
  }



//..............................................
    seguir = prompt("quiere ingresar otro alumno?(s/n)");
  }while (seguir=="s");

  if(contF !=0){ 
    promF=acumNF/contNF;
    }
  if(contM !=0){ 
    promM=acumNM/contNM;
    }
  if(contNB !=0){ 
    promNB=acumNNB/contNNB;
    }




  if(flagNoMasc){
    console.log("Se ingresaron solo masculinos.");
      }else{
  console.log(`a) El nombre del mejor promedio que no es masculino es ${nombreNotaNoMasc} con una nota de: ${mayorNotaNoMasc}`);
  }


  if(flagLibre){
    console.log("No se ingresaron alumnos libre.");
      }else{
  console.log(`b) El mas joven de los alumnos libre es ${nombreLibreMenor} con  ${edadLibreMenor} años`);
      }
  
  console.log(`c) El promedio de nota por sexo es: femenino:  ${promF}, masculino:  ${promM} y nobinario:  ${promNB}años`);
  
  if(flagRemota){
    console.log("No se ingresaron alumnos no remotos.");
      }else{
  console.log(`d)el nombre y la edad del alumno que cursa mas materias es ${nombreMayorRemota} de ${edadMayorRemota} y cursa ${mayorCantRemota} materias`);
      }
  
    }