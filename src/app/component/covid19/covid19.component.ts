import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Covid19Service } from 'src/app/services/covid19.service';

@Component({
  selector: 'api-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css'],
})
export class Covid19Component implements OnInit {
  covid19!: any; // proprietà osservabile per ricevere l'array della API
  constructor(private covid19Service: Covid19Service) {}
  // valorizzo contenuto API su componente 
  ngOnInit(): void {
    this.covid19 = this.covid19Service.getNumTot();
    console.log(
      'Contenuto tornato dal metodo getNumTot di ngOnInit del component covid19',
      this.covid19
    );
  }
}
