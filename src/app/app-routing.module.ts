import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasComponent } from './components/notas/notas.component';
import { MainComponent } from './components/main/main.component';
import { EscreverNotaComponent } from './components/escrever-nota/escrever-nota.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'notas',
    component: NotasComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'escrever',
    component: EscreverNotaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
