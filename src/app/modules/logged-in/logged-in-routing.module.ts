import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from 'src/app/page/ahorcado/ahorcado.component';
import { BombComponent } from 'src/app/page/bomb/bomb.component';
import { ChatComponent } from 'src/app/page/chat/chat.component';
import { ListgamesComponent } from 'src/app/page/listgames/listgames.component';
import { MayormenorComponent } from 'src/app/page/mayormenor/mayormenor.component';
import { NotFoundComponent } from 'src/app/page/not-found/not-found.component';
import { PreguntadosComponent } from 'src/app/page/preguntados/preguntados.component';
import { TablaComponent } from 'src/app/page/tabla/tabla.component';

const routes: Routes = [
  {path:'chat',component: ChatComponent},
  {path:'ahorcado',component: AhorcadoComponent},
  {path:'mayormenor',component: MayormenorComponent},
  {path:'preguntados',component: PreguntadosComponent},
  {path:'bomb',component: BombComponent},
  {path:'gamelist',component: ListgamesComponent},
  {path:'tabla',component: TablaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedInRoutingModule { }
