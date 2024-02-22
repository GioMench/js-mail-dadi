//console.log('test');

//MAIL 

//chiedo la mail 

//let userMail = prompt('inserisci la tua mail')

//add to login button the function
document.getElementById('login').addEventListener('click', function () {

    let userMail = document.getElementById('mail')
    //get mail by user
    let mailList = ['a@a', 'b@b', 'c@c', 'd@d']
    //mail arrey 

    let message = 'Sorry, subscribe your mail'
    //message after verify mail by user if is not subscribe

    //controllo che la mail sia presente nel mio elenco
    for (let i = 0; i < mailList.length; i++) {
        const mail = mailList[i]

        if (userMail.value === mail) {
            message = 'Welcome Back'
        }


    }
    //cicle for verify if mail by user is subscribe or no
    const feedback = document.getElementById('feedback');
    feedback.innerHTML= message;
    //stamp the eventual messager for user
})


////////////////////////////////////////////////////////////////////

//DADI 

//add to button 'play' the function
document.getElementById('play').addEventListener('click', function () {

//genero un numero random tra 1 e 6 sia per user che per pc 
let userNumber = Math.floor(Math.random() * 6) + 1;
//console.log(userNumber);
//generate a random number for user
const userNumb = document.getElementById('usernumb');
userNumb.innerHTML= userNumber;
//stamp the user number 

let computerNumber = Math.floor(Math.random() * 6) + 1;
//console.log(computerNumber);
//generate a random number for computer
const pcNumb = document.getElementById('pcnumb');
pcNumb.innerHTML= computerNumber;
//stamp the computer number

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

    if (userNumber > computerNumber) {
        result = 'you win'
    }

}
//cicle for find the largest number 
const theResult = document.getElementById('result');
theResult.innerHTML= result;
//console.log(result);
// stamp the eventual message for user


})
