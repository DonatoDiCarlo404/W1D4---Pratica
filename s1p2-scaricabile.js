/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
In JavaScript, troviamo sei diversi tipi di datatype: Number, String, Boolean, Undefined, Null, BigInt e Symbol.
Number riguarda i valori numerici compresi tra e-(253-1) e+(253-1), li scriviamo senza apici.
String è una sequenza di caratteri compresi tra gli apici ('' o "") e i backtick.
Boolean è un tipo di valore che ci aiuta a prendere decisioni in merito all'analisi di un oggetto, 
un'entità logica che può essere True or False.
Undefined è un valore non ancora assegnato.
Null è un valore vuoto.
BigInt è un'espressione che restituisce un valore booleano.
Symbol rappresenta un identificatore univoco.
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* 
Un oggetto in Javascript può essere pensato come un gruppo di variabili che descrivono la stessa entità.
E' un dato che raccoglie coppie chiave/valore.
*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

 
   let numero1 = 12;
   let numero2 = 20;
   let somma = numero1 + numero2;
   console.log( somma )


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* 
   let x = 12;
*/

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

 
   let name = "Donato"


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

 
   let x = 12;
   let y = 4;
   let sottrazione = x - y;
   console.log( sottrazione )


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john";
let name2 = "John";

console.log( name1 !== name2 )

let minuscolo1 = name1.toLowerCase();
let minuscolo2 = name2.toLowerCase();

console.log( minuscolo1 === minuscolo2 )


