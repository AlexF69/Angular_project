import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LogService } from '../log.service';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ContatoreService {

  private counter: number = 0; // dichiarativa private
  // aggiunta per Subject - per non perdere il controllo sul nostro subject usiamo una proprietà privata e poi esponiamo solo la parte pubblica
  private counterSubject = new BehaviorSubject<number>(this.counter) //  per non perdere il controllo sul nostro subject usiamo una proprietà privata e poi esponiamo solo la parte pubblica
  public counter$ = this.counterSubject.asObservable(); // proprietà pubblica creata per esporre solo la parte osservabile del nostro subject, escludendo la next
  //
  errorSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  //
  constructor(private logService: LogService) {}
// metodo get gestito con subject
  getCounter(): Observable<number>  { // per recuperare il valore di counter sempre anche dopo la somma o sottrazione - versione per Subject ritorno observable
      return this.counter$.pipe(tap(() => this.logService.log('in servizio getCounter eseguito')));
    // versione per Subject ritorno un observable e in pipe uso metodo tap per gestire il logservice
  }
  //ho messo i controlli sull'errore nei metodidel servizio
 somma(add: number = 1) { // metodo che aumenta il valore di counter di num deciso dall'utente (default 1) e che ne stampi il valore in console

  if (this.counter + add < 0 ){
    console.log('counter non può essere minore di zero in somma di servizio');
    this.errorSubject.next(true);

  } else {
    this.counter = this.counter + add;
    this.counterSubject.next(this.counter); // emissione valore sommato con next di number
    this.errorSubject.next(false); // emissione no errore con next di booleana
    console.log('this.counter', this.counter)
  }
  }
  // questo metodo torna un booleano per la gestione dell'errore
  sottrai(dim: number = 1): void { // metodo che diminuisce il valore di counter di un numero deciso dall'utente (default 1) e che ne stampi il valore in console
    if (this.counter - dim < 0){
     console.log('ERRORE Non è possibile sotrarre più del Counter');
    this.errorSubject.next(true); // emissione si errore con next di booleana
    } // torna errore true e esce se il valore da sottrarre supera il counter
// altrimenti fa la sottrazione correttamente e torna errore false
else {
    this.counter = this.counter - dim;
    this.counterSubject.next(this.counter);// emissione valore sottratto con next di number
    this.errorSubject.next(false); // emissione no errore con next di booleana
    this.logService.log('in servizio sottrai eseguita')
    console.log('Counter sottratto',this.counter);
  }
}
// dichiaroun metodo per gestire l'errore
  showError(): Observable<boolean> {
    return this.errorSubject.asObservable();
  }

}
