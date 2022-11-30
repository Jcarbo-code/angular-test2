import { Component, Input, OnInit } from '@angular/core';
import { Comentario } from '../foro/Comentario';

@Component({
  selector: 'app-input-votar',
  templateUrl: './input-votar.component.html',
  styleUrls: ['./input-votar.component.scss']
})
export class InputVotarComponent implements OnInit {

  constructor() { }

  @Input()
  comentario!: Comentario;

  ngOnInit(): void {
  }

  restarVoto(comentario: Comentario): void{
    comentario.votos--;
  }

  sumarVoto(comentario: Comentario): void{
    comentario.votos++;
  }


}
