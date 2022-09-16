import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JAttualiComponent } from './componenti/jattuali/jattuali.component';
import { JPiaciutiComponent } from './componenti/jpiaciuti/jpiaciuti.component';
import { JNonPiaciutiComponent } from './componenti/jnon-piaciuti/jnon-piaciuti.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    JAttualiComponent,
    JPiaciutiComponent,
    JNonPiaciutiComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // importare al momento in cui lo uso sul servizio
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
