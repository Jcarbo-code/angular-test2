import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Noticias } from './noticias-list/Noticias';
/**
 * Maneja la logica de las noticias para poder verlas completa
 */
@Injectable({
  providedIn: 'root'
})
export class NoticiaCompletaService {

  private _noticiaCompleta: Noticias[] = [];
  noticiaCompleta: BehaviorSubject<Noticias[]> = new BehaviorSubject(this._noticiaCompleta);   //encapsulo el arreglo

  constructor() { }

  mostrarNoticia(noticia: Noticias) {
    
    if(!(this._noticiaCompleta.find((v1)=> v1.titulo== noticia.titulo))){  //asi no cargo la misma noticia una y otra vez si es que se le da mas de un click
      this._noticiaCompleta.pop();//quito noticia 
      this._noticiaCompleta.push({ ... noticia}); //muestra la nueva noticia que elegi
    }
    
    console.log(this._noticiaCompleta);
    this.noticiaCompleta.next(this._noticiaCompleta); //equivale a emitt del evento
  }

 
}
