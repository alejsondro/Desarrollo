

// funciones para pasar de string a number y viceversa
/* BORRADOR
      inputNota1.addEventListener("click", function() { limpiarInput("nota1"); });
      ToFixed()` convierte un número a una cadena de texto, redondeándolo a un número específico de decimales. 
      OPERADOR UNARIO
      let str = num.toFixed(2); // "3.14"
      let floatNum = +str; // 3.14
      En este ejemplo, `str` es una cadena de texto que representa el número 3.14. Cuando usas el operador `+` en `str`, obtienes el número de punto flotante 3.14. 
   */
let strRut = "15720592-7";
let strRut2 = "15.720.592-7";
let strNombre1 = "Alejandro";
let strNombre2 = "saul";
let strApellidos = "Masferrer Ostolaza";
let strEdad = "41";
let strEdadNegativa = "-41";
let strAño = "+1983";
let strEmail = 'masferrer@gmail.com';
let strAltura = "1.62";
let strBarba = "0.5";
let strMalo0000 = '2.';
let strMalo000 = '123.abc';
let strMalo00 = '123.45abc';
let strMalo0 = '1.0';
let strMalo1 = '00.11111';
let strMalo2 = '.22222';
let strMalo3 = '-.33333';
let strMalo4 = '--.44444';
let strMalo5 = '- 55555';
let strMalo6 = '..66666';
let strMalo7 = '++77777.';
let strMalo8 = '-88888$';
let strMalo9 = '99999';
let strBolleano1 = true;
let strBolleano2 = false;


let intMalo1 = .1;
let intMalo2 = 2.;
let intMalo3 = +3;
let intMalo4 = -4.;
let intEdad = 41;
let intAltura = 1.62;
let intBarba = 0.5;

let titu1 = `CONVERSIONES con parseFloat(a número decimal)`
console.log(`${titu1}`+'\n'+'-'.repeat(titu1.length));
console.log(`parseFloat('${strRut}') = ${parseFloat(strRut)} = ${typeof parseFloat(strRut)}`);
console.log(`parseFloat('${strRut2}') = ${parseFloat(strRut2)} = ${typeof parseFloat(strRut2)}`);
console.log(`parseFloat('${strNombre1}') = ${parseFloat(strNombre1)} = ${typeof parseFloat(strNombre1)}`);
console.log(`parseFloat('${strNombre2}') = ${parseFloat(strNombre2)} = ${typeof parseFloat(strNombre2)}`);
console.log(`parseFloat('${strApellidos}') = ${parseFloat(strApellidos)} = ${typeof parseFloat(strApellidos)}`);
console.log(`parseFloat('${strEdad}') = ${parseFloat(strEdad)} = ${typeof parseFloat(strEdad)}`);
console.log(`parseFloat('${strEdadNegativa}') = ${parseFloat(strEdadNegativa)} = ${typeof parseFloat(strEdadNegativa)}`);
console.log(`parseFloat('${strAño}') = ${parseFloat(strAño)} = ${typeof parseFloat(strAño)}`);
console.log(`parseFloat('${strEmail}') = ${parseFloat(strEmail)} = ${typeof parseFloat(strEmail)}`);
console.log(`parseFloat('${strAltura}') = ${parseFloat(strAltura)} = ${typeof parseFloat(strAltura)}`);
console.log(`parseFloat('${strBarba}') = ${parseFloat(strBarba)} = ${typeof parseFloat(strBarba)}`);
console.log(`parseFloat('${strMalo0000}') = ${parseFloat(strMalo0000)} = ${typeof parseFloat(strMalo0000)}`);
console.log(`parseFloat('${strMalo000}') = ${parseFloat(strMalo000)} = ${typeof parseFloat(strMalo000)}`);
console.log(`parseFloat('${strMalo00}') = ${parseFloat(strMalo00)} = ${typeof parseFloat(strMalo00)}`);
console.log(`parseFloat('${strMalo0}') = ${parseFloat(strMalo0)} = ${typeof parseFloat(strMalo0)}`);
console.log(`parseFloat('${strMalo1}') = ${parseFloat(strMalo1)} = ${typeof parseFloat(strMalo1)}`);
console.log(`parseFloat('${strMalo2}') = ${parseFloat(strMalo2)} = ${typeof parseFloat(strMalo2)}`);
console.log(`parseFloat('${strMalo3}') = ${parseFloat(strMalo3)} = ${typeof parseFloat(strMalo3)}`);
console.log(`parseFloat('${strMalo4}') = ${parseFloat(strMalo4)} = ${typeof parseFloat(strMalo4)}`);
console.log(`parseFloat('${strMalo5}') = ${parseFloat(strMalo5)} = ${typeof parseFloat(strMalo5)}`);
console.log(`parseFloat('${strMalo6}') = ${parseFloat(strMalo6)} = ${typeof parseFloat(strMalo6)}`);
console.log(`parseFloat('${strMalo7}') = ${parseFloat(strMalo7)} = ${typeof parseFloat(strMalo7)}`);
console.log(`parseFloat('${strMalo8}') = ${parseFloat(strMalo8)} = ${typeof parseFloat(strMalo8)}`);
console.log(`parseFloat('${strMalo9}') = ${parseFloat(strMalo9)} = ${typeof parseFloat(strMalo9)}`);
console.log(`parseFloat('${strBolleano1}') = ${parseFloat(strBolleano1)} = ${typeof parseFloat(strBolleano1)}`);
console.log(`parseFloat('${strBolleano2}') = ${parseFloat(strBolleano2)} = ${typeof parseFloat(strBolleano2)}\n`);

let titu2 = `CONVERSIONES con parseInt(a número entero)`
console.log(`${titu2}`+'\n'+'-'.repeat(titu2.length));
console.log(`parseInt('${strRut}') = ${parseInt(strRut)} = ${typeof parseInt(strRut)}`);
console.log(`parseInt('${strRut2}') = ${parseInt(strRut2)} = ${typeof parseInt(strRut2)}`);
console.log(`parseInt('${strNombre1}') = ${parseInt(strNombre1)} = ${typeof parseInt(strNombre1)}`);
console.log(`parseInt('${strNombre2}') = ${parseInt(strNombre2)} = ${typeof parseInt(strNombre2)}`);
console.log(`parseInt('${strApellidos}') = ${parseInt(strApellidos)} = ${typeof parseInt(strApellidos)}`);
console.log(`parseInt('${strEdad}') = ${parseInt(strEdad)} = ${typeof parseInt(strEdad)}`);
console.log(`parseInt('${strEdadNegativa}') = ${parseInt(strEdadNegativa)} = ${typeof parseInt(strEdadNegativa)}`);
console.log(`parseInt('${strAño}') = ${parseInt(strAño)} = ${typeof parseInt(strAño)}`);
console.log(`parseInt('${strEmail}') = ${parseInt(strEmail)} = ${typeof parseInt(strEmail)}`);
console.log(`parseInt('${strAltura}') = ${parseInt(strAltura)} = ${typeof parseInt(strAltura)}`);
console.log(`parseInt('${strBarba}') = ${parseInt(strBarba)} = ${typeof parseInt(strBarba)}`);
console.log(`parseInt('${strMalo0000}') = ${parseInt(strMalo0000)} = ${typeof parseInt(strMalo0000)}`);
console.log(`parseInt('${strMalo000}') = ${parseInt(strMalo000)} = ${typeof parseInt(strMalo000)}`);
console.log(`parseInt('${strMalo00}') = ${parseInt(strMalo00)} = ${typeof parseInt(strMalo00)}`);
console.log(`parseInt('${strMalo0}') = ${parseInt(strMalo0)} = ${typeof parseInt(strMalo0)}`);
console.log(`parseInt('${strMalo1}') = ${parseInt(strMalo1)} = ${typeof parseInt(strMalo1)}`);
console.log(`parseInt('${strMalo2}') = ${parseInt(strMalo2)} = ${typeof parseInt(strMalo2)}`);
console.log(`parseInt('${strMalo3}') = ${parseInt(strMalo3)} = ${typeof parseInt(strMalo3)}`);
console.log(`parseInt('${strMalo4}') = ${parseInt(strMalo4)} = ${typeof parseInt(strMalo4)}`);
console.log(`parseInt('${strMalo5}') = ${parseInt(strMalo5)} = ${typeof parseInt(strMalo5)}`);
console.log(`parseInt('${strMalo6}') = ${parseInt(strMalo6)} = ${typeof parseInt(strMalo6)}`);
console.log(`parseInt('${strMalo7}') = ${parseInt(strMalo7)} = ${typeof parseInt(strMalo7)}`);
console.log(`parseInt('${strMalo8}') = ${parseInt(strMalo8)} = ${typeof parseInt(strMalo8)}`);
console.log(`parseInt('${strMalo9}') = ${parseInt(strMalo9)} = ${typeof parseInt (strMalo9)}`);
console.log(`parseInt('${strBolleano1}') = ${parseInt(strBolleano1)} = ${typeof parseInt(strBolleano1)}`);
console.log(`parseInt('${strBolleano2}') = ${parseInt(strBolleano2)} = ${typeof parseInt(strBolleano2)}\n`);

let titu3 = `CONVERSIONES con Number()`
console.log(`${titu3}`+'\n'+'-'.repeat(titu3.length));
console.log(`Number('${strRut}') = ${Number(strRut)} = ${typeof Number(strRut)}`);
console.log(`Number('${strRut2}') = ${Number(strRut2)} = ${typeof Number(strRut2)}`);
console.log(`Number('${strNombre1}') = ${Number(strNombre1)} = ${typeof Number(strNombre1)}`);
console.log(`Number('${strNombre2}') = ${Number(strNombre2)} = ${typeof Number(strNombre2)}`);
console.log(`Number('${strApellidos}') = ${Number(strApellidos)} = ${typeof Number(strApellidos)}`);
console.log(`Number('${strEdad}') = ${Number(strEdad)} = ${typeof Number(strEdad)}`);
console.log(`Number('${strEdadNegativa}') = ${Number(strEdadNegativa)} = ${typeof Number(strEdadNegativa)}`);
console.log(`Number('${strAño}') = ${Number(strAño)} = ${typeof Number(strAño)}`);
console.log(`Number('${strEmail}') = ${Number(strEmail)} = ${typeof Number(strEmail)}`);
console.log(`Number('${strAltura}') = ${Number(strAltura)} = ${typeof Number(strAltura)}`);
console.log(`Number('${strBarba}') = ${Number(strBarba)} = ${typeof Number(strBarba)}`);
console.log(`Number('${strMalo0000}') = ${Number(strMalo0000)} = ${typeof Number(strMalo0000)}`);
console.log(`Number('${strMalo000}') = ${Number(strMalo000)} = ${typeof Number(strMalo000)}`);
console.log(`Number('${strMalo00}') = ${Number(strMalo00)} = ${typeof Number(strMalo00)}`);
console.log(`Number('${strMalo0}') = ${Number(strMalo0)} = ${typeof Number(strMalo0)}`);
console.log(`Number('${strMalo1}') = ${Number(strMalo1)} = ${typeof Number(strMalo1)}`);
console.log(`Number('${strMalo2}') = ${Number(strMalo2)} = ${typeof Number(strMalo2)}`);
console.log(`Number('${strMalo3}') = ${Number(strMalo3)} = ${typeof Number(strMalo3)}`);
console.log(`Number('${strMalo4}') = ${Number(strMalo4)} = ${typeof Number(strMalo4)}`);
console.log(`Number('${strMalo5}') = ${Number(strMalo5)} = ${typeof Number(strMalo5)}`);
console.log(`Number('${strMalo6}') = ${Number(strMalo6)} = ${typeof Number(strMalo6)}`);
console.log(`Number('${strMalo7}') = ${Number(strMalo7)} = ${typeof Number(strMalo7)}`);
console.log(`Number('${strMalo8}') = ${Number(strMalo8)} = ${typeof Number(strMalo8)}`);
console.log(`Number('${strMalo9}') = ${Number(strMalo9)} = ${typeof Number(strMalo9)}`);
console.log(`Number('${strBolleano1}') = ${Number(strBolleano1)} = ${typeof Number(strBolleano1)}`);
console.log(`Number('${strBolleano2}') = ${Number(strBolleano2)} = ${typeof Number(strBolleano2)}\n`);

let titu4 = `CONVERSIONES con Math.ceil(redondeo hacia arriba)`
console.log(`${titu4}`+'\n'+'-'.repeat(titu4.length));
console.log(`Math.ceil('${strRut}') = ${Math.ceil(strRut)} = ${typeof Math.ceil(strRut)}`);
console.log(`Math.ceil('${strRut2}') = ${Math.ceil(strRut2)} = ${typeof Math.ceil(strRut2)}`);
console.log(`Math.ceil('${strNombre1}') = ${Math.ceil(strNombre1)} = ${typeof Math.ceil(strNombre1)}`);
console.log(`Math.ceil('${strNombre2}') = ${Math.ceil(strNombre2)} = ${typeof Math.ceil(strNombre2)}`);
console.log(`Math.ceil('${strApellidos}') = ${Math.ceil(strApellidos)} = ${typeof Math.ceil(strApellidos)}`);
console.log(`Math.ceil('${strEdad}') = ${Math.ceil(strEdad)} = ${typeof Math.ceil(strEdad)}`);
console.log(`Math.ceil('${strEdadNegativa}') = ${Math.ceil(strEdadNegativa)} = ${typeof Math.ceil(strEdadNegativa)}`);
console.log(`Math.ceil('${strAño}') = ${Math.ceil(strAño)} = ${typeof Math.ceil(strAño)}`);
console.log(`Math.ceil('${strEmail}') = ${Math.ceil(strEmail)} = ${typeof Math.ceil(strEmail)}`);
console.log(`Math.ceil('${strAltura}') = ${Math.ceil(strAltura)} = ${typeof Math.ceil(strAltura)}`);
console.log(`Math.ceil('${strBarba}') = ${Math.ceil(strBarba)} = ${typeof Math.ceil(strBarba)}`);
console.log(`Math.ceil('${strMalo0000}') = ${Math.ceil(strMalo0000)} = ${typeof Math.ceil(strMalo0000)}`);
console.log(`Math.ceil('${strMalo000}') = ${Math.ceil(strMalo000)} = ${typeof Math.ceil(strMalo000)}`);
console.log(`Math.ceil('${strMalo00}') = ${Math.ceil(strMalo00)} = ${typeof Math.ceil(strMalo00)}`);
console.log(`Math.ceil('${strMalo0}') = ${Math.ceil(strMalo0)} = ${typeof Math.ceil(strMalo0)}`);
console.log(`Math.ceil('${strMalo1}') = ${Math.ceil(strMalo1)} = ${typeof Math.ceil(strMalo1)}`);
console.log(`Math.ceil('${strMalo2}') = ${Math.ceil(strMalo2)} = ${typeof Math.ceil(strMalo2)}`);
console.log(`Math.ceil('${strMalo3}') = ${Math.ceil(strMalo3)} = ${typeof Math.ceil(strMalo3)}`);
console.log(`Math.ceil('${strMalo4}') = ${Math.ceil(strMalo4)} = ${typeof Math.ceil(strMalo4)}`);
console.log(`Math.ceil('${strMalo5}') = ${Math.ceil(strMalo5)} = ${typeof Math.ceil(strMalo5)}`);
console.log(`Math.ceil('${strMalo6}') = ${Math.ceil(strMalo6)} = ${typeof Math.ceil(strMalo6)}`);
console.log(`Math.ceil('${strMalo7}') = ${Math.ceil(strMalo7)} = ${typeof Math.ceil(strMalo7)}`);
console.log(`Math.ceil('${strMalo8}') = ${Math.ceil(strMalo8)} = ${typeof Math.ceil(strMalo8)}`);
console.log(`Math.ceil('${strMalo9}') = ${Math.ceil(strMalo9)} = ${typeof Math.ceil(strMalo9)}`);
console.log(`Math.ceil('${strBolleano1}') = ${Math.ceil(strBolleano1)} = ${typeof Math.ceil(strBolleano1)}`);
console.log(`Math.ceil('${strBolleano2}') = ${Math.ceil(strBolleano2)} = ${typeof Math.ceil(strBolleano2)}\n`);

let titu5 = `CONVERSIONES con Math.floor(redondeo hacia abajo)`
console.log(`${titu5}`+'\n'+'-'.repeat(titu5.length));
console.log(`Math.floor('${strRut}') = ${Math.floor(strRut)} = ${typeof Math.floor(strRut)}`);
console.log(`Math.floor('${strRut2}') = ${Math.floor(strRut2)} = ${typeof Math.floor(strRut2)}`);
console.log(`Math.floor('${strNombre1}') = ${Math.floor(strNombre1)} = ${typeof Math.floor(strNombre1)}`);
console.log(`Math.floor('${strNombre2}') = ${Math.floor(strNombre2)} = ${typeof Math.floor(strNombre2)}`);
console.log(`Math.floor('${strApellidos}') = ${Math.floor(strApellidos)} = ${typeof Math.floor(strApellidos)}`);
console.log(`Math.floor('${strEdad}') = ${Math.floor(strEdad)} = ${typeof Math.floor(strEdad)}`);
console.log(`Math.floor('${strEdadNegativa}') = ${Math.floor(strEdadNegativa)} = ${typeof Math.floor(strEdadNegativa)}`);
console.log(`Math.floor('${strAño}') = ${Math.floor(strAño)} = ${typeof Math.floor(strAño)}`);
console.log(`Math.floor('${strEmail}') = ${Math.floor(strEmail)} = ${typeof Math.floor(strEmail)}`);
console.log(`Math.floor('${strAltura}') = ${Math.floor(strAltura)} = ${typeof Math.floor(strAltura)}`);
console.log(`Math.floor('${strBarba}') = ${Math.floor(strBarba)} = ${typeof Math.floor(strBarba)}`);
console.log(`Math.floor('${strMalo0000}') = ${Math.floor(strMalo0000)} = ${typeof Math.floor(strMalo0000)}`);
console.log(`Math.floor('${strMalo000}') = ${Math.floor(strMalo000)} = ${typeof Math.floor(strMalo000)}`);
console.log(`Math.floor('${strMalo00}') = ${Math.floor(strMalo00)} = ${typeof Math.floor(strMalo00)}`);
console.log(`Math.floor('${strMalo0}') = ${Math.floor(strMalo0)} = ${typeof Math.floor(strMalo0)}`);
console.log(`Math.floor('${strMalo1}') = ${Math.floor(strMalo1)} = ${typeof Math.floor(strMalo1)}`);
console.log(`Math.floor('${strMalo2}') = ${Math.floor(strMalo2)} = ${typeof Math.floor(strMalo2)}`);
console.log(`Math.floor('${strMalo3}') = ${Math.floor(strMalo3)} = ${typeof Math.floor(strMalo3)}`);
console.log(`Math.floor('${strMalo4}') = ${Math.floor(strMalo4)} = ${typeof Math.floor(strMalo4)}`);
console.log(`Math.floor('${strMalo5}') = ${Math.floor(strMalo5)} = ${typeof Math.floor(strMalo5)}`);
console.log(`Math.floor('${strMalo6}') = ${Math.floor(strMalo6)} = ${typeof Math.floor(strMalo6)}`);
console.log(`Math.floor('${strMalo7}') = ${Math.floor(strMalo7)} = ${typeof Math.floor(strMalo7)}`);
console.log(`Math.floor('${strMalo8}') = ${Math.floor(strMalo8)} = ${typeof Math.floor(strMalo8)}`);
console.log(`Math.floor('${strMalo9}') = ${Math.floor(strMalo9)} = ${typeof Math.floor(strMalo9)}`);
console.log(`Math.floor('${strBolleano1}') = ${Math.floor(strBolleano1)} = ${typeof Math.floor(strBolleano1)}`);
console.log(`Math.floor('${strBolleano2}') = ${Math.floor(strBolleano2)} = ${typeof Math.floor(strBolleano2)}\n`);

let titu6 = `CONVERSIONES con Math.round(redondeo)`
console.log(`${titu6}`+'\n'+'-'.repeat(titu6.length));
console.log(`Math.round('${strRut}') = ${Math.round(strRut)} = ${typeof Math.round(strRut)}`);
console.log(`Math.round('${strRut2}') = ${Math.round(strRut2)} = ${typeof Math.round(strRut2)}`);
console.log(`Math.round('${strNombre1}') = ${Math.round(strNombre1)} = ${typeof Math.round(strNombre1)}`);
console.log(`Math.round('${strNombre2}') = ${Math.round(strNombre2)} = ${typeof Math.round(strNombre2)}`);
console.log(`Math.round('${strApellidos}') = ${Math.round(strApellidos)} = ${typeof Math.round(strApellidos)}`);
console.log(`Math.round('${strEdad}') = ${Math.round(strEdad)} = ${typeof Math.round(strEdad)}`);
console.log(`Math.round('${strEdadNegativa}') = ${Math.round(strEdadNegativa)} = ${typeof Math.round(strEdadNegativa)}`);
console.log(`Math.round('${strAño}') = ${Math.round(strAño)} = ${typeof Math.round(strAño)}`);
console.log(`Math.round('${strEmail}') = ${Math.round(strEmail)} = ${typeof Math.round(strEmail)}`);
console.log(`Math.round('${strAltura}') = ${Math.round(strAltura)} = ${typeof Math.round(strAltura)}`);
console.log(`Math.round('${strBarba}') = ${Math.round(strBarba)} = ${typeof Math.round(strBarba)}`);
console.log(`Math.round('${strMalo0000}') = ${Math.round(strMalo0000)} = ${typeof Math.round(strMalo0000)}`);
console.log(`Math.round('${strMalo000}') = ${Math.round(strMalo000)} = ${typeof Math.round(strMalo000)}`);
console.log(`Math.round('${strMalo00}') = ${Math.round(strMalo00)} = ${typeof Math.round(strMalo00)}`);
console.log(`Math.round('${strMalo0}') = ${Math.round(strMalo0)} = ${typeof Math.round(strMalo0)}`);
console.log(`Math.round('${strMalo1}') = ${Math.round(strMalo1)} = ${typeof Math.round(strMalo1)}`);
console.log(`Math.round('${strMalo2}') = ${Math.round(strMalo2)} = ${typeof Math.round(strMalo2)}`);
console.log(`Math.round('${strMalo3}') = ${Math.round(strMalo3)} = ${typeof Math.round(strMalo3)}`);
console.log(`Math.round('${strMalo4}') = ${Math.round(strMalo4)} = ${typeof Math.round(strMalo4)}`);
console.log(`Math.round('${strMalo5}') = ${Math.round(strMalo5)} = ${typeof Math.round(strMalo5)}`);
console.log(`Math.round('${strMalo6}') = ${Math.round(strMalo6)} = ${typeof Math.round(strMalo6)}`);
console.log(`Math.round('${strMalo7}') = ${Math.round(strMalo7)} = ${typeof Math.round(strMalo7)}`);
console.log(`Math.round('${strMalo8}') = ${Math.round(strMalo8)} = ${typeof Math.round(strMalo8)}`);
console.log(`Math.round('${strMalo9}') = ${Math.round(strMalo9)} = ${typeof Math.round(strMalo9)}`);
console.log(`Math.round('${strBolleano1}') = ${Math.round(strBolleano1)} = ${typeof Math.round(strBolleano1)}`);
console.log(`Math.round('${strBolleano2}') = ${Math.round(strBolleano2)} = ${typeof Math.round(strBolleano2)}\n`);


let titu7 = `CONVERSIONES con Math.abs(valor absoluto)`
console.log(`${titu7}`+'\n'+'-'.repeat(titu7.length));
console.log(`Math.abs('${strRut}') = ${Math.abs(strRut)} = ${typeof Math.abs(strRut)}`);
console.log(`Math.abs('${strRut2}') = ${Math.abs(strRut2)} = ${typeof Math.abs(strRut2)}`);
console.log(`Math.abs('${strNombre1}') = ${Math.abs(strNombre1)} = ${typeof Math.abs(strNombre1)}`);
console.log(`Math.abs('${strNombre2}') = ${Math.abs(strNombre2)} = ${typeof Math.abs(strNombre2)}`);
console.log(`Math.abs('${strApellidos}') = ${Math.abs(strApellidos)} = ${typeof Math.abs(strApellidos)}`);
console.log(`Math.abs('${strEdad}') = ${Math.abs(strEdad)} = ${typeof Math.abs(strEdad)}`);
console.log(`Math.abs('${strEdadNegativa}') = ${Math.abs(strEdadNegativa)} = ${typeof Math.abs(strEdadNegativa)}`);
console.log(`Math.abs('${strAño}') = ${Math.abs(strAño)} = ${typeof Math.abs(strAño)}`);
console.log(`Math.abs('${strEmail}') = ${Math.abs(strEmail)} = ${typeof Math.abs(strEmail)}`);
console.log(`Math.abs('${strAltura}') = ${Math.abs(strAltura)} = ${typeof Math.abs(strAltura)}`);
console.log(`Math.abs('${strBarba}') = ${Math.abs(strBarba)} = ${typeof Math.abs(strBarba)}`);
console.log(`Math.abs('${strMalo0000}') = ${Math.abs(strMalo0000)} = ${typeof Math.abs(strMalo0000)}`);
console.log(`Math.abs('${strMalo000}') = ${Math.abs(strMalo000)} = ${typeof Math.abs(strMalo000)}`);
console.log(`Math.abs('${strMalo00}') = ${Math.abs(strMalo00)} = ${typeof Math.abs(strMalo00)}`);
console.log(`Math.abs('${strMalo0}') = ${Math.abs(strMalo0)} = ${typeof Math.abs(strMalo0)}`);
console.log(`Math.abs('${strMalo1}') = ${Math.abs(strMalo1)} = ${typeof Math.abs(strMalo1)}`);
console.log(`Math.abs('${strMalo2}') = ${Math.abs(strMalo2)} = ${typeof Math.abs(strMalo2)}`);
console.log(`Math.abs('${strMalo3}') = ${Math.abs(strMalo3)} = ${typeof Math.abs(strMalo3)}`);
console.log(`Math.abs('${strMalo4}') = ${Math.abs(strMalo4)} = ${typeof Math.abs(strMalo4)}`);
console.log(`Math.abs('${strMalo5}') = ${Math.abs(strMalo5)} = ${typeof Math.abs(strMalo5)}`);
console.log(`Math.abs('${strMalo6}') = ${Math.abs(strMalo6)} = ${typeof Math.abs(strMalo6)}`);
console.log(`Math.abs('${strMalo7}') = ${Math.abs(strMalo7)} = ${typeof Math.abs(strMalo7)}`);
console.log(`Math.abs('${strMalo8}') = ${Math.abs(strMalo8)} = ${typeof Math.abs(strMalo8)}`);
console.log(`Math.abs('${strMalo9}') = ${Math.abs(strMalo9)} = ${typeof Math.abs(strMalo9)}`);
console.log(`Math.abs('${strBolleano1}') = ${Math.abs(strBolleano1)} = ${typeof Math.abs(strBolleano1)}`);
console.log(`Math.abs('${strBolleano2}') = ${Math.abs(strBolleano2)} = ${typeof Math.abs(strBolleano2)}\n`);

let titu8 = `CONVERSIONES con Math.sqrt(raiz cuadrada)`
console.log(`${titu8}`+'\n'+'-'.repeat(titu8.length));
console.log(`Math.sqrt('${strRut}') = ${Math.sqrt(strRut)} = ${typeof Math.sqrt(strRut)}`);
console.log(`Math.sqrt('${strRut2}') = ${Math.sqrt(strRut2)} = ${typeof Math.sqrt(strRut2)}`);
console.log(`Math.sqrt('${strNombre1}') = ${Math.sqrt(strNombre1)} = ${typeof Math.sqrt(strNombre1)}`);
console.log(`Math.sqrt('${strNombre2}') = ${Math.sqrt(strNombre2)} = ${typeof Math.sqrt(strNombre2)}`);
console.log(`Math.sqrt('${strApellidos}') = ${Math.sqrt(strApellidos)} = ${typeof Math.sqrt(strApellidos)}`);
console.log(`Math.sqrt('${strEdad}') = ${Math.sqrt(strEdad)} = ${typeof Math.sqrt(strEdad)}`);
console.log(`Math.sqrt('${strEdadNegativa}') = ${Math.sqrt(strEdadNegativa)} = ${typeof Math.sqrt(strEdadNegativa)}`);
console.log(`Math.sqrt('${strAño}') = ${Math.sqrt(strAño)} = ${typeof Math.sqrt(strAño)}`);
console.log(`Math.sqrt('${strEmail}') = ${Math.sqrt(strEmail)} = ${typeof Math.sqrt(strEmail)}`);
console.log(`Math.sqrt('${strAltura}') = ${Math.sqrt(strAltura)} = ${typeof Math.sqrt(strAltura)}`);
console.log(`Math.sqrt('${strBarba}') = ${Math.sqrt(strBarba)} = ${typeof Math.sqrt(strBarba)}`);
console.log(`Math.sqrt('${strMalo0000}') = ${Math.sqrt(strMalo0000)} = ${typeof Math.sqrt(strMalo0000)}`);
console.log(`Math.sqrt('${strMalo000}') = ${Math.sqrt(strMalo000)} = ${typeof Math.sqrt(strMalo000)}`);
console.log(`Math.sqrt('${strMalo00}') = ${Math.sqrt(strMalo00)} = ${typeof Math.sqrt(strMalo00)}`);
console.log(`Math.sqrt('${strMalo0}') = ${Math.sqrt(strMalo0)} = ${typeof Math.sqrt(strMalo0)}`);
console.log(`Math.sqrt('${strMalo1}') = ${Math.sqrt(strMalo1)} = ${typeof Math.sqrt(strMalo1)}`);
console.log(`Math.sqrt('${strMalo2}') = ${Math.sqrt(strMalo2)} = ${typeof Math.sqrt(strMalo2)}`);
console.log(`Math.sqrt('${strMalo3}') = ${Math.sqrt(strMalo3)} = ${typeof Math.sqrt(strMalo3)}`);
console.log(`Math.sqrt('${strMalo4}') = ${Math.sqrt(strMalo4)} = ${typeof Math.sqrt(strMalo4)}`);
console.log(`Math.sqrt('${strMalo5}') = ${Math.sqrt(strMalo5)} = ${typeof Math.sqrt(strMalo5)}`);
console.log(`Math.sqrt('${strMalo6}') = ${Math.sqrt(strMalo6)} = ${typeof Math.sqrt(strMalo6)}`);
console.log(`Math.sqrt('${strMalo7}') = ${Math.sqrt(strMalo7)} = ${typeof Math.sqrt(strMalo7)}`);
console.log(`Math.sqrt('${strMalo8}') = ${Math.sqrt(strMalo8)} = ${typeof Math.sqrt(strMalo8)}`);
console.log(`Math.sqrt('${strMalo9}') = ${Math.sqrt(strMalo9)} = ${typeof Math.sqrt(strMalo9)}`);
console.log(`Math.sqrt('${strBolleano1}') = ${Math.sqrt(strBolleano1)} = ${typeof Math.sqrt(strBolleano1)}`);
console.log(`Math.sqrt('${strBolleano2}') = ${Math.sqrt(strBolleano2)} = ${typeof Math.sqrt(strBolleano2)}`);
console.log(`Math.sqrt(${intMalo1}) = ${Math.sqrt(intMalo1)} = ${typeof Math.sqrt(intMalo1)}`);
console.log(`Math.sqrt(${intMalo2}) = ${Math.sqrt(intMalo2)} = ${typeof Math.sqrt(intMalo2)}`);
console.log(`Math.sqrt(${intMalo3}) = ${Math.sqrt(intMalo3)} = ${typeof Math.sqrt(intMalo3)}`);
console.log(`Math.sqrt(${intMalo4}) = ${Math.sqrt(intMalo4)} = ${typeof Math.sqrt(intMalo4)}`);
console.log(`Math.sqrt(${intEdad}) = ${Math.sqrt(intEdad)} = ${typeof Math.sqrt(intEdad)}`);
console.log(`Math.sqrt(${intAltura}) = ${Math.sqrt(intAltura)} = ${typeof Math.sqrt(intAltura)}`);
console.log(`Math.sqrt(${intBarba}) = ${Math.sqrt(intBarba)} = ${typeof Math.sqrt(intBarba)}`+'\n');

let titu11 = `Preguntar si es entero / isInteger(valor)`
console.log(`${titu11}`+'\n'+'-'.repeat(titu11.length));
console.log(`Number.isInteger('${strRut}') = ${Number.isInteger(strRut)} = ${typeof Number.isInteger(strRut)}`);
console.log(`Number.isInteger('${strRut2}') = ${Number.isInteger(strRut2)} = ${typeof Number.isInteger(strRut2)}`);
console.log(`Number.isInteger('${strNombre1}') = ${Number.isInteger(strNombre1)} = ${typeof Number.isInteger(strNombre1)}`);
console.log(`Number.isInteger('${strNombre2}') = ${Number.isInteger(strNombre2)} = ${typeof Number.isInteger(strNombre2)}`);
console.log(`Number.isInteger('${strApellidos}') = ${Number.isInteger(strApellidos)} = ${typeof Number.isInteger(strApellidos)}`);
console.log(`Number.isInteger('${strEdad}') = ${Number.isInteger(strEdad)} = ${typeof Number.isInteger(strEdad)}`);
console.log(`Number.isInteger('${strEdadNegativa}') = ${Number.isInteger(strEdadNegativa)} = ${typeof Number.isInteger(strEdadNegativa)}`);
console.log(`Number.isInteger('${strAño}') = ${Number.isInteger(strAño)} = ${typeof Number.isInteger(strAño)}`);
console.log(`Number.isInteger('${strEmail}') = ${Number.isInteger(strEmail)} = ${typeof Number.isInteger(strEmail)}`);
console.log(`Number.isInteger('${strAltura}') = ${Number.isInteger(strAltura)} = ${typeof Number.isInteger(strAltura)}`);
console.log(`Number.isInteger('${strBarba}') = ${Number.isInteger(strBarba)} = ${typeof Number.isInteger(strBarba)}`);
console.log(`Number.isInteger('${strMalo0000}') = ${Number.isInteger(strMalo0000)} = ${typeof Number.isInteger(strMalo0000)}`);
console.log(`Number.isInteger('${strMalo000}') = ${Number.isInteger(strMalo000)} = ${typeof Number.isInteger(strMalo000)}`);
console.log(`Number.isInteger('${strMalo00}') = ${Number.isInteger(strMalo00)} = ${typeof Number.isInteger(strMalo00)}`);
console.log(`Number.isInteger('${strMalo0}') = ${Number.isInteger(strMalo0)} = ${typeof Number.isInteger(strMalo0)}`);
console.log(`Number.isInteger('${strMalo1}') = ${Number.isInteger(strMalo1)} = ${typeof Number.isInteger(strMalo1)}`);
console.log(`Number.isInteger('${strMalo2}') = ${Number.isInteger(strMalo2)} = ${typeof Number.isInteger(strMalo2)}`);
console.log(`Number.isInteger('${strMalo3}') = ${Number.isInteger(strMalo3)} = ${typeof Number.isInteger(strMalo3)}`);
console.log(`Number.isInteger('${strMalo4}') = ${Number.isInteger(strMalo4)} = ${typeof Number.isInteger(strMalo4)}`);
console.log(`Number.isInteger('${strMalo5}') = ${Number.isInteger(strMalo5)} = ${typeof Number.isInteger(strMalo5)}`);
console.log(`Number.isInteger('${strMalo6}') = ${Number.isInteger(strMalo6)} = ${typeof Number.isInteger(strMalo6)}`);
console.log(`Number.isInteger('${strMalo7}') = ${Number.isInteger(strMalo7)} = ${typeof Number.isInteger(strMalo7)}`);
console.log(`Number.isInteger('${strMalo8}') = ${Number.isInteger(strMalo8)} = ${typeof Number.isInteger(strMalo8)}`);
console.log(`Number.isInteger('${strMalo9}') = ${Number.isInteger(strMalo9)} = ${typeof Number.isInteger(strMalo9)}`);
console.log(`Number.isInteger('${strBolleano1}') = ${Number.isInteger(strBolleano1)} = ${typeof Number.isInteger(strBolleano1)}`);
console.log(`Number.isInteger('${strBolleano2}') = ${Number.isInteger(strBolleano2)} = ${typeof Number.isInteger(strBolleano2)}`);
console.log(`Number.isInteger(${intMalo1}) = ${Number.isInteger(intMalo1)} = ${typeof Number.isInteger(intMalo1)}`);
console.log(`Number.isInteger(${intMalo2}) = ${Number.isInteger(intMalo2)} = ${typeof Number.isInteger(intMalo2)}`);
console.log(`Number.isInteger(${intMalo3}) = ${Number.isInteger(intMalo3)} = ${typeof Number.isInteger(intMalo3)}`);
console.log(`Number.isInteger(${intMalo4}) = ${Number.isInteger(intMalo4)} = ${typeof Number.isInteger(intMalo4)}`);
console.log(`Number.isInteger(${intEdad}) = ${Number.isInteger(intEdad)} = ${typeof Number.isInteger(intEdad)}`);
console.log(`Number.isInteger(${intAltura}) = ${Number.isInteger(intAltura)} = ${typeof Number.isInteger(intAltura)}`);
console.log(`Number.isInteger(${intBarba}) = ${Number.isInteger(intBarba)} = ${typeof Number.isInteger(intBarba)}\n`);




let titu0 = `CONVERSIONES con String(conversion a string)`
console.log(`${titu0}`+'\n'+'-'.repeat(titu0.length));
console.log(`String ('${strRut}') = ${String(strRut)} = ${typeof String(strRut)}`);
console.log(`String('${strRut2}') = ${String(strRut2)} = ${typeof String(strRut2)}`);
console.log(`String('${strNombre1}') = ${String(strNombre1)} = ${typeof String(strNombre1)}`);
console.log(`String('${strNombre2}') = ${String(strNombre2)} = ${typeof String(strNombre2)}`);
console.log(`String('${strApellidos}') = ${String(strApellidos)} = ${typeof String(strApellidos)}`);
console.log(`String('${strEdad}') = ${String(strEdad)} = ${typeof String(strEdad)}`);
console.log(`String('${strEdadNegativa}') = ${String(strEdadNegativa)} = ${typeof String(strEdadNegativa)}`);
console.log(`String('${strAño}') = ${String(strAño)} = ${typeof String(strAño)}`);
console.log(`String('${strEmail}') = ${String(strEmail)} = ${typeof String(strEmail)}`);
console.log(`String('${strAltura}') = ${String(strAltura)} = ${typeof String(strAltura)}`);
console.log(`String('${strBarba}') = ${String(strBarba)} = ${typeof String(strBarba)}`);
console.log(`String('${strMalo0000}') = ${String(strMalo0000)} = ${typeof String(strMalo0000)}`);
console.log(`String('${strMalo000}') = ${String(strMalo000)} = ${typeof String(strMalo000)}`);
console.log(`String('${strMalo00}') = ${String(strMalo00)} = ${typeof String(strMalo00)}`);
console.log(`String('${strMalo0}') = ${String(strMalo0)} = ${typeof String(strMalo0)}`);
console.log(`String('${strMalo1}') = ${String(strMalo1)} = ${typeof String(strMalo1)}`);
console.log(`String('${strMalo2}') = ${String(strMalo2)} = ${typeof String(strMalo2)}`);
console.log(`String('${strMalo3}') = ${String(strMalo3)} = ${typeof String(strMalo3)}`);
console.log(`String('${strMalo4}') = ${String(strMalo4)} = ${typeof String(strMalo4)}`);
console.log(`String('${strMalo5}') = ${String(strMalo5)} = ${typeof String(strMalo5)}`);
console.log(`String('${strMalo6}') = ${String(strMalo6)} = ${typeof String(strMalo6)}`);
console.log(`String('${strMalo7}') = ${String(strMalo7)} = ${typeof String(strMalo7)}`);
console.log(`String('${strMalo8}') = ${String(strMalo8)} = ${typeof String(strMalo8)}`);
console.log(`String('${strMalo9}') = ${String(strMalo9)} = ${typeof String(strMalo9)}`);
console.log(`String('${strBolleano1}') = ${String(strBolleano1)} = ${typeof String(strBolleano1)}`);
console.log(`String('${strBolleano2}') = ${String(strBolleano2)} = ${typeof String(strBolleano2)}`);
console.log(`String(${intMalo1}) = '${String(intMalo1)}' = ${typeof String(intMalo1)}`);
console.log(`String(${intMalo2}) = '${String(intMalo2)}' = ${typeof String(intMalo2)}`);
console.log(`String(${intMalo3}) = '${String(intMalo3)}' = ${typeof String(intMalo3)}`);
console.log(`String(${intMalo4}) = '${String(intMalo4)}' = ${typeof String(intMalo4)}`);
console.log(`String(${intEdad}) = '${String(intEdad)}' = ${typeof String(intEdad)}`);
console.log(`String(${intAltura}) = '${String(intAltura)}' = ${typeof String(intAltura)}`);
console.log(`String(${intBarba}) = '${String(intBarba)}' = ${typeof String(intBarba)}\n`);

let titu9 = `CONVERSIONES con toFixie(2)`
console.log(`${titu9}`+'\n'+'-'.repeat(titu9.length));
console.log(`'${intMalo1}'.toFixed(2) = '${intMalo1.toFixed(2)}' = ${typeof intMalo1.toFixed(2)}`);
console.log(`'${intMalo2}'.toFixed(2) = '${intMalo2.toFixed(2)}' = ${typeof intMalo2.toFixed(2)}`);
console.log(`'${intMalo3}'.toFixed(2) = '${intMalo3.toFixed(2)}' = ${typeof intMalo3.toFixed(2)}`);
console.log(`'${intMalo4}'.toFixed(2) = '${intMalo4.toFixed(2)}' = ${typeof intMalo4.toFixed(2)}`);
console.log(`'${intEdad}'.toFixed(2) = '${intEdad.toFixed(2)}' = ${typeof intEdad.toFixed(2)}`);
console.log(`'${intAltura}'.toFixed(2) = '${intAltura.toFixed(2)}' = ${typeof intAltura.toFixed(2)}`);
console.log(`'${intBarba}'.toFixed(2) = '${intBarba.toFixed(2)}' = ${typeof intBarba.toFixed(2)}\n`);

let titu10 = `CONVERSIONES con toString(convertir a string)`
console.log(`${titu10}`+'\n'+'-'.repeat(titu10.length));
console.log(`'${intMalo1}'.toString() = '${intMalo1.toString()}' = ${typeof intMalo1.toString()}`);
console.log(`'${intMalo2}'.toString() = '${intMalo2.toString()}' = ${typeof intMalo2.toString()}`);
console.log(`'${intMalo3}'.toString() = '${intMalo3.toString()}' = ${typeof intMalo3.toString()}`);
console.log(`'${intMalo4}'.toString() = '${intMalo4.toString()}' = ${typeof intMalo4.toString()}`);
console.log(`'${intEdad}'.toString() = '${intEdad.toString()}' = ${typeof intEdad.toString()}`);
console.log(`'${intAltura}'.toString() = '${intAltura.toString()}' = ${typeof intAltura.toString()}`);
console.log(`'${intBarba}'.toString() = '${intBarba.toString()}' = ${typeof intBarba.toString()}\n`);
















/*console.log(`String '${valor1}' a numero de punto flotante ${parseFloat(valor1)}`);
console.log(`Su tipo era ${typeof valor1} y ahora es ${typeof parseFloat(valor1)}\n`);

console.log('parseInt(valor) :\n'+`-`.repeat('parseInt(valor) :'.length));
console.log(`String '${valor5}' a numero entero ${parseInt(valor5)}`);
console.log(`Su tipo era ${typeof valor5} y ahora es ${typeof parseInt(valor5)}\n`);

console.log('Math.ceil(valor) :\n'+`-`.repeat('Math.ceil(valor) :'.length));
console.log(`Numero de punto flotante ${valor3} redondeado hacia arriba a numero entero ${Math.ceil(valor3)}`);
console.log(`Su tipo era ${typeof valor3} y ahora es ${typeof Math.ceil(valor3)}\n`);

console.log('parseInt(valor) :\n'+`-`.repeat('parseInt(valor) :'.length));
console.log(`String '${valor5}' a numero entero ${parseInt(valor5)}`);
console.log(`Su tipo era ${typeof valor5} y ahora es ${typeof parseInt(valor5)}\n`);

console.log('valor.toString() :\n'+'-'.repeat('valor.toString() :'.length));
console.log(`Numero de punto flotante ${valor2} a string '${valor2.toString()}'`);
console.log(`Su tipo era ${typeof valor2} y ahora es ${typeof valor2.toString()}\n`);

console.log('Math.floor(valor) :\n'+`-`.repeat('Math.floor(valor) :'.length));
console.log(`Numero de punto flotante ${valor3} redondeado hacia abajo a numero entero ${Math.floor(valor3)}`);
console.log(`Su tipo era ${typeof valor3} y ahora es ${typeof Math.floor(valor3)}\n`);

console.log('valor.toFixie(2) :\n'+`-`.repeat('valor.toFixie(2) :'.length));
console.log(`Numero de punto flotante ${valor4} redondeado a 2 decimales ${valor4.toFixed(2)}`);
console.log(`Su tipo era ${typeof valor4} y ahora es ${typeof valor3.toFixed(2)}\n`);



console.log('Boolean(valor) :\n'+`-`.repeat('Boolean(valor) :'.length));
console.log(`Numero entero ${valor6} a valor booleano ${Boolean(valor6)}`);
console.log(`Numero entero ${valor7} a valor booleano ${Boolean(valor7)}`);
console.log(`Numero entero ${valor8} a valor booleano ${Boolean(valor8)}`);
console.log(`Su tipo era ${typeof valor6} y ahora es ${typeof Boolean(valor6)}`);
console.log(`Su tipo era ${typeof valor7} y ahora es ${typeof Boolean(valor7)}`);
console.log(`Su tipo era ${typeof valor8} y ahora es ${typeof Boolean(valor8)}\n`);

console.log('Math.round(valor) :\n'+`-`.repeat('Math.round(valor) :'.length));
console.log(`Numero de punto flotante ${valor9} redondeado a su entero más cercano ${(Math.round(valor9*100)/100)}`);
console.log(`Su tipo era ${typeof valor9} y ahora es ${typeof Math.round(valor9)}`);
console.log(`Numero de punto flotante ${valor10} redondeado a su entero más cercano ${Math.round(valor10*100)/100}`);
console.log(`Su tipo era ${typeof valor10} y ahora es ${typeof Math.round(valor10)}\n`);

*/

