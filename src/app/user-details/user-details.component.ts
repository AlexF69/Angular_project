import { Component, OnInit } from '@angular/core';
//import { User } from '../models/User'; // prima dellacreazionedelfile User.ts
import { User } from '@app/models/User'; // import delle tipizzazioni User
import { Genders } from '@app/models/User'; // import delle tipizzazioni Genders
import { Roles } from '@app/models/User'; // import delle tipizzazioni Roles

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
// classe delle varibili e metodi
export class UserDetailsComponent implements OnInit {
  objUser: User = {
    id: 3487,
    name: 'Mario',
    surname: 'Rossi',
    age: 25,
    // dateOfBirth: '1995-14-12', // ?per l edate fai rif. anche al project.component.ts di lezione Sciuti
    dateOfBirth: '1995-12-14', // cambiato in local IT
    address: {
      city: 'Roma',
      street: 'Via roma 10',
      postalCode: '00100',
    },
    role: Roles.Staff, // richiamo enum dei ruoli per inizializzare con valori controllati fin dalla stesura del codice
    username: 'MarioRossi80',
    profilePhotoUrl: 'https://bit.ly/3yRngEP',
    companies: [
      {
        id: 148979,
        name: 'Develhope',
        description: 'La migliore',
        location: {
          city: 'Palermo',
          street: 'Via Libertà 58',
          postalCode: '90139',
        },
      },
      {
        id: 123123,
        name: 'Apple',
        description: 'E insomma...',
        location: {
          city: 'Cupertino',
          street: 'One Apple Park Way',
          postalCode: '95014',
        },
      },
    ],
    gender: Genders.Male, // richiamo enum dei gender per inizializzare con valori controllati fin dalla stesura del codice
  }; // fine dichiarativa oggetto di tipo user da renderizzare

  constructor() {}

  ngOnInit(): void {}
}
// PRESO DA ESERCIZIO 1 TYPESCRIPT 1 PER COPIARLO ///////////////// DA TOGLIERE
// Definire, attraverso interfaces e enumerations, il seguente oggetto
// dichiarative di enum e interface
// enum dei ruoli per inizializzare con valori controllati fin dalla stesura del codice
// enum Roles {
//   Staff = 'staff',
//   Student = 'student',
//   Manager = 'manager',
//   Admin = 'admin',
// }
// enum dei genders per inizializzare con valori controllati fin dalla stesura del codice
// enum Genders {
//   Male = 'male',
//   Female = 'female',
//   Other = 'other',
// }
// approccio modulare per interfacce di proprietà/oggetti dell'oggetto obj
// interface modulare di address/indirizzo riutilizzabile
// interface Address {
//   city: string;
//   street: string;
//   postalCode: string;
// }
// interface modulare di companies/azienda riutilizzabile
// interface Company {
//   id: number;
//   name: string;
//   description: string;
//   location: Address; // richiamo interface degli indirizzi
// }

// interface generale dell'intero oggetto obj

// interface User {
//   id: number;
//   name: string;
//   surname: string;
//   age: number;
//   dateOfBirth: string;
//   address: Address; // richiamo interface degli indirizzi
//   role: Roles; // richiamo enum dei ruoli
//   username: string;
//   profilePhotoUrl: string;
//   companies: Company[]; // richiamo interface di comapny in un array
//   gender: Genders; // richiamo enum dei genders
// }

// l'istanza di obj diventa con riferimento alla interfaccia generale User che contiene i riferimenti alle altre inteface modulari.
// Per i valori controllati si richiamo direttamente gli enums
// era
//  const obj = {
// diventa
// const obj: User = {
//   id: 3487,
//   name: 'Mario',
//   surname: 'Rossi',
//   age: 25,
//   dateOfBirth: '1995-14-12',
//   address: {
//     city: 'Roma',
//     street: 'Via roma 10',
//     postalCode: '00100',
//   },
//   role: Roles.Staff, // richiamo enum dei ruoli per inizializzare con valori controllati fin dalla stesura del codice
//   username: 'MarioRossi80',
//   profilePhotoUrl: 'https://bit.ly/3yRngEP',
//   companies: [
//     {
//       id: 148979,
//       name: 'Develhope',
//       description: 'La migliore',
//       location: {
//         city: 'Palermo',
//         street: 'Via Libertà 58',
//         postalCode: '90139',
//       },
//     },
//     {
//       id: 123123,
//       name: 'Apple',
//       description: 'E insomma...',
//       location: {
//         city: 'Cupertino',
//         street: 'One Apple Park Way',
//         postalCode: '95014',
//       },
//     },
//   ],
//   gender: Genders.Male, // richiamo enum dei gender per inizializzare con valori controllati fin dalla stesura del codice
// };
