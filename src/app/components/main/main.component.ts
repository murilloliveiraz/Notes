import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  listaNotas = [
    {
      titulo: "BBBBB",
      conteudo: "aaaaaaaaaaaaa",
      tipo: "tipo2"
  },
    {
      titulo: "CCCCCCCC",
      conteudo: "aaaaaaaaaaaaa",
      tipo: "tipo2"
  },
];
}
