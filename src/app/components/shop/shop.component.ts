import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BirraserviceService } from 'src/app/services/birraservice.service';
import { Beer } from 'src/models/beer.interface';

@Component({
  selector: 'bir-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  birreList!: Beer[];
  currentBirra!: Beer | undefined;
  // searchBirra!: "small" | "medium";
  subscription: Subscription[] = []; // dichiaro la sottoscrizione
  constructor(private birraService: BirraserviceService) {

  }
// inizializzo la lista birre nel compoennte tramite la sottoscrizione all'asservabile del servizio birraservice.service.ts
  ngOnInit(): void {
    // valorizza l'array di birre this.birreList con sottoscrizione all'osservabile delle birre del servizio
    this.subscription.push(this.birraService.getAllBirre().subscribe((data: Beer[]) => this.birreList=data))
    // pesca solo la birra selezionata ??
    this.subscription.push(this.birraService.getCurrentBirraSubject().subscribe((data: Beer | undefined) => this.currentBirra=data))
  }
// metodo passato al form per la search della birra indicata nelle selezioni in base ai valori del ngForm, sulla lista birre this.birreList precedentemente caricata
trovaBirra(f: NgForm){
  // trovo prima l'id della birra selezionata sulla this.birreList.......
  const idBirra: number = this.birreList.find((elemento: Beer) => elemento.name == f.value.nome && elemento.type == f.value.tipi)?.id ?? 0;
  // console.log('f.value.name e f.value.type idBirra', f.value.nome, f.value.tipi, idBirra)
  // ... poi carico la birra con il metodo del service tramite l'id
  this.birraService.getCurrentBirraById(idBirra)
}
// metodo passato al form per invalidare il bottone Search
verifica(f: NgForm): boolean {
  // due modi di ritornare true o false con funzione esplicita ...
    // if (f.value.nome && f.value.tipi) return false;
    // else return true
  // .... o più semplice
  return !(f.value.nome && f.value.tipi)
}


}
