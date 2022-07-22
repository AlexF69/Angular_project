import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/models/beer.interface';

@Component({
  selector: 'bir-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent implements OnInit {
@Input() birra! : Beer;

  constructor() { }

  ngOnInit(): void {
  }

}
