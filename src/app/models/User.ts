// Definire, attraverso interfaces e enumerations, il seguente oggetto
// dichiarative di enum e interface in esportazioneper essere utilizzate fuori
//
// enum dei ruoli per inizializzare con valori controllati fin dalla stesura del codice
export enum Roles {
  Staff = 'staff',
  Student = 'student',
  Manager = 'manager',
  Admin = 'admin',
}
// enum dei genders per inizializzare con valori controllati fin dalla stesura del codice
export enum Genders {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}
// approccio modulare per interfacce di proprietà/oggetti dell'oggetto obj
// interface modulare di address/indirizzo riutilizzabile
export interface Address {
  city: string;
  street: string;
  postalCode: string;
}
// interface modulare di companies/azienda riutilizzabile
export interface Company {
  id: number;
  name: string;
  description: string;
  location: Address; // richiamo interface degli indirizzi
}

// interface generale dell'intero oggetto obj

export interface User {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: string;
  address: Address; // richiamo interface degli indirizzi
  role: Roles; // richiamo enum dei ruoli
  username: string;
  profilePhotoUrl: string;
  companies: Company[]; // richiamo interface di comapny in un array
  gender: Genders; // richiamo enum dei genders
}
