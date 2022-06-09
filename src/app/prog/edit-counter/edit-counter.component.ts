import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { ContatoreService } from '../contatore.service';

@Component({
  selector: 'app1-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css'],
})
export class EditCounterComponent implements OnInit {
  @Output() modContatore: EventEmitter<number> = new EventEmitter<number>(); // dichiarativa di emessione esito della operazione somma o sottrazione del form
  @Output() checkErrore: EventEmitter<boolean> = new EventEmitter<boolean>(); // dichiarativa di emessione esito true o false del eventuale errore per sottrazione non possibile

  constructor(private contatoreService: ContatoreService) {} // mi porto dentro il servizio dei metodi per il contatore
  ngOnInit(): void {}
  // richiamo i metodi in base alla classe del servizio 

  somma(val: number) {
     if(val < 0) { // normalizza a positivo il valore
    val = (-1 * val);
    }
    this.contatoreService.somma(val); // richiamo il metodo somma del servizio innestato sopra passando il valore immesso in input
    this.modContatore.emit(this.contatoreService.getCounter()); // emetto in outoput il risultato ripreso con il metodo get del servizio
    this.checkErrore.emit(false); // emetto in output esito messaggio errore in false perchè son sicura diaver aggiunto
  }
  sottrai(val: number) {
    if(val < 0) { // normalizza a positivo il valore
      val = (-1 * val);
      }
    this.checkErrore.emit(this.contatoreService.sottrai(val)); // richiamo il metodo sottrai del servizio innestato sopra passando il valore immesso in input
    // e torno il booleano per il messaggio di errore, poi il risultato lo prendo con il metodo getCounter di sotto
    this.modContatore.emit(this.contatoreService.getCounter()); // emetto in outoput il risultato ripreso con il metodo get del servizio
  }

}
