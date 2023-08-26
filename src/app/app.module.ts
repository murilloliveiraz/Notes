import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { MainComponent } from './components/main/main.component';
import { NotasComponent } from './components/notas/notas.component';
import { EscreverNotaComponent } from './components/escrever-nota/escrever-nota.component';
import { SemNotasComponent } from './components/sem-notas/sem-notas.component';
import { EditComponent } from './components/edit/edit.component';
import { SucessComponent } from './components/sucess/sucess.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    MainComponent,
    NotasComponent,
    EscreverNotaComponent,
    SemNotasComponent,
    EditComponent,
    SucessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
