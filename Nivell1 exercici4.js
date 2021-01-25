
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

