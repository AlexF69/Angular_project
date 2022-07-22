import { Injectable } from '@angular/core';
import { Beer, birre } from 'src/models/beer.interface';
import { BehaviorSubject, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BirraserviceService {

// ospito/prendo le birre array su una variabile
  birreObj = birre;
// passo l'array in un observable per le select
  birreListSubject: BehaviorSubject<Beer[]> = new BehaviorSubject<Beer[]>(this.birreObj)
// var in un observable per una birra puntuale
currentBirraSubject: BehaviorSubject<Beer | undefined> = new BehaviorSubject<Beer | undefined>(undefined)

  constructor(){  }
  // metodo per tornare lista birre come observable
getAllBirre(): Observable<Beer[]>{
  return this.birreListSubject.asObservable()
}
  // metodo per tornare una birra come observable
getCurrentBirraSubject(): Observable<Beer | undefined>{
  return this.currentBirraSubject.asObservable()
}
// un metodo che prenda come parametro un id e che ritorni l'oggetto corrispondente sotto forma di observable
getCurrentBirraById(id: number): void {
  this.currentBirraSubject.next(this.birreObj.find((elemento: Beer) => elemento.id == id))
}

// // proprietà per tornare l'array di birre / che ritorni l'observable di dati
// get returnbirre_p() {
//   return of(birre) // of = metodo per ritornare l'array di birre trasformato in observable
// }
// // oppure al posto della proprietà un metodo per tornare l'array di birre trasformato in observable da metodo of
// returnbirre_m() {
//   return of(birre) // metodo per ritornare l'array di birre trasformato in observable
// }
// // un metodo che prenda come parametro un id e che ritorni l'oggetto corrispondente sotto forma di observable
// returnbirra_by_id(id: number){
//   return of(birre.find(elemento => elemento.id == id))
// }

}

