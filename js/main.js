/**
 * Descrizione
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati (tadaaa!)
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 */
//
var numPc=random(16);
var userLife=3;
var scelteGiuste=[];
console.log(numPc)


//utente
 var utente=true;
while(utente==true && scelteGiuste.length<userLife){
    var messageUtente=parseInt(prompt('inserisci un numero per GIOCARE!'));
    if(messageUtente>100){
        alert('hai inserito un valore sbagliato')
    }
    else{
        var confronto=control(numPc,messageUtente);
        if(confronto==true){
            utente=false;
            alert('hai perso');
        }
        else{
            scelteGiuste.push(messageUtente)
        }

    }
    
}
alert('HAI VINTO!!!!!!!')
 
 //funzioni numeri random
 
    function random(index){
     var alfa=[];
     for(n=0; n<index;n++){
         var number=Math.floor(Math.random()*101);
         alfa.push(number);
        }
        return alfa;
    }
    //funzioni controllo
    function control(list,num){
        var finde=false;
        for(var i=0; i<list.length; i++){
            if(list[i]===num){
                
                finde=true;
            }
           }
           return finde;
    }
