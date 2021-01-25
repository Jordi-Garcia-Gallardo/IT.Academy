/* 
Nivell 1
Exercici 2 
Al bucle, si la lletra és una vocal imprimeix a la consola: ‘He trobat la VOCAL: __’. Sinó, imprimeix: ‘He trobat la CONSONTANT: __’.
Si trobes un número, mostra per pantalla: ‘Els noms de persones no contenen el número:
*/

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

