// acquisire nome utente

var name = prompt('Inserisci il tuo nome:');

document.getElementById('name').innerHTML = name;

console.log(name);

// acquisire nome utente

var surname = prompt('Inserisci il tuo cognome:');

console.log(surname);

// acquisire colore preferito

var color = prompt('Qual è il tuo colore preferito?');

console.log(color);

// concatenare e stampare nome + cognome + colore + 20

var password = name + surname + color + '20';

document.getElementById('password').innerHTML = password;