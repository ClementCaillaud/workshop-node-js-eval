exports.run = function(input)
{
  console.log("Exercise #3");
  var result = 0;

  for(var i=0; i<input.length; i++)
  {
    if(input[i].operator == 'add')
    {
      result += input[i].value;
    }
    else if(input[i].operator == 'substract')
    {
      result -= input[i].value;
    }
  }
  return result;
};
