# Angular - Exercise 12

## Utilizzare questa API: https://sv443.net/jokeapi/v2/ irraggiungibile

==> quello corretto dato da Stefano è https://v2.jokeapi.dev/joke/Any  

==> indirizzo api dato da Bernard per lo svbolgimento dell'esercizio che emette solo joke di tipo twopart
https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart

Realizzare una *semplicissima* applicazione che ogni 5 secondi recuperi un `Joke` dall'api e lo mostri nella sezione `Joke Attuale` (Dopo 5 secondi, verrà sostituito con un altro `joke`), l'utente avrà modo di scegliere se gli piace o no e il joke verrà mostrato nella sezione a lui dedicata. Da queste sezioni `Joke piaciuti - Joke non piaciuti` sarà possibile modificare il singolo `Joke` per spostarlo nell'altra sezione

![reference](D:\Lavori\Develhope\Tutor\Esercizi\angular\parte 2\14. Angular esercizio 12\reference.jpg)

**********************
Importato bootstrap x css
*
Mostrare le sezioni su una unica web-pg, forse il rooting non serve.... Asso lo fa?
Creare un componente per ogni sezione: `Joke Attuale` + `Joke piaciuti` + `Joke non piaciuti` con i relativi bottoni( due per ogni box )
    ==> creati jattuali, jnon-piaciuti, jpiaciuti
Se vuoi fare che ogni sezione visualizza solo due barzellette alla volta --> alla terza gestire la rimmozione a video ma lasciare in tabella/array sottostante con cui gestire la lista joke (?): Peppe gestisce una tabella con due 'li' (lista) e visualizza per codice type.....
Per la visualizzazione dei joke controllare la tipologia ("type": "twopart" oppure "single") per le righe da far vedere o il numeratore da mostrare a snx? --> risolto con link sole barzellette twopart dato da Bernard
Visto con Asso:
Asso Crea un componente per ogni sezione e uno per ogni bottone like e dislike che viene utilizzato in maniera diversa da ogni componente.
Dietro le 2 liste like e dislike ci sono 2 array di oggetti barzellette da gestire con push o delete(?). 
Le joke in emissione possono essere ripetute dalla API, quindi ad ogni click sui pulsanti like o dislike controllare cocice id se già presente nelle liste e se coerente con la scelta precedente, nel caso cancellarlo e inserirlo di nuovo nella lista corretta.
Tipizzare Joke creando un .ts sotto folder Model. Dare opzionali e con ? i campi dell'oggetto joke che non sono sempre uguali e dipendono dal type. Dare i valori possibili (vd i valori possibili scorrendo più barzellette o vd come già fatto da Asso).
    ==> Creata interfaccia IJoke sotto folder models da importare nei componenti .ts che la richiamano
L'osservabile è sul metodo del servizio ed emette ogni 5'' indipendentemente dal clik. Quindi nel NgOnInit del componente Joke Attuale deve comparire la barzelletta ogni tot secondi (5-10...)
    ==>
La sottoscrizione (subscription) è sul bottone like e dislike e usa metodo next per leggere valore dell'osservabile al click e farci quello che deve, cioè spostarlo in una lista desiderata.
L'osservabile del servizio è di tipo num (?) mentre le sottoscrizione torna sempre un osservabile ma di tipo oggetto, tipizzato joke, quindi va fatta una trasformazione in fase di metodo di servizio da num a joke(?).... (vd come fatto da Asso)
****
Rivisto con Bernard e implementato con due servizi che prendono la joke: uno prende i dati API di tipo any e il secondo trsforma in joke con i soli due campi che mi interessano





