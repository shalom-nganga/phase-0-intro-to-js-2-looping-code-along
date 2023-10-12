// Code your solutions in this file

const name = (["Guadalupe", "Ollie", "Aki"])
function writeCards(name) {
 const thankYouMesssages = [] 
  for (let x = 0; x < name.length; x++) {
    const message = `Thank you, ${name[x]}, for the wonderful surprise gift!`
    thankYouMesssages.push(message)
  }
  return thankYouMesssages
 }

 function countDown(number) {
  console.log(number);
  let x = number -1
  while (x >= 0) {
    console.log(x)
    x--
  }
 }














