// enum dei ruoli per inizializzare con valori controllati fin dalla stesura del codice
export enum Role {
  STAFF = 'Staff',
  STUDENT = 'student',
  MANAGER = 'manager',
  ADMIN = 'admin',
}
// enum dei genders per inizializzare con valori controllati fin dalla stesura del codice
export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}
// approccio modulare per interfacce di proprietà/oggetti dell'oggetto obj
// interface modulare di address/indirizzo riutilizzabile
export interface Address {
  city: string;
  street: string;
  postalCode: string;
}
// interface modulare di companies/azienda riutilizzabile
// export interface Company {
//   id: number;
//   name: string;
//   description: string;
//   location: Address; // richiamo interface degli indirizzi
// }

// interface generale dell'intero oggetto obj

export interface IUser {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: string;
  address: Address; // richiamo interface degli indirizzi
  role: Role; // richiamo enum dei ruoli
  username: string;
  profilePhotoUrl: string;
  // companies: Company[]; // richiamo interface di comapny in un array
  gender: Gender; // richiamo enum dei genders
}
