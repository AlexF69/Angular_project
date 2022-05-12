import { Component, OnInit, Input } from '@angular/core';
// aggiunto manualmente
import { IUser } from 'src/app/Model/User';
import { Role } from 'src/app/Model/User';
import { Gender } from 'src/app/Model/User';
import { Address } from 'src/app/Model/User';
// import { Company } from 'src/app/Model/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  // dichiarativa di un array tipizzato composto da diversi oggetti in ogni sua occorrenza --> indicare [] sulla interface
  users: IUser[] = [
    {
      id: 3487,
      name: 'Mario',
      surname: 'Rossi',
      age: 25,
      dateOfBirth: '1995-14-12',
      address: {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: '00100',
      },
      role: Role.STAFF,
      username: 'MarioRossi80',
      profilePhotoUrl: 'https://bit.ly/3yRngEP',
      gender: Gender.MALE,
    }, // fine occorrenza 0
    {
      id: 12312,
      name: 'Maria',
      surname: 'Rossa',
      age: 26,
      dateOfBirth: '1994-10-11',
      address: {
        city: 'Palermo',
        street: 'Via Palermo 10',
        postalCode: '90100',
      },
      role: Role.MANAGER,
      username: 'MariaRossa94',
      profilePhotoUrl: 'https://bit.ly/3DWWxuj',
      gender: Gender.FEMALE,
    }, // fine occorrenza 1
    {
      id: 45645,
      name: 'Elis',
      surname: 'Miao',
      age: 5,
      dateOfBirth: '2016-05-08',
      address: {
        city: 'Palermo',
        street: 'Via Palermo 120',
        postalCode: '90100',
      },
      role: Role.ADMIN,
      username: 'ElisMiao',
      profilePhotoUrl: 'https://bit.ly/3zU6iH3',
      gender: Gender.FEMALE,
    }, // fine occorrenza 2
  ];
  @Input() cancellato!: IUser; // nome variabile dalla parte del figlio occorrenza singola del loop
  constructor() {}

  ngOnInit(): void {}
  cancello(userdacanc: IUser) {
    // let indice = userdacanc.id;
    //  indice = userdacanc.id;
    console.log(
      'user selezionato per cancellarlo da user-LIST',
      userdacanc.name
    );
    console.log(
      'id dello user selezionato per cancellarlo da user-LIST',
      userdacanc.id
    );
    // cancellazione elemento array user in componente list (this.users) in base a valore in userdacanc
    // da input. Uso metodo filter per filtrare in un nuovo array o nello stesso mio array this, tutti
    // gli elementi che non sono quello ricevuto in input da cancellare (userdacanc).

    this.users = this.users.filter(function (f) {
      // let newArray = this.users.filter(function (f) { //oppure uso un nuovo Array di appoggio
      return f !== userdacanc;
    });
    // console.log(newArray); // di controllo
    // oppure in array function
    // this.users = this.users.filter((f) => f !== userdacanc);
  }
}
