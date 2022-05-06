import { Component, OnInit, Input } from '@angular/core'; // aggiunto Input
import { IUser } from '../Model/User';
// aggiunto manualmente OLD da togliere
// import { IUser } from 'src/app/Model/User';
// import { Role } from 'src/app/Model/User';
// import { Gender } from 'src/app/Model/User';
// import { Address } from 'src/app/Model/User';
// import { Company } from 'src/app/Model/User';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css'],
})
export class UserSingleComponent implements OnInit {
  // dichiaro e inizializzo var da componente padre a figlio, come le vede il figlio
  @Input() pippo!: IUser; // nome variabile dalla parte del figlio occorrenza singola del loop
  @Input() indice: number = 0; // nome variabile dalla parte del figlio indice per numerare gli utenti
  // inizializzare e tipizzare sempre variabili
  constructor() {}

  ngOnInit(): void {}
}
