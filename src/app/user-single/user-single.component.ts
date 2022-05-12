import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; // aggiunto Input
import { IUser } from '../Model/User';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css'],
})
export class UserSingleComponent implements OnInit {
  // dichiaro e inizializzo var da componente padre a figlio, come le vede il figlio
  @Input() utente!: IUser; // nome variabile dalla parte del figlio occorrenza singola del loop
  @Input() indice: number = 0; // nome variabile dalla parte del figlio indice per numerare gli utenti
  @Output() cancellato = new EventEmitter<IUser>(); // variabile dello user da cancellare passato al padre user-list
  // inizializzare e tipizzare sempre variabili
  constructor() {}

  ngOnInit(): void {}

  selpercanc(userpassato: IUser) {
    console.log(
      'user selezionato per cancellazione da user-SINGLE',
      userpassato.name
    );
    this.cancellato.emit(userpassato); // passa in emissione lo user da cancellare
  }
}
