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
  searchBirra!: "small" | "medium";
  subscription: Subscription[] = [];
  constructor(private birraService: BirraserviceService) {

  }
// inizializzo la lista birre
  ngOnInit(): void {
    // pesca tuti gli oggetti dentro l'array di birre
    // this.birraService.getAllBirre().subscribe((data: Beer[]) => this.birreList=data)
    this.subscription.push(this.birraService.getAllBirre().subscribe((data: Beer[]) => this.birreList=data))
    // pesca solo la birra selezionata
    // this.birraService.getCurrentBirraSubject().subscribe((data: Beer | undefined) => this.currentBirra=data)
    this.subscription.push(this.birraService.getCurrentBirraSubject().subscribe((data: Beer | undefined) => this.currentBirra=data))
  }
// metodo per fre la search della birra indicata
trovaBirra(f: NgForm){
  this.birraService.getCurrentBirraById(Number(f.value.name))
  this.searchBirra = f.value.type;
}
onClick(){
  console.log('clikkato')
}
}
