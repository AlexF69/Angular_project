import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }
// metodo del servizio per fare console log del messaggio/ per spiegare i messaggi del servizio
  log(message: string) {
    console.log('Log Service', message);
  }

}
