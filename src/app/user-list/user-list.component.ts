import { Component, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}
}
