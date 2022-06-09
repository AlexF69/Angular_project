import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContatoreService {
  private counter: number = 0; // dichiarativa private
  constructor() {}

  getCounter(): number { // metodo per recuperare il valore di counter sempre anche dopo lasomma o sottrazione
    return this.counter; // ritorna semplicemente il counter
  }
  //
  somma(add: number = 1) { // metodo che aumenta il valore di counter di num deciso dall'utente (default 1) e che ne stampi il valore in console
    this.counter = this.counter + add;
  // console.log('Counter aggiunto', this.counter);
  }
  // questo metodo torna un booleano per la gestioe dell'errore
  sottrai(dim: number = 1): boolean { // metodo che diminuisce il valore di counter di un numero deciso dall'utente (default 1) e che ne stampi il valore in console
    if (dim > this.counter){
//      console.log('ERRORE Non è possibile sotrarre più del Counter');
      return true;
    } // torna errore true e esce se il valore da sottrarre supera il counter
// altrimenti fa la sottrazione correttamente e torna errore false
    this.counter = this.counter - dim;
//    console.log(this.counter);
    return false;
  }

}
