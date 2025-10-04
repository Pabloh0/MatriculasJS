
//Lo hago en una funcion para poder llamarlo luego justo cuando se le de al boton
function calcular() {

  //Aqui hago las variables
  //El punto checked me trae verdadero falso por lo que es muy sencillo comprobar
  const horas = parseInt(document.getElementById('horas').value);
  const m1 = document.getElementById('m1').checked;
  const m2 = document.getElementById('m2').checked;
  const antiguo = document.getElementById('antiguo').checked;
  const repetidor = document.getElementById('repetidor').checked;
  const pb = document.getElementById('pb').checked;
  const pa = document.getElementById('pa').checked;


  //Aqui hago uso del verdadero falso que me trae el checked
  //Y compruebo que si esta m2 pulsado y m1 no salte error
  if(!m1 && m2){
    document.getElementById('resultado').textContent =
    'Fiera no puedes matricularte en mates II sin la I'
  } else if(pb && pa){
    document.getElementById('resultado').textContent =
    'Makinon primero aprueba la programacíon de primero'
  } else if (antiguo && repetidor){
    document.getElementById('resultado').textContent =
    'No puedes ser las dos cosas gamba'
  } else {
      //Calculo el precio base
    let precio = horas * 5;

  
    //Y le aplico las restricciones al precio segun el ejercicio
  if (repetidor) precio *= 2;
  if (antiguo) precio *= 0.88; 

 
  //Por último pinto en pantalla el precio
  document.getElementById('resultado').textContent =
    'Precio mensual: ' + precio.toFixed(2) + ' €';
  }
}























