import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user-list/user-list.component';
@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css'],
})
export class UserSingleComponent implements OnInit {
  @Input() utente!: User;
  @Output() mostraUtente = new EventEmitter<User>();

  constructor() {}

  mostra() {

    this.mostraUtente.emit(this.utente);
  }
  ngOnInit(): void {}
}
