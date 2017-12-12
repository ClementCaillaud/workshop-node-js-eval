exports.run = function(input)
{
  console.log("Exercise #2");
  var output = "";
  for (var i=0; i<input.length; i++)
  {
    if(input[i]<6)
    {
      output += input[i];
    }
  }
  return output;
};
