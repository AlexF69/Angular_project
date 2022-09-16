import { Component, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'jk-jnon-piaciuti',
  // templateUrl: './jnon-piaciuti.component.html',
  templateUrl: './jnon-piaciuti.component.html',
  styleUrls: ['./jnon-piaciuti.component.css']
})
export class JNonPiaciutiComponent implements OnInit {

  @Input()joke! : [string,string] | undefined;
  @Input()index! : number ;
  @Output() selectedPerLike: EventEmitter<number> = new EventEmitter<number>(); // aggiunta EventEmitter per progetto selezionato dal figlio al padre
  // dichiaro l'event emitter di tipo number per passare l'indice del joke su cui sono, su chui è il bottone

  constructor() { }

  ngOnInit(): void {
  }

}
