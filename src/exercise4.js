exports.run = function(input)
{
  console.log("Exercise #4");

  // YOUR CODE IS WELCOME HERE


  /** STRICTLY FORBIDDEN TO CHANGE THIS CODE */
  return input(myFunction, [1, 2, 3], ["One", "Two", "Three"]);
  /** */
};

function myFunction(numbers, letters)
{
  //Initialisation de la phrase
  var result = "";

  //Pour chaque élément du tableau...
  for(var i=0; i<numbers.length; i++)
  {
    //On écrit la phrase correspondante
    result += "The value of "+letters[i]+" is "+numbers[i];
    //Si ce n'est pas le dernier élément alors on ajoute une virgule
    if(letters[i+1])
    {
      result += ", ";
    }
  }
  //Retourne la phrase voulue
  return result;
}
