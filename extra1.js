function drawRectangle(symbol, num)
{
  var s="";
  if (num < 3) { num = 3; }
  for (var i = 0; i < num; i++)
  {
    s += symbol;
    console.log(s);
  }
}
