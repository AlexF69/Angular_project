import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IJoke } from 'src/app/models/Joke';
import { JokeserviceService } from 'src/app/services/jokeservice.service';

@Component({
  selector: 'jk-jattuali',
  templateUrl: './jattuali.component.html',
  styleUrls: ['./jattuali.component.css'],
})
// componente che visualizza il joke nuovo ogni tot secondi
export class JAttualiComponent implements OnInit {
  // dichiarazione per il joke che arriva dalla sottoscrizione
  joke!: Subscription;
  jokeCorrente: [string, string] | undefined = undefined; // dicharativa come array per inizializzazione in ngOnInit e lo passo all'html
  // dichiarazione degli array dei joke dei due box liked e disliked e inizializzazione a vuoto
  likeJoke: [string, string][] = []; // array joke piaciuti da passare all'html
  disLikeJoke: [string, string][] = []; // array joke non-piaciuti da passare all'html
  // iniezione servizio jokeService dove è la sottoscrizione
  constructor(private jokeService: JokeserviceService) {
    this.splice();
  }
  // richiamo il servizio di sottoscrizione del joke ogni volta che richiamo il componente jattuali in inizializzazione ngOnInit, per visualizzare il nuovo joke
  ngOnInit(): void {
    this.joke = this.jokeService
      .getJoke()
      .subscribe((data: [string, string] | undefined) => {
        this.jokeCorrente = data; // lo valorizzo per passarlo all'html
      }); // in this.joke mette il jokeCorrrente valorizzato con i data della sottoscrizione
    // set dell'intervallo per mostrare il joke ogni tot secondi
    setInterval(() => {
      this.jokeService.newJoke();
    }, 1000);
  } // fine ngOnInit
  //
  // metodo per aggiungere un joke selezionato dal bottone con click sull'array dei piaciuti
  addLikeJoke(joke: [string, string] | undefined): void {
    if (joke) {
      // controlla se joke pieno
      this.likeJoke.push(joke); // fai la push del joke ricevuto in input sull'array likeJoke
      console.log(this.likeJoke);
    }
  }
  addDisLikeJoke(joke: [string, string] | undefined): void {
    if (joke) {
      // controlla se joke pieno
      this.disLikeJoke.push(joke); // fai la push del joke ricevuto in input sull'array likeJoke
      console.log(this.disLikeJoke);
    }
  }
  // metodi per passare i joke da un box all'altro, dai linke a dislike e viceversa: ricevono in input l'indice del elemento-joke
  // dell'array in cui devono togliere il joke, tramite event binding)
  // metodo per aggiungere un joke selezionato dal bottone con click sull'array dei non-piaciuti
  addDisLikeJokeLista(index: number ): void {
    if (index) { // controllo se index passato dal event binding è valorizzato
      // fa la push/aggiunge il joke dei piaciuti all'array dei non piaciuti, joke al quale il bottone si riferisce (anche il bottone è nel ngFor)
      // e contemporaneamente cancella il joke dello stesso indice sull'array dei piaciuti
      this.disLikeJoke.push(...this.likeJoke.splice(index-1, 1)); // cancella da index-1per un elemento per prendere quello in quel momento sul bottone
      console.log(this.disLikeJoke);
    }
  }
  // metodo per aggiungere un joke selezionato dal bottone con click sull'array dei piaciuti
  addLikeJokeLista(index: number ): void {
    if (index) { // controllo se index passato dal event binding è valorizzato
      // fa la push/aggiunge il joke dei non-piaciuti all'array dei piaciuti, joke al quale il bottone si riferisce (anche il bottone è nel ngFor)
      // e contemporaneamente cancella il joke dello stesso indice sull'array dei non-piaciuti
      this.likeJoke.push(...this.disLikeJoke.splice(index-1, 1)); // cancella da index-1per un elemento per prendere quello in quel momento sul bottone
      console.log(this.likeJoke);
    }
  }
// il seguente codice per fare una esempio di cosa fatto nei metodi precedenti per gestire il passaggio del joke da una lista all'altra,
// non impatto sull'applicazione. E esempio di utilizzo di splice con cui faccio solo console.log console log
  splice(){
    // dichiaro un array di mesi e cancello con metodo splice alcuni elementi finali
    // l'opzione -n cancella gli ultimi n elementi dell'array
    const months = ['Jan', 'March', 'April', 'June'];
    // in mese (automanticamente dichiarato come array) metto la cancellazione degli ultimi n elementi indicata da -n
    const mese = months.splice(-2); // l'opzione -n cancella gli ultimi n elementi dell'array
    console.log('mese -2', mese);  // avrò solo Jan e March
    const new1 = []; // creo una var array vuota
    new1.push(mese); // lo valorizzo con mese cioè quel che rimane dell'array precedente
    console.log('new1', new1) // avrò solo Jan e March
  }
}
