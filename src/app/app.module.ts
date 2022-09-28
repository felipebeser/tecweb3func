import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaCardFuncionarioComponent } from './lista-card-funcionario/lista-card-funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent,
    ListaCardFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
