import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { MainComponent } from './components/main/main.component';
import { NotasComponent } from './components/notas/notas.component';
import { EscreverNotaComponent } from './components/escrever-nota/escrever-nota.component';
import { SucessComponent } from './components/sucess/sucess.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirNotaComponent } from './components/excluir-nota/excluir-nota.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    MainComponent,
    NotasComponent,
    EscreverNotaComponent,
    SucessComponent,
    ExcluirNotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
