// Write your code here!
let newHeader = document.createElement('h1');
newHeader.id = "victory";

document.body.appendChild(newHeader);
/*newHeader.textContent = "Anastasia is the champion";*/
victory.innerHTML = "<h1>Anastasia is the champion</h1>";

const mainElement = document.querySelector('main#main');
mainElement.remove();

