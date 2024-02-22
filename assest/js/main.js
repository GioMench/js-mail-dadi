//console.log('test');

//MAIL 

//chiedo la mail 

let userMail = prompt('inserisci la tua mail')
//get mail by user
let mailList = ['a@a', 'b@b', 'c@c', 'd@d']
//mail arrey  
let message = 'Sorry, subscribe your mail'
//message after verify mail by user if is not subscribe

//controllo che la mail sia presente nel mio elenco

for (let i = 0; i < mailList.length; i++) {
    const mail = mailList[i]

    if (userMail === mail) {
        message = 'Welcome Back'
    }

}
//cicle for verify if mail by user is subscribe or not

console.log(message);
//stamp the eventual messager for user

////////////////////////////////////////////////////////////////////

//DADI 

//genero un numero random tra 1 e 6 sia per user che per pc 

let userNumber = Math.floor(Math.random() * 6) + 1;
//console.log(userNumber);
//generate a random number for user

let computerNumber = Math.floor(Math.random() * 6) + 1;
//console.log(computerNumber);
//generate a random number for computer

const array = []
array.push(userNumber)
array.push(computerNumber)
//console.log(array);
//add a user ad computer number to array

let result = 'you lose'
//messager for user if he lose

//stabilisco il numero più alto dei due che sara quindi il vincitore 
for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if( userNumber > computerNumber){
         result = 'you win'
    }
    
}
//cicle for find the largest number 

console.log(result);
// stamp the eventual messager for user




