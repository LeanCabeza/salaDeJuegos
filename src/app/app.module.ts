import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { MainComponent } from './page/main/main.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { AboutMeComponent } from './page/about-me/about-me.component';
import { RegisterComponent } from './page/register/register.component';
import { PreguntadosComponent } from './page/preguntados/preguntados.component';
import { MayormenorComponent } from './page/mayormenor/mayormenor.component';
import { AhorcadoComponent } from './page/ahorcado/ahorcado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NotFoundComponent,
    AboutMeComponent,
    RegisterComponent,
    PreguntadosComponent,
    MayormenorComponent,
    AhorcadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
