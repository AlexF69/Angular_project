import { Component, Input, OnInit } from '@angular/core';
import { Covid19Service } from 'src/app/services/covid19.service';

@Component({
  selector: 'api-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css'],
})
export class Covid19Component implements OnInit {
  covid19: [any, any][] = []; // tipizzazione dell'array in any (due parti) perchè non conosco la struttura dell'oggetto
  // injection del servizio con private covid19Service.........
  constructor(private covid19Service: Covid19Service) {}
  // valorizzo contenuto API sul componente usando ngOnInit, ad ogni suo richiamo/inizializzazione
  ngOnInit(): void {
// uso la sottoscrizione al metodo osservabile getNumTot chè in service, prendo solo le proprietà che mi servono la prima e l'ultima
    this.covid19Service.getNumTot().subscribe((data: any) => {
      Object.keys(data).forEach((elemento: any) => this.covid19.push([elemento, data[elemento].Path])) // end point = path
      console.log('this.covid19', this.covid19)});
// data è l'oggetto di array API
// Object.keys è il metodo array usato per prendere le proprietà (di data)
// il forEach è come fosse un loop for elemento (elemento=array contenuto in data)
// faccio la push perchè carico il mio array interno this.covid19, [elemeto] è l'indice

  }
}
