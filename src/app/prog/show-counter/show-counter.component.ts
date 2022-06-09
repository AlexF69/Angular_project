import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app1-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {
  // dichiaro le var che ricevo dal componente padre app.component.html che riceve dal componente di calcolo edit-counter
  @Input() counter: number = 0;

  @Input() error: boolean = false; // per gestione dell'errore proveniente dal componente di calcolo edit-counter

  constructor() { }


  ngOnInit(): void {

  }

}
