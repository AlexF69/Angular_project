import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { FilterPipePipe } from '../pipe/filter-pipe.pipe';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    FilterPipePipe,
    DettaglioComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
