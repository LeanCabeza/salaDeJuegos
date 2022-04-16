import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './page/about-me/about-me.component';
import { LoginComponent } from './page/login/login.component';
import { MainComponent } from './page/main/main.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { RegisterComponent } from './page/register/register.component';

const routes: Routes = [
  {path:'',component: MainComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'about',component: AboutMeComponent},
  {path:'**',component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
