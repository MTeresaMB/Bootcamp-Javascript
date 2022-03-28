var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";



var btnEncrypted = document.getElementById('btnEncrypt').addEventListener('click', () =>{
  var texto = document.getElementById('encrypt').value;
  var decrypt = document.getElementById("decrypt");
  decrypt.innerHTML = transformMessage(texto);
  
});

var btnDecrypted = document.getElementById('btnDecrypt').addEventListener('click', () =>{
  var texto2 = document.getElementById('decrypt').value;
  var encrypt = document.getElementById("encrypt");
  encrypt.innerHTML = transformMessageInverse(texto2);
})



var searchIndex = (alphabet, letter) => {
  for(var i = 0; i < alphabet.length; i++){
    if(alphabet[i] === letter) return i;
  }
  return -1;
}

var transformLetter = (letter, origin, destiny) => {
  var letterIndex = searchIndex(origin, letter);
  if(letterIndex === -1){
    return letter;
  }else{
    return destiny[letterIndex];
  } 
}

var transformMessage = message => {
  var messageLower = message.toLowerCase();
  var result = "";
  for(var letter of messageLower){
    result = result + transformLetter(letter, plainAlphabet, encryptedAlphabet );
  }
  return result;
}


var transformMessageInverse = message => {
  var messageLower = message.toLowerCase();
  var result = "";
  for(var letter of messageLower){
    result = result + transformLetter(letter, encryptedAlphabet, plainAlphabet );
  }
  return result;
}


