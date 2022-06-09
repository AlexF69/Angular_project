import { Component } from '@angular/core';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_exercise_2';
  contatore: number = 0; // nuovo counter proveniente dal componente edit-counter dopo la operazione +- in binding
  errore: boolean = false; // errore proveniente dal componente edit-counter dopo la operazione di sottrazione in binding con ngIF
// creo metodi per valorizzare il counter e l'errore eventuale da passare poi al figlio show-counter
  setContatore(counter: number) {
    this.contatore = counter;
  }

  setErrore(error: boolean) {
    this.errore = error;
  }

}
