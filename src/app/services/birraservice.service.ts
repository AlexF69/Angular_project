import { Injectable } from '@angular/core';
import { birre } from 'src/models/beer.interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BirraserviceService {

  constructor() { }
// proprietà per tornare l'array di birre / che ritorni l'observable di dati
get returnbirre_p() {
  return of(birre) // of = metodo per ritornare l'array di birre trasformato in observable
}
// oppure al posto della proprietà un metodo per tornare l'array di birre trasformato in observable da metodo of
returnbirre_m() {
  return of(birre) // metodo per ritornare l'array di birre trasformato in observable
}
// un metodo che prenda come parametro un id e che ritorni l'oggetto corrispondente sotto forma di observable
returnbirra_by_id(id: number){
  return of(birre.find(elemento => elemento.id == id))
}

}

