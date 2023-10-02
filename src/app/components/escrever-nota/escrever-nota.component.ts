import { Component} from '@angular/core';
import { NotaService } from 'src/app/nota.service';
import { Nota } from '../notas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escrever-nota',
  templateUrl: './escrever-nota.component.html',
  styleUrls: ['./escrever-nota.component.css']
})

export class EscreverNotaComponent {

  constructor(
    private service: NotaService,
    private router: Router
    ){}

  nota: Nota= {
    titulo: '',
    conteudo: ''
  }

  criarNota(){
    this.service.criar(this.nota).subscribe(() =>{
      this.router.navigate(['/sucess'])
    })
  }

  cancelarNota(){
    this.router.navigate(['/main'])
  }
}
