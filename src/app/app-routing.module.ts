import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './page/about-me/about-me.component';
import { AhorcadoComponent } from './page/ahorcado/ahorcado.component';
import { ChatComponent } from './page/chat/chat.component';
import { LoginComponent } from './page/login/login.component';
import { MainComponent } from './page/main/main.component';
import { MayormenorComponent } from './page/mayormenor/mayormenor.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { PreguntadosComponent } from './page/preguntados/preguntados.component';
import { RegisterComponent } from './page/register/register.component';
import { BombComponent } from './page/bomb/bomb.component';
import { ListgamesComponent } from './page/listgames/listgames.component';

const routes: Routes = [
  {path:'',component: MainComponent},
  {path:'chat',component: ChatComponent},
  {path:'main',component: MainComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'about',component: AboutMeComponent},
  {path:'ahorcado',component: AhorcadoComponent},
  {path:'mayormenor',component: MayormenorComponent},
  {path:'preguntados',component: PreguntadosComponent},
  {path:'bomb',component: BombComponent},
  {path:'gamelist',component: ListgamesComponent},
  {path:'**',component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
