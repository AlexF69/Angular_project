import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {
  // ?? x gestire i servizi di Http con osservabili e sottoscrizioni per visualizzare i dati?? in componente covid19.component.ts
  // ho bisogno di crearmi l'nterfaccia modello dati della PAI?? se si in base a quale struttura oggetti?
  // vd file creato covid19db.json ........ devo tipizzare???
  // inerface creata Covid19api
  constructor(private httpClient: HttpClient) {  }
// function per ritornare il numero complessivo di proprietà presenti nella risposta dell'API
  getNumTot() {
    return this.httpClient.get('https://api.covid19api.com/');
     }
}
