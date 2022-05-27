import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user-list/user-list.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  constructor() {}
  @Input() utente?: User;
@Output() chiudi = new EventEmitter();

valorizzaChiudi(){
  this.chiudi.emit();
}

  ngOnInit(): void {}
}
