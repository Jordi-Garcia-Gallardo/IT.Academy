function ejecutar1(){
/*
Nivell 1
Exercici 1 
*/
  var nom = ['J','O','R','D','I']
  for (let i=0; i<nom.length; i++){
  console.log(nom[i]); 
  };
}; 


function ejecutar2(){

  var nom = ['J','O','8','R','D','I'];
  var numeros = '0123456789';
  var vocals = 'AEIOUaeiou';
  var consonants = 'ZXCVBNMSDFGHJKLÑÇQWRTYPzxcvbnmsdfghjklñçqwrtyp';

  for (let i=0; i<nom.length; i++){
    if (numeros.includes(nom[i])) {
        console.log('Els noms de persones no contenen el número: '+ nom[i]);
    } else if (vocals.includes(nom[i])) {
        console.log('He trobat la VOCAL '+ nom[i]);
    } else if (consonants.includes(nom[i])) {
        console.log('He trobat la CONSONANT '+ nom[i]);
    } else {    
        console.log('He trobat la CONSOOOOOOOOOOOONANT '+ nom[i]); 
    }      
  }  
}; 

function ejecutar3(){
  Array.prototype.count_value = function(){
    var Repeticions = {};
    for(var i = 0; i < nom.length; i++){
    if(!(nom[i] in Repeticions))Repeticions[nom[i]] = 0;
    Repeticions[nom[i]]++;
    }
    return Repeticions;
    }
    
    var nom = ['J', 'O', 'R', 'D', 'I'];
    Analisis = nom.count_value();
    console.log(Analisis)

}; 

function ejecutar4(){
  var nom = ['J', 'O', 'R', 'D', 'I'];
  var cognom = ['G','A','R','C','I','A'];
  var space = ['']
  var fullname = [].concat(nom, space, cognom)

  Array.prototype.count_value = function(){
  var Repeticions = {};
    for(var i = 0; i < fullname.length; i++){
    if(!(fullname[i] in Repeticions))Repeticions[fullname[i]] = 0;
    Repeticions[fullname[i]]++;
    }
    return Repeticions;
    }
  Analisis = fullname.count_value();
  console.log(Analisis)
}; 

function ejecutar5(){

  var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';  

  function correos () {
    var nosym = str.replace(/[():*]+/g,'') // eliminar los siguientes simbolos ():*
    var strlow = nosym.toLowerCase() // Convertir a minusculas
    var strpull = strlow.replace(/.es./gi, ".es  "); // corregir final emails
    var res = strpull.split(" ") 
    var res1 = res.filter(word => word.length > 1 && word.includes("@")); // Eliminar @ sueltos y palabras que no contengan @. 
    
    var result = res1.filter(onlyUnique);
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;}
             
    console.log(result);
  }
  correos();
}