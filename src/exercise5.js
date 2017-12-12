exports.run = function(input)
{
  console.log("Exercise #5");

  //Lecture du fichier passé en paramètre
  var fs = require('fs');
  var buf = fs.readFileSync(input);
  var str = buf.toString();
  //On sépare les nombres et on les met dans un tableau
  var tab = str.split('\r\n');

  //Initialisation du résultat
  var result = 0;

  //On additionne chaque nombre au résultat
  for(var i=0; i<tab.length; i++)
  {
    result += Number(tab[i]);
  }
  //On retourne la somme des nombres contenus dans le fichier
  return result;
};
