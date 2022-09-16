import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, retry } from 'rxjs';
import { LogService } from './log.service';
@Injectable({
  providedIn: 'root'
})
export class JokeApiServiceService {

  constructor(private httpClient:HttpClient, private logService: LogService ) { }

// questo servizio serve solo per creare un metodo per ritornare la get per prendere il joke API httpClient tipizzate observable any
getJoke(): Observable<any> {
  return this.httpClient
  .get<any>('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart') // indirizzo API che rilascia joke solo twopart
  // .get<any>('https://v2.jokeapi.dev/joke/Any') // indirizzo API che rilascia joke sia twopart che single
  // .pipe( // concatenabile con pipe altri metodi dell'osservabile importati da rxjs per gestire
  //   tap((data) => this.logService.log(`getJoke eseguito ${data}`)), // data è il joke catturato
  //   retry(3), // riprovo a chiamare se fallisce la chiamata
  // catchError(this.handleError) // gestione degli errori con metodo di classe VA IN ERRORE
  // );

 }

}
