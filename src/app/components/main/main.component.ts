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
      conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque venenatis nunc sit amet consectetur. Aenean sit amet aliquam felis, eget porttitor neque.",
      tipo: "tipo2"
  },
    {
      titulo: "CCCCCCCC",
      conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque venenatis nunc sit amet consectetur. Aenean sit amet aliquam felis, eget porttitor neque.",
      tipo: "tipo2"
  },
    {
      titulo: "CCCCCCCC",
      conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque venenatis nunc sit amet consectetur. Aenean sit amet aliquam felis, eget porttitor neque.",
      tipo: "tipo2"
  },
    {
      titulo: "CCCCCCCC",
      conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque venenatis nunc sit amet consectetur. Aenean sit amet aliquam felis, eget porttitor neque.",
      tipo: "tipo2"
  }
];
}
