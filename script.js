// Establishing a class that will contain functions to encrypt and decrypt our messages
class ShiftCipher {
  constructor(shiftNumber){
    this.shiftNumber = shiftNumber;
  }
  // Creating a method/function 'encrypt' to do the encrypting, has a parameter of message
  encrypt(message) {
    // we declare a variable for the encrypted message, so we can store its value there
    let shiftedMessage = '';
    // creating a for loop to iterate through each character of the message, where with each iteration, we shift the character by the number input from our class and return the string. 
    for (let i = 0; i < message.length; i++){
      let charCode = message.charCodeAt(i);
      // the charCodeAt() method allows us access to the UTF-16 code unit where each character has a specific number - it is this number we will store in the variable charCode
      charCode = (charCode + this.shiftNumber) % 65536;
      // the UTF-16 contains 65536 units, so here, we are ensuring that if the characters go past that, they will loop back to the beginning again
      if (shiftedCode < 0) {
      shiftedCode += 65536;
    }
    // here, we save the character code we got from the previous method, and use String. to turn it into a string again
      shiftedMessage += String.fromCharCode(charCode);
      // additionally, we make the final message uppercase
      shiftedMessage.toUpperCase();
    }
    return shiftedMessage;
  }
  // a method/function to decrypt the message we pass in as the argument - here, we will detract to the previous character, rather than go forward to the next character
  decrypt(message) {
    let shiftedMessage = '';
    for (let i = 0; i < message.length; i++){
      let charCode = message.charCodeAt(i);
      // it is the same process as above, except we are subtracting the value of shiftNumber to go backwards.
      charCode = (charCode - this.shiftNumber) % 65536;
      if (shiftedCode < 0) {
      shiftedCode += 65536;
    }
      shiftedMessage += String.fromCharCode(charCode);
      // we make the final message lowercase
      shiftedMessage.toLowerCase();
    }
    return shiftedMessage;
  }
}

