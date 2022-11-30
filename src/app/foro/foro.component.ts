import { Component, OnInit } from '@angular/core';
import { Comentario } from './Comentario';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.scss']
})
export class ForoComponent implements OnInit {
  encabezado={
    titulo: "assets/img/foro.png",
  };
  comentarios: Comentario[] =[ 
    {
      titulo: '¿Por qué Blizzard tarda tanto en sacar el nuevo parche?',
      descripcion: 'Ya hace mas de 4 meses terminé el contenido de SL, desde entonces solo me queda hacer contenido viejos, sacar monturas y subir profesiones, ya se esta tornando aburrida la espera.',
      boton: 'Opinar',
      votos: 1500,
      aceptada: true,

    },
    {
      titulo:'Subio la ficha!!',
      descripcion: 'No entiendo que le pasa a Blizzard tras que tardan meses en sacar nuevo contenido nos suben la ficha! D:',
      boton: 'Opinar',
      votos: 456,
      aceptada: true,
      
    },
    {
      titulo: 'Nuevas monturas disponibles',
      descripcion: 'He descubierto la forma de sacar una montura oculta en la mazmorra de Maldraxxus!!!!!',
      boton: 'Opinar',
      votos: 1656,
      aceptada: true,
    },
    {
      titulo: 'FF14 no me lo creo',
      descripcion:'Alguien alguna vez pensó que wow seria destronado?',
      boton: 'Opinar',
      votos: 125,
      aceptada: true,
    },
    {
      titulo: 'Concurso Transfiguraciones',
      descripcion: 'Hermosa comunidad de wow, en el mes de Julio se estará realizando un mega concurso de transfiguraciones, NO te quedes sin participar',
      boton: 'Opinar',
      votos: 521,
      aceptada: true,
    },
    {
      titulo: 'Nuevos aflijos',
      descripcion: 'Con la proxima llegada del parche se vienen nuevos aflijos! que clase será top dps?',
      boton: 'Opinar',
      votos: 895,
      aceptada: true,
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
