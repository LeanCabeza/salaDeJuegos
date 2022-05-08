import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myDate = new Date();
  mensajeLoggeo: string = '';
  usuarios!: Usuario[];
  
  usuario: Usuario ={
    id: '',
    apellido: '',
    email: '',
    password: '',
    fechaIngreso: '',
    fechaUltimoLogin:''
  }


  @ViewChild("clienteForm") usuarioForm:NgForm | undefined;

  constructor(private authService:AuthService,
    private snackbar: MatSnackBar,
    private router: Router,
    private usuariosServicio:UsuarioService,
    ){
      
    }

  ngOnInit(): void {
    this.usuariosServicio.getUsuarios().subscribe(
      usuarios => {
        this.usuarios = usuarios;
      }
    )
  }

  openSnackBarRegister(): void{
    this.snackbar.open(this.mensajeLoggeo, 'Cerrar',{
      duration:3000
    });
  }

  Register({value, valid}: {value: Usuario, valid: any}){
    if(!valid){
        this.mensajeLoggeo = 'Por favor llena el formulario correctamente';
        this.openSnackBarRegister();
    }
    else{
      // Hago el FireAuth y de paso si todo sale bien, inserto en la FireStore la conexion.
      const{email= "",password = ""} = this.usuario;
      //Intento Registrar el Usuario
      this.authService.register(email,password).then(res=>{
        this.mensajeLoggeo = "Se registro Correctamente";
        this.openSnackBarRegister();
        setTimeout(() => {
          //Si todo salio bien guardo en FireStore Database.
          value.id = res.user?.uid;
          value.password = "";
          value.fechaIngreso = this.myDate.toLocaleDateString() + " " + this.myDate.toLocaleTimeString();
          value.fechaUltimoLogin = this.myDate.toLocaleDateString() + " " + this.myDate.toLocaleTimeString();
          this.usuariosServicio.agregarUsuario(value);
          this.router.navigate(['/main']);
          }, 1500);
      }).catch(error=>{
        // Si algo sale mal muestro el error.
        this.mensajeLoggeo = error.message;
        this.openSnackBarRegister();
      });
    }
  }




}
