import { Component } from '@angular/core';
import { Beer } from 'src/models/beer.interface';

@Component({
  selector: 'bir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'birra';
birre: Beer[] = Array(10); // creazione array di 10 elementi vuoti
}
