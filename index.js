function takeANumber (line, person) {
  line.push(person); 
  return "Welcome, " + person + ". You are number " + line.length + " in line."; 
  //remember your spacing!! ^^^
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}
// If nobody is in line, return- "There is nobody waiting to be served!".  Else return- "Currently serving 'guest' '.' ".



function currentLine (line) {
  if (line.length ===0) {
    return "The line is currently empty.";
  }
    var num = [];
   for(var i=0; i<line.length; i++) {
    num.push(i+1 + ". "+ line[i]);
  }
  return "The line is currently: " + num.join(', ');
}
// Here we are adding numbers '1., 2., 3.,' to our function assuming there is someone(s) waiting in currentLine.  Both