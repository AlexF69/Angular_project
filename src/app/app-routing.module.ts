import { NgModule } from '@angular/core'; // import del modulo standard Angular
import { Routes, RouterModule } from '@angular/router'; // import dell'array per gestione routes
import { NotfoundComponent } from './notfound/notfound.component';
import { OrderContainerComponent } from './order-container/order-container.component'; // import autometico
import { UserContainerComponent } from './user-container/user-container.component'; // import autometico
// mia dichiarativa delle rotte tipizzate da Angular modulo Routes
const rotte: Routes = [
  { path: 'ordini', component: OrderContainerComponent },
  { path: 'utenti', component: UserContainerComponent },
  { path: '', redirectTo: 'utenti', pathMatch: 'full' }, // quando path non specificato reindirizza alla user container al caricamento della pg
  { path: '**', component: NotfoundComponent },
];
// dicharativa del modulo per metadata e metodi utili - istruire alle nostre rotte
@NgModule({
  imports: [RouterModule.forRoot(rotte)], // richiamo il metodo per valutare le mie rotte dichiarate
  exports: [RouterModule], // metto a disposizione le rotte valutate prima agli altri moduli
})
export class AppRountingModule {} // classe del componente da esportare
