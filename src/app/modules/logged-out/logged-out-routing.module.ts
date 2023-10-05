import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from 'src/app/page/about-me/about-me.component';
import { LoginComponent } from 'src/app/page/login/login.component';
import { MainComponent } from 'src/app/page/main/main.component';
import { NotFoundComponent } from 'src/app/page/not-found/not-found.component';
import { RegisterComponent } from 'src/app/page/register/register.component';

const routes: Routes = [
  {path:'',component: MainComponent},
  {path:'main',component: MainComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'about',component: AboutMeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedOutRoutingModule { }
