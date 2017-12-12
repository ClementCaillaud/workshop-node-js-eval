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
  var result = "";
  for(var i=0; i<numbers.length; i++)
  {
    result += "The value of "+letters[i]+" is "+numbers[i];
    if(letters[i+1])
    {
      result += ", ";
    }
  }
  return result;
}
