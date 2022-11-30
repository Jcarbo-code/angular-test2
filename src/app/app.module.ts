import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiasListComponent } from './noticias-list/noticias-list.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { WarcraftComponent } from './warcraft/warcraft.component';
import { RedesComponent } from './redes/redes.component';
import { ForoComponent } from './foro/foro.component';
import { InputVotarComponent } from './input-votar/input-votar.component';
import { FormsModule } from '@angular/forms';
import { NoticiaCompletaComponent } from './noticia-completa/noticia-completa.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasListComponent,
    ComentariosComponent,
    WarcraftComponent,
    RedesComponent,
    ForoComponent,
    InputVotarComponent,
    NoticiaCompletaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
