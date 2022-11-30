import { Component, OnInit } from '@angular/core';
import { NoticiaCompletaService } from '../noticia-completa-service.service';
import { Noticias } from './Noticias';

@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.scss']
})
export class NoticiasListComponent implements OnInit {
  encabezado={
    titulo:"assets/img/noticias.png",
  };
  noticias: Noticias[] =[ 
    {
      titulo: 'El encuentro mas épico de todo wow',
      descripcion: 'El encuentro contra Sylvanas será uno de los más épicos de toda la historia - Entrevista a Blizzard',
      imagen: 'assets/img/sylvanas.jpg',
      fecha: 'Fecha publicación: 25/11/2022',
      visitas: 2566,
      contenido: 'El Parche 9.1 y la banda Sagrario de Dominación se encuentran cada vez más cerca para llegar a World of Warcraft y desde Gamereactor han tenido la oportunidad de entrevistar a Frank Kowalkowski (Technical Director) y Johnny Cash (Lead Quest Designer) sobre las diferentes novedades que veremos próximamente. Entre todo lo que comentaron, vamos a destacar dos apartados fundamentales: el combate contra Sylvanas será una de las batallas más épicas en la historia de World of Warcraft y será la culminación de la historia de Sylvanas. Comentario de Frank Kowalkowski «El Sagrario de Dominación es una nueva banda de 10 jefes, la guarida del Carcelero. Los jugadores lucharán contra algunos de sus lugartenientes y, al final, Sylvanas Brisaveloz los estará esperando. El resultado de este combate afectará al futuro de las Tierras Sombrías y el destino de Sylvanas que hemos desarrollado a lo largo de los años. El Santuario de Dominación se parecerá en apariencia, a la arquitectura de Torghast, el equipo de arte ha hecho un trabajo increíble y esperamos con ansias la reacción de los jugadores.» Comentario de Johnny Cash «La batalla contra Sylvanas es la culminación de una historia que hemos desarrollado a lo largo de los años dentro del juego. El combate tendrá varias fases, y podrás ver las diferentes formas de Sylvanas. Veremos a la General Forestal, la Reina Banshee y la transformación actual en aliada del Carcelero con los dementes poderes de las Fauces. Podrás ver todas estas diferentes versiones y luchar contra ellas. Hay muchas historias que conducen a este encuentro, algunas de las cuales se verán a medida que se avance en las nuevas cadenas de misiones. Nuestro equipo de mazmorras y bandas han realizado un trabajo increíble para convertir a Sylvanas en una de las batallas más épicas de la historia del juego. Es visualmente impresionante, lo suficientemente complejo y es una gran culminación de su historia.»',
    },
    {
      titulo:'9.1 A la vuelta de la esquina!',
      descripcion: 'Blizzard confirma fecha de salida del nuevo parche',
      imagen: 'assets/img/cadenasdedominacion.jpg',
      fecha: 'Fecha publicación: 22/11/2022',
      visitas: 8456,
      contenido: 'Una semana más!!!, Blizzard realizará una serie de mantenimientos en cada uno de sus respectivos juegos. En esta serie de artículos les traemos el listado completo de horarios para que no los agarre desprevenidos. Mantenimientos de esta semana (Europa) - CET 30/11/2022 World of Warcraft: Classic: 03:00 h a 04:00 h. World of Warcraft: Burning Crusade Classic: 03:00 h a 05:00 h. World of Warcraft: 03:00 h a 11:00 h. Mantenimientos de esta semana (América) - PDT 29/11/2022. World of Warcraft: 07:00 h a 15:00 h. World of Warcraft: Classic: 7:00 h a 08:00 h. World of Warcraft: Burning Crusade Classic: 7:00 h a 09:00 h.',
    },
    {
      titulo: 'Blizzard confirma el reinicio del Valor y la conquista',
      descripcion: 'Algunas partes del juego dejarán de estar disponibles y se incorporarán algunos objetos nuevos',
      imagen: 'assets/img/valor.jpg',
      fecha: 'Fecha publicación: 21/11/2022',
      visitas: 3656,
      contenido: 'La gran actualización de contenido de la semana que viene y el comienzo de la temporada 2 que llega una semana después harán que algunas partes del juego dejen de estar disponibles y se incorporen algunos objetos nuevos, por lo que queremos que los jugadores estén al tanto con anticipación. JcJ: Tal y como anunciamos con anterioridad, la temporada 1 finalizará el 29 de junio a las 22:00 CEST en esta región. A partir de ese momento, entraremos en un periodo de pretemporada hasta que dé comienzo la temporada 2 con el reinicio semanal del 7 de julio. Durante la pretemporada, los jugadores pueden seguir participando en actividades JcJ y obteniendo puntos de conquista, pero ningún resultado de la pretemporada afectará a las recompensas de temporada. Tener en cuenta que los puntos de conquista se pondrán a 0 el 7 de julio. Los puntos de honor, no. Bandas: El Castillo de Nathria estará disponible para que los jugadores de bandas prueben suerte por última vez y consigan los logros «Aventajado» e «Innovador» antes del reinicio semanal del 7 de julio en esta región. La nueva banda del Sagrario de Dominación se abrirá en las dificultades normal y heroica el 7 de julio y en dificultades mítica y buscador de bandas, el 14. Mazmorras: Los logros de dificultad mítica+ de la temporada 1 «Conquistador de la piedra angular» (por terminar todas las mazmorras a tiempo en el nivel 10 o superior) y «Maestro de la piedra angular» (por terminar a tiempo en el nivel 15 o superior) seguirán estando a nuestra disposición hasta que comience la temporada 2 el 7 de julio. Si querés gastar tus puntos de valor, no olvides hacerlo antes del 7 de julio porque se convertirán en oro a partir de esa fecha. La nueva megamazmorra Tazavesh, el Mercado Velado, estará disponible el 7 de julio. Recordar que las recompensas de la gran cámara de cada semana se basan tus actividades de la semana anterior. Esto significa que, cuando accedas a la gran cámara tras el reinicio semanal del 6 de julio, habrá recompensas de la temporada 1. Las primeras recompensas de la temporada 2 llegarán a la gran cámara tras el reinicio semanal del 14 de julio.',
    },
    {
      titulo: 'Parche 9.1 llega pronto!',
      descripcion:'El parche 9.1 será el siguiente gran contenido en llegar a World of Warcraft y a medida que el Reino de Pruebas es actualizado vamos conocimiento más detalles.',
      imagen: 'assets/img/parche9_1.jpg',
      fecha: 'Fecha publicación: 18/11/2022',
      visitas: 1225,
      contenido: 'Torturadores de Torghast: El parche 9.1 traerá consigo una gran cantidad de contenido a World of Warcraft y Las Fauces serán uno de los lugares más importantes para nuestros personajes, incluyendo una nueva zona (Korthia), asaltos de las Curias y un nuevo evento especial, Torturadores de Torghast. Dicho evento será muy parecido a algunos ya vistos anteriormente en la zona, teniendo que derrotar a una gran serie de enemigos provenientes de Torghast (pudiendo ganar algunos beneficios para facilitar la tarea) y un jefe final con el que completar los requisitos. Al terminar tendremos la posibilidad de conseguir algunos requisitos realmente increíbles. Algunas de las recompensas que se pueden obtener al derrotar el jefe final y que encontraremos en el Alijo de Torturador son las siguientes: Pieza de equipo de 207 de nivel de objeto. 50 Soul Cinders. 200 Estigia. Reputación con Ve´nari. Objetos de inicio de misión. Bahmeht Chain Link. Reunir 200 unidades de este objeto nos dará acceso a la montura Chain of Bahmethra.',
    },
    {
      titulo: 'World of Warcraft ya no es el mmorpg mas jugado?',
      descripcion: 'La reciente salida de Final Fantasy XIV, logra destronar y dejar en segundo lugar a World of Warcraft por primera vez en la historia!',
      imagen: 'assets/img/ff14_wow.jpg',
      fecha: 'Fecha publicación: 16/11/2022',
      visitas: 5521,
     contenido: 'En rasgos generales, no son buenos tiempos para World of Warcraft Retail con Shadowlands como su última expansión. La desazón de la comunidad tras la falta de contenido y tras la pobre e inexiste comunicación por parte de la empresa, está ocasionando que de forma continuada los jugadores dejen a un lado WoW Retail para centrarse en otros retos, como puede ser la inminente llegada de Burning Crusade Classic o la búsqueda de un nuevo MMO. Desde la web mmo-population.com hemos podido conocer que por primera vez World of Warcraft Retail ha sido sobrepasado en la cantidad de jugadores activos por Final Fantasy XIV: A Realm Reborn un MMO creado por Square Enix, compañía desarrolladora de videojuegos japonesa y distribuidora. Es importante mencionar que todos los datos mostrados en la web son estimaciones y que NO existen datos oficiales aportados por las diferentes compañías. Aunque es cierto que Retail ha sido superado, la verdad es que World of Warcraft en su conjunto (Retail + Classic) sigue alzándose por bastante con el primer puesto. ¡Pero ojo esto no es una victoria! Como se ha mencionado al comienzo de este mismo artículo, no son tiempo fáciles para el reconocido y amado World of Warcraft, ya que continuamente se está sumando críticas muy duras por parte de la comunidad y creadores de contenido que llevan años acompañando al juego. Las últimas decisiones en cuanto al juego y políticas sobre la venta de productos en la tienda digital ha desatado una oleada de comentarios muy poco alentadores. Ahora queda esperar por ver que pasos dará el equipo de World of Warcraft y Blizzard con el propio juego. Burning Crusade Classic ya está prácticamente aquí y sin dudarlo en ningún momento será unas semanas muy positivas para el juego, atrayendo una gran masa de jugadores. Pero no hay que conformarse con algo tan efímero y volátil. Esperemos que el ansiado contenido de World of Warcraft Retail (Parche 9.1) cumpla con sus espectativas y de a la comunidad razones de peso para volver al juego y disfrutar de un MMO que jamás debería de dejarse arrebatar ese primer puesto.',
    },
    {
      titulo: 'Un paseo por Tazavesh, el Mercado Velado',
      descripcion: 'La nueva mega mazmorra de 8 jefes, llegará con el parche 9.1',
      imagen: 'assets/img/tazavesh.jpg',
      fecha: 'Fecha publicación: 02/11/2022',
      visitas: 1225,
     contenido: 'Girará en torno a los Especuladores que conocimos en Oribos. Solo mítico (por ahora). 8 jefes. Gran ciudad comercial de especuladores, con portales, una casa de subastas y varios carteles. Conocerás las distintas facciones de Especuladores como los Asesinos. La segunda fase de la mazmorra será detener un atraco: persigue a un Especulador que robó un artefacto a través de portales que nos llevan a diferentes ubicaciones con múltiples jefes. Jefe final: Dragón Pirata del Infinito. Las recompensas incluyen mascotas y monturas de Especuladores: mascota de gusano utilizada por los Especuladores como moneda. Montura de disco del Especulador. Armas temáticas de los Especuladores.',
    },
];
  
  constructor(private noticiaCompleta: NoticiaCompletaService) { 
   
  }

  ngOnInit(): void {
  }

  mostrarNoticia(noticia: Noticias): void{
    this.noticiaCompleta.mostrarNoticia(noticia);
  }

  vistas(noticia: Noticias): void{
    noticia.visitas++;
  }
}
