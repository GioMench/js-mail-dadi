//console.log('test');

//MAIL 

//chiedo la mail 

let userMail = prompt('inserisci la tua mail')
//get mail by user
let mailList = ['a@a', 'b@b', 'c@c', 'd@d']
//mail arrey  
let message = 'Sorry, subscribe your mail'
//message after verify mail by user

//controllo che la mail sia presente nel mio elenco

for (let i = 0; i < mailList.length; i++) {
    const mail = mailList[i]

    if (userMail === mail) {
        message = 'Welcome Back'
    }

}
//cicle for verify mail by user

console.log(message);
//stamp the eventuale messager for user

