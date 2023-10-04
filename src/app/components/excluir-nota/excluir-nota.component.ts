import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Nota } from '../notas';
import { NotaService } from 'src/app/nota.service';

@Component({
  selector: 'app-excluir-nota',
  templateUrl: './excluir-nota.component.html',
  styleUrls: ['./excluir-nota.component.css']
})
export class ExcluirNotaComponent {
  constructor(
    private service: NotaService,
    private router: Router,
    private route: ActivatedRoute
    ){}

    nota: Nota = {
      id: 0,
      titulo: '',
      conteudo: ''
    }

    ngOnInit(): void{
      const id = this.route.snapshot.paramMap.get('id')
      this.service.buscarNota(parseInt(id!)).subscribe((nota) =>{
          this.nota = nota
      })
    }

    excluirNota(){
      if(this.nota.id){
        this.service.excluir(this.nota.id).subscribe(() => {
          this.router.navigate(['/main'])
        })
      }
    }


  cancelar(){
    this.router.navigate(['/main'])
  }
}
