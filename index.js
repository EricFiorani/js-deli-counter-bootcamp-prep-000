var katzDeli = [];

function takeANumber(katzDeliLine, name){
  var orderInLine = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number" + orderInLine + " in line.";
}

function nowServing(katzDeli){
  let i = 0;
  while (i < katzDeli.length){
    i++;
  }
  if (katzDeli.length === 0){
    return "There is nobody waiting to be served!";
 } else {
    return ('Currently serving ${katzDeli.shift()}.');
  }
}
