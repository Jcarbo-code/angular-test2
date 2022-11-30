import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NoticiaCompletaService } from '../noticia-completa-service.service';
import { Noticias } from '../noticias-list/Noticias';

@Component({
  selector: 'app-noticia-completa',
  templateUrl: './noticia-completa.component.html',
  styleUrls: ['./noticia-completa.component.scss']
})
export class NoticiaCompletaComponent implements OnInit {
  encabezado={
    titulo:"assets/img/noticia_completa.png",
  };
  noticiaCompleta$: Observable<Noticias[]>;

  constructor(private noticia: NoticiaCompletaService) { 
    this.noticiaCompleta$= noticia.noticiaCompleta.asObservable();

    
  }

  ngOnInit(): void {
  }


}
