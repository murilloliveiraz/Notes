import { Component, Input } from '@angular/core';
import { Nota } from '../notas';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})

export class NotasComponent {
  @Input() nota: Nota = {
    id: 0,
    conteudo: 'Angular é muito bom!',
    titulo: 'tipo1'
  }
}
