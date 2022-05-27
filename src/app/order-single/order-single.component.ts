import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-single',
  templateUrl: './order-single.component.html',
  styleUrls: ['./order-single.component.css']
})
export class OrderSingleComponent implements OnInit {
mostraDettagli = false;

  constructor() { }

mostraUtente(){
  console.log(this.mostraDettagli);
this.mostraDettagli=!this.mostraDettagli; // peer capire se mostrare i dettagli
}
  ngOnInit(): void {
  }

}
