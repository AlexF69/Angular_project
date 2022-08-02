import { Injectable } from '@angular/core';
import { Beer, birre } from 'src/models/beer.interface';
import { BehaviorSubject, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BirraserviceService {

// ospito/prendo le birre array su la var birreObj
birreObj = birre; // birre è la varibile del file beer.interface.ts
// Per le select creo una var dove metto l'array birre tipizzato di cui sopra ad un observable di tipo behaviaur,
// che recupera sempre l'ultimo valore emesso per i nuovi osservatori sottoscritti;
// Passo this.birreObj valorizzato sopra in modo da emettere l'array al momento in cui qualcuno si sottoscrive
birreListSubject: BehaviorSubject<Beer[]> = new BehaviorSubject<Beer[]>(this.birreObj)
// var in un observable per una birra puntuale per id passato
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
  // perchè non return this.currentBirraSubject...........
  this.currentBirraSubject.next(this.birreObj.find((elemento: Beer) => elemento.id == id))
}

}

