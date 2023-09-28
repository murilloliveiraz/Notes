import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasComponent } from './components/notas/notas.component';
import { MainComponent } from './components/main/main.component';
import { EscreverNotaComponent } from './components/escrever-nota/escrever-nota.component';
import { EditComponent } from './components/edit/edit.component';
import { SucessComponent } from './components/sucess/sucess.component';

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
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'sucess',
    component: SucessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
