import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent {
  @Input() nota = {
    titulo: "titulo",
    conteudo: "conteudo",
    tipo: "tipo"
  }
}
