import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'jk-jpiaciuti',
  templateUrl: './jpiaciuti.component.html',
  styleUrls: ['./jpiaciuti.component.css']
})
export class JPiaciutiComponent implements OnInit {

@Input()joke! : [string,string] | undefined;
@Input()index! : number ;
@Output() selectedPerDislike: EventEmitter<number> = new EventEmitter<number>(); // aggiunta EventEmitter per progetto selezionato dal figlio al padre
// dichiaro l'event emitter di tipo number per passare l'indice del joke su cui sono, su chui è il bottone

  constructor() { }

  ngOnInit(): void { }


  }


