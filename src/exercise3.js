exports.run = function(input)
{
  console.log("Exercise #3");
  //Initialisation du résultat
  var result = 0;

  //On regarde chaque objet
  for(var i=0; i<input.length; i++)
  {
    //Si l'opérateur est 'add', on additionne
    if(input[i].operator == 'add')
    {
      result += input[i].value;
    }
    //Si l'opérateur est 'substract', on soustrait
    else if(input[i].operator == 'substract')
    {
      result -= input[i].value;
    }
  }
  //Retourne le résultat des calculs passés en objet
  return result;
};
