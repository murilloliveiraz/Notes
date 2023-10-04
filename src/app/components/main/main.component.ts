import { Component } from '@angular/core';
import { Nota } from '../notas';
import { NotaService } from 'src/app/nota.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private service:NotaService){}

  ngOnInit(): void {
    this.service.listar().subscribe((listaNotas) => {
      this.listaNotas = listaNotas
    })
  }

  listaNotas: Nota[] = [
      {
        id: 1,
        titulo: 'tipo1',
        conteudo: 'Angular é estranho'
      },
      {
        id: 2,
        titulo: 'tipo1',
        conteudo: 'Angular é estranho'
      },
      {
        id: 3,
        titulo: 'tipo1',
        conteudo: 'Angular é estranho'
      }
    ];
}
