import { Component, EventEmitter, OnDestroy, OnInit, Output, } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContatoreService } from '../contatore.service';

@Component({
  selector: 'app1-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css'],
})
export class EditCounterComponent implements OnInit, OnDestroy {
  @Output() modContatore: EventEmitter<number> = new EventEmitter<number>(); // dichiarativa di emessione esito della operazione somma o sottrazione del form
  @Output() checkErrore: EventEmitter<boolean> = new EventEmitter<boolean>(); // dichiarativa di emessione esito true o false del eventuale errore per sottrazione non possibile
// per la unsubscritìption creo una proprità dove mettere la mia sottoscrizione
  subscription!: Subscription;

  // nella versione Subject laddove ho il metodo getCounter sostituisco con la gestione del valore emesso con la sottoscrizione. Anche gli altri due metodi
  // somma e sottrai richiamano il getCounter per cui adatto anche loro
  cont: number = 0; // aggiunta proprietà number per gestione dell'EventEmitter con il Subject
  constructor(private contatoreService: ContatoreService) {} // mi porto dentro il servizio dei metodi per il contatore
  ngOnInit(): void { }
  // richiamo i metodi in base alla classe del servizio

  somma(): void { // richiama il metodo somma del servizio
// passo il valore inserito in browser 'cont' al metodo somma
    this.contatoreService.somma(this.cont);
    this.checkErrore.emit(false); // emetto in output esito messaggio errore in false perchè son sicura diaver aggiunto
  }
  sottrai() { // richiama il metodo sottrai del servizio
    // passo il valore inserito in browser 'cont' al metodo sottrai
  this.contatoreService.sottrai(this.cont);
  }
  // creo metodo ngOnDestroy per gestire la unsubscribe per quando il componente edit-counter verrà distrutto
  ngOnDestroy(){
this.subscription.unsubscribe();
}
}
