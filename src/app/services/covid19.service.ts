import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {
// creo funzione service per caricare poi sul componente il db api.covid19api come osservabile generico any
  constructor(private httpClient: HttpClient) {  }
// uso la function di Httpclient  get per ritornare tutte le proprietà presenti nella risposta dell'API, come esservabile
  getNumTot(): Observable<any> { // come osservabile generico any
    return this.httpClient.get<any>('https://api.covid19api.com/');
     }
}
