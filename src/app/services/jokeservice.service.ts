import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { IJoke } from '../models/Joke'; // interfaccia non più usato dopo intervento di Bernard
import { HttpClient } from '@angular/common/http'
import { LogService } from './log.service';
import { tap, retry, catchError, concatMap, interval } from 'rxjs';
import { JokeApiServiceService } from './joke-api-service.service';

@Injectable({
  providedIn: 'root',
})
// questo servizio serve per tornare/trasformare il joke della get API, di tipo any, in un osservabile BehaviorSubject partendo dal servizio che fa la get http della API
// Per far si che il nostro servizio possa tornare direttamente un osservabile, e non un array, usiamo un subject di tipo BehaviorSubject,
// che ad ogni sottoscrizione emetterà valore tramite metodo next. BehaviorSubject ha una sorta di cache che mantiene l'ultimo valore emesso
// e lo rende ogni volta che ci si sottoscrieve.
export class JokeserviceService {
// dichiarativa di una proprietà jokeSubject come un BehaviorSubject, array, tipizzato di due stringhe (le due parti della joke setup e delivery)
//      oppure undefined inizializzata a undefined
  jokeSubject : BehaviorSubject<[string, string]  | undefined> = new BehaviorSubject<[string, string ] | undefined>(undefined);
// nel costruttore faccio la injection del servizio JokeApiServiceService dove faccio la get dell API per usare metodi..
  constructor(private jokeApiService: JokeApiServiceService) {  }

// metodo per tornare/trasformare il joke API della get in un osservabile Observable [string, string] partendo dal servizio
// che fa la get http della API e passando per il metodo asObservable del BehaviorSubject jokeSubject
  getJoke(): Observable<[string, string]  | undefined> {
  return this.jokeSubject.asObservable() // ritorna i dati della get come un osservabile
  }

// metodo per sottoscrizione che prende i 2 campi stringa del joke che mi interessano faccio la sottoscrizione al metodo getJoke
// del metodo jokeApiService (la get API)
  newJoke(): void { // sarà poi richiamato in componente per renderizzare il joke
  const sottoscrizione: Subscription = this.jokeApiService.getJoke().subscribe( // sottoscrizione di una array function
    (data:any) => {
    this.jokeSubject.next([data.setup, data.delivery]); // prendo i dati che mi interessano setup e delivery in array function
  // una volta presi i dati del joke faccio l'unsubscribe
    sottoscrizione.unsubscribe()}
  ) }

} // fine class

