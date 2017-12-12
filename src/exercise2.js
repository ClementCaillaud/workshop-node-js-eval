exports.run = function(input)
{
  console.log("Exercise #2");
  //Initialisation de la sortie
  var output = "";

  //Pour chaque caractère...
  for (var i=0; i<input.length; i++)
  {
    //S'il est < 6, on l'ajout à la chaine de sortie
    if(input[i]<6)
    {
      output += input[i];
    }
  }
  //Retourne la chaine sans les nombres >= 6
  return output;
};
