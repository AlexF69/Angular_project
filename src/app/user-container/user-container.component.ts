import { Component, OnInit } from '@angular/core';
import { User } from '../user-list/user-list.component';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css'],
})
export class UserContainerComponent implements OnInit {
  utente!: User;
  visibile = true;
  constructor() {}
  mostraDettaglio(utente: User) {
    this.utente = utente;
    this.visibile = true;
  }
  chiudiDetail() {
    this.visibile = false;
  }
  ngOnInit(): void {}
}
