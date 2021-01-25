
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

