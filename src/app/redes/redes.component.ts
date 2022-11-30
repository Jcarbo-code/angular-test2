import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.scss']
})
export class RedesComponent implements OnInit {
  encabezado={
    titulo: "assets/img/redes.png",
  }; 
  carrucel1={
    img: "assets/img/sylvanass.jpg",
    descripcion: "Siguenos en Facebook todos los dias hacemos directos!",
    logo: "assets/img/facebook.png",
  };
  carrucel2={
    img: "assets/img/torghast.jpg",
    descripcion: "¡Nos puedes encontrar todos los dias en directo no solo por Facebook, si no tambien por Twitch!",
    logo: "assets/img/twitch.png",
  };
  carrucel3={
    img: "assets/img/teldrasil.jpg",
    descripcion: "Puedes estar siempre al tanto de todo siguiendonos en Instagram y Twitter",
    logo1: "assets/img/instagram.png",
    logo2: "assets/img/twitter.png",
  }
  
    
  
  constructor() { }

  ngOnInit(): void {
  }

}
