function mostrar() {
  /*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección 15.50hs
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos */
  let tipo;
  let precio;
  let cant;
  let categ;
  let acumA = 0;
  let acumI = 0;
  let acumQ = 0;
  let contA = 0;
  let contI = 0;
  let contQ = 0;
  let acumI = 0;
  let acumC = 0;
  let acumE = 0;
  let flagIMenos200 = 1;
  let acumImenos200 = 0;
  let cantIMenos200 = 0;
  let flagMayorP = 01;
  let mayorCantRemota;
  let mayorMarca;

  for (led = i; i < 5; i++) {

    tipo = prompt("Ingrese tipo: ALCOHOL/ IAC/ QUAT").toLowerCase();
    while (tipo != "alcohol" && tipo != "iac" && tipo != "quat") {
      tipo = prompt("Error. Reingrese tipo: alcohol, iac, quat");
    }
    precio = parseFloat(prompt("ingrese precio entre 100 y 300"));
    while (isNaN(precio) || precio <= 100 || precio > 300) {
      precio = parseInt(prompt("Error. Reingrese precio entre 100 y 300"));
    }
    cant = parseInt(prompt("ingrese cant entre 0 y 1000"));
    while (isNaN(cant) || cant < 0 || cant > 1000) {
      cant = parseInt(prompt("Error. Reingrese cant entre 0 y 1000"));
    }
    categ = prompt("Ingrese categoria: ignifugo/ combustible/ explosivo").toLowerCase();
    while (categ != "ignifugo" && categ != "combustible" && categ != "explosivo") {
      categ = prompt("Error. Reingrese categ: ignifugo, combustible, explosivo");
    }
    marca = prompt("ingrese marca");

    //a) El promedio de cantidad por tipo de producto  tipo = prompt("Ingrese tipo: ALCOHOL/ IAC/ QUAT"

    if (tipo == "alcohol") {
      acumA += cantidad;
      contA++;
    } else if (tipo == "iaq") {
      acumI += cantidad;
      contI++;
    } else {
      acumQ += cantidad;
      contQ++;
    }
    //b) El tipo de inflamable con más cantidad de unidades en total de la compra
    //categ = prompt("Ingrese categoria: ignifugo/ combustible/ explosivo")
    //		acumMayorI += cantidad;

    if (tipo == "ignifugo") {
      acumI += cantidad;
      contI++;
    } else if (tipo == "combustible") {
      acumC += cantidad;
      contC++;
    } else {
      acumE += cantidad;
      contC++;
      //c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
      //tipo = prompt("Ingrese tipo: ALCOHOL/ IAC/ QUAT"

      if (tipo == "iac" && cant <= 200) {
        if (flagIMenos200 || cant < 200) {
          acumIMenos200 += cant;
          flagIMenos200 = 0;
        }
      }
      //d) la marca y tipo del más caro de los productos

      if (flagMayorP || precio > mayorprecio) {
        mayorPrecio = precio;
        mayorCateg = categ;
        mayorMarca = marca;
        flagMayorP = 0;
      }
    } //..........................fuera de for..............................
    if (contA != 0) {
      promA = acumA / contA;
    }
    if (contI != 0) {
      promI = acumI / contI;
    }
    if (contq != 0) {
      promq = acumq / contq;
    }

    //ice
    if (contI > contc && contI > contE) {
      contMayor = "ignifugo";
    } else if (contC >= contE && contC > conti) {
      contMayor = "combustible";
    } else {
      contMayor = "explosivo";
    }

    console.log(`a) Promedio de cantidad por tipo de producto:  ALCOHOL: ${promA}  / IAC:${promI}   / QUAT: ${promQ}`);

    console.log(`b) El tipo de inflamable con más cantidad de unidades en total de la compra es : ${contMayor}`);

    console.log(`c) En total se compraron ${cantIMenos200} unidades de IAC con precios menos a 200 (inclusive)`);

    console.log(`d) la marca y tipo del más caro de los productos  ${cantIMenos200} / ${cantIMenos200}`);
  }

  /*	let tipo;
	let precio;
	let cantidad;
	let tipo;
	let marca;
	let acumA=0;
	let contA=0;
	let promA=0;
	let acumI=0;
	let contI=0;
	let promI=0;
	let acumQ=0;
	let contQ=0;
	let promQ=0;
	let contMayorI=0;
	let contMayorC=0;
	let contMayorE=0;
	let acumMayorI=0;
	let acumMayorI=0;
	let acumMayorC=0;
	let acumMayorE=0;


for(let i=0; i<5; i++){


	tipo = prompt("Ingrese tipo: alcohol/ iac/ quat");
while (tipo != "alcohol" && tipo !="iac" && tipo != "quat"){
	tipo = prompt("Error. Reingrese tipo: alcohol, iac, quat");
}
precio = parseInt(prompt("ingrese precio entre 100 y 300"));
while (isNaN(precio) || precio <= 100 || precio > 300) {
precio = parseInt(prompt("Error. Reingrese precio entre 100 y 300"));
}	
categoria = prompt("Ingrese categoria: ignífugo, combustible, explosivo");
while (categoria != "ignífugo" && categoria != "combustible" && categoria != "explosivo") {
	categoria = prompt("Error, reingrese categoria: ignífugo/ combustible/ explosivo");
}
cantidad= parseInt(prompt("reingrese cantidad entre 0 y 1000"));
while (isNaN(precio) || precio <= 0 || precio > 1000) {
	cantidad= parseInt(prompt("reingrese cantidad entre 0 y 1000"));
		}
	marcatipo= prompt("Ingrese marca:");

//a) El promedio de cantidad por tipo de producto

if(tipo =="alcohol"){
	acumA += cantidad;
	cont++;
}else if(tipo == "iaq"){
	acumI+= cantidad;
	contI++;
}else(tipo ==" quat") {
	acumQ+= cantidad;
	contQ++;
}
//b) El tipo de inflamable con más cantidad de unidades en total de la compra ignífugo/ combustible/ explosivo")
	switch (categoria){
		case"ignífugo":
		acumMayorI += cantidad;
		contMayorI++;
		break;

		case"combustible":
		acumMayorC += cantidad;
		contMayorC++;
		break;

		case"explosivo":
		acumMayorE += cantidad;
		contMayorE++;
		break;
	}//c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
	if(tipo == "iac"){
		if(precio < 200){
			acumIacMenos200 += cantidad;
			
		}//d) la marca y tipo del más caro de los productos
	}// alcohol/ iac/ quat
	if(flag || precio > mayorPrecio){
		prodMayorPrecio = precio;
		catMayorPrecio=categoria;
		marcaMayorPrecio=marca;
		flag=0; 	
	}




}//--------cierre del for----------------


//totalProducto=contA+contI+contQ;

if(contA != 0){
	promA=acumA/contA
}
if(contI != 0){
	promA=acumI/contI
}
if(contQ != 0){
	promQ=acumQ/contQ
}




if(acumMayorI> acumMayorC &&  acumMayorI > acumMayorE ){
categoriaMayorUnid="ignifugo" ;
}else if(acumMayorC >= acumMayorE && acumMayorC > acumMayorA){
	categoriaMayorUnid="combustible" ;
}else{
	categoriaMayorUnid="explosivo" ;
}


console.log(`a) El promedio de cantidad por tipo de producto es: alcohol ${promA} %, iaq ${promA} % Y  quat ${promQ} %. `);

console.log(`b) El tipo de inflamable con más cantidad de unidades en total de la compra es ${categoriaMayorUnid}  `);

console.log(`c) En total se compraron ${acumIacMenos200}  unidades de IAC con precios menos a 200 (inclusive)`);

console.log(`d)  El tipo de producto mas caro es ${catMayorPrecio} de la marca ${marcaMayorPrecio}`);



*/
}
