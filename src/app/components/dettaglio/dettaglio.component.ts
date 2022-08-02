import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/models/beer.interface';

@Component({
  selector: 'bir-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent implements OnInit {
  // var per visualizzare birra selezionata come input passato dal padre shop.component al richiamo del tag
  // <bir-dettaglio [birra]="currentBirra"></bir-dettaglio>
@Input() birra! : Beer;

  constructor() { }

  ngOnInit(): void {
  }

}
