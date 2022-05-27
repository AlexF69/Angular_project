import { Component, EventEmitter, OnInit, Output } from '@angular/core';
export interface User {
  name: string;
  surname: string;
}
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Output() mostraUtente = new EventEmitter<User>();

  users: User[] = [
    { name: 'Alessandra', surname: 'Fiocco' },
    { name: 'Giuseppe', surname: 'Fina' },
    { name: 'Stefano', surname: 'Assogna' },
  ];

  constructor() {}

  mostra(utente: User) {

    this.mostraUtente.emit(utente);
  }

  ngOnInit(): void {}
}
