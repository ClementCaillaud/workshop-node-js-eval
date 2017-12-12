exports.run = function(input)
{
  console.log("Exercise #5");

  var fs = require('fs');
  var buf = fs.readFileSync(input);
  var str = buf.toString();
  var tab = str.split('\r\n');

  var result = 0;

  for(var i=0; i<tab.length; i++)
  {
    result += Number(tab[i]);
  }
  return result;
};
