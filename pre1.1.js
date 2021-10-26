var n = parseInt(prompt('Ingrese Cantidad de usuarios')) 
var data = [];
const elementos = []


function datoss (n){
for (let i = 0; i < n; i++) {
    var nombre = prompt('Ingrese Nombre')
    var matricula = prompt('Ingrese Matricula')
    var grupo = prompt("Ingresa el grupo")
    var sexo = prompt ("Ingresa el sexo")
    var calificacion = parseFloat(prompt ("Ingresa la calificacion"));
    var datos = {
        nombrer: nombre,
        matricula: matricula,
        grupo: grupo,
        sexo: sexo,
        calificacion: calificacion,

    }
        data.push(datos);
        elementos.push(sexo)
    }
    return data;
}
datoss(n);

var op= parseInt(prompt('que desea hacer        1.ver la cantidad de alumnos        2,Cantidad por  genero       3.Media de calificaciones        4. alumno en especifico         5.conjunto de alumnos        6. informacion por grupo       ')) 

switch(op) {
    case 1:
      total()
      break;
    case 2:
        console.log("hombres:"+hom(elementos, 'hombre'));
        console.log("mujeres"+hom(elementos, 'mujer'));
       
      break;
    case 3:
        console.log("promedio total:"  +  ""+  promedio(data));
      break;
    case 4:
        console.log(alumno_por_alumno())
      break;
      case 5:
           
        console.log(alumno_por_grupo())
      break;
      case 6:
        var g = prompt('Quieres solicitar un grupo en especifico? escribe "si" o "no"')
        var grupo = prompt("Que grupo quieres ver")
        if (g.toLowerCase() == 'si'){
            var h = grupo_de_alumnos(grupo)
            console.log(h);
            sexo(h);
            let promedio = 0;
            for (let i = 0; i < h.length; i++) {
                promedio = promedio + h[i].calificacion;
            }
            console.log(promedio/h.length);
            
        }   
      break;
  }



function hom (matrizValores, busqueda) {
    let unaLinea = matrizValores.flat();
    return unaLinea.filter(elemento => elemento === busqueda).length;
  }

function alumno_por_alumno(){
    var alumno_solo = prompt("Que alumno quieres ver")
    for (let i = 0; i < data.length; i++) {
        if (data[i].nombrer == alumno_solo || data[i].matricula == alumno_solo){
            return(data[i])
        }
    }
}

function alumno_por_grupo(){
   
    var alumno_grupo = prompt("Que alumno quieres ver")
    for (let i = 0; i < data.length; i++) {
        if (data[i].nombrer == alumno_grupo || data[i].matricula == alumno_grupo){
            return(data[i])
        }
    }

}

function total(){
    console.log("Cantidad de alumnos:"+ data.length);
}


function grupo_de_alumnos(grupo){
    var a = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].grupo == grupo){
            a.push(data[i])
        }
    }
    return a;
}
function sexo (grupo){
    let mas = 0
    let fem = 0
    for (let i = 0 ; i < grupo.length ; i++) {
        if (data[i].sexo.toLowerCase() == "hombre"){
            mas++           
        }
        if (data[i].sexo.toLowerCase() == "mujer"){
            fem++          
        }
    
    }
    console.log("Este es el numero de hombres que hay en el grupo : " + mas)
    console.log("Este es el nuemro de mujeres que hay en el grupo : " + fem)
    var n1= mas;
    var n2 = fem;
    var n3 = n1 + n2;
    console.log("Este es el total de alumnos en el grupo : " + n3)
    
}


function promedio (x){
    var promedio = 0;
    for (let i = 0; i < x.length; i++) {
        promedio = promedio + data[i].calificacion;
    }
    return promedio / x.length;
}







