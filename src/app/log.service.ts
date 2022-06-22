
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor() {}

  log(message: string) {
    // metodo per spiegare i messaggi del servizio
    console.log('Log Service', message);
  }
}
