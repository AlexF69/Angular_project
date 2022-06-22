import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContatoreService } from '../contatore.service';

@Component({
  selector: 'app1-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {
  // dichiaro le var che ricevo dal componente padre app.component.html che riceve dal componente di calcolo edit-counter
  //@Input() counter: number = 0;
  counter: number = 0;
  // @Input() error: boolean = false; // per gestione dell'errore proveniente dal componente di calcolo edit-counter
  error!: boolean;
  subscription: Subscription[] = [];
  constructor(private contatoreService: ContatoreService) { }

// gestione della sottoscrizione come un array di valori su cui ogni volta faccio push
// in inizializzazione del compoennte di show del valore richiedo il valore del counterche e del error che
// poi passo alrelativo html
  ngOnInit(): void {
  this.subscription.push(this.contatoreService.getCounter().subscribe(data => this.counter = data));
  this.subscription.push(this.contatoreService.showError().subscribe(data => this.error = data));
  }

}
