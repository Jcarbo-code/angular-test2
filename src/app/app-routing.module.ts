import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ForoComponent } from './foro/foro.component';
import { RedesComponent } from './redes/redes.component';
import { WarcraftComponent } from './warcraft/warcraft.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'warcraft',
    pathMatch: 'full',
  },
  {
    path: 'warcraft',
    component: WarcraftComponent,
  },
  {
    path: 'foro',
    component: ForoComponent,
  },
  {
    path: 'redes',
    component: RedesComponent,
  },
  {
    path: 'comentario',
    component: ComentariosComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
