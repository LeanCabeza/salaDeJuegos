import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensajeLoggeo: string = '';
  @ViewChild("loginForm") loginForm:NgForm | undefined;

  constructor(private authService:AuthService,
    private snackbar: MatSnackBar,
    private router: Router,
    private usuariosServicio:UsuarioService
    ) {

     }

  ngOnInit(): void {
  }
  
  usuario={
    email: "",
    password: ""
  }

  selectUser(userId: number) {
    if (userId === 1) {
      this.usuario.email = 'usuario1@example.com';
      this.usuario.password = 'password1';
    } else if (userId === 2) {
      this.usuario.email = 'usuario2@example.com';
      this.usuario.password = 'password2';
    } else if (userId === 3) {
      this.usuario.email = 'usuario3@example.com';
      this.usuario.password = 'password3';
    }
  }

  Loggin({value, valid}: {value: Usuario, valid: any}){

    if(!valid){
        this.mensajeLoggeo = 'Por favor llena el formulario correctamente';
        this.openSnackBarLogin();
    }
    else{
      const{email= "",password = ""} = this.usuario;
      //Intento Loggear el Usuario
      this.authService.login(email,password).then(res=>{
        this.mensajeLoggeo = "Loggeado Corectamente";
        this.openSnackBarLogin();
          setTimeout(() => {
            this.router.navigate(['']);
          }, 1500);
          //Updateo la fecha de ultimo login
          this.usuariosServicio.actualizarFechaLoggeo(email);  
        }).catch(error=>{
          this.mensajeLoggeo = error.message;
          this.openSnackBarLogin();
        });
    }
  }

  openSnackBarLogin(): void{
    this.snackbar.open(this.mensajeLoggeo, 'Cerrar',{
      duration:3000
    });
  }

}
