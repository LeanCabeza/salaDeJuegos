import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  mensajeFirebase: string = 'Registrado correctamente';

  constructor(private authService:AuthService,
    private snackbar: MatSnackBar,
    private router: Router,
    ){

    }

  ngOnInit(): void {
  }

  usuario={
    email: "",
    password: ""
  }

  Register(){
    console.log(this.usuario);
    const{email,password} = this.usuario;

    this.authService.register(email,password).then(res=>{
      this.openSnackBarRegister();
      setTimeout(() => {
        this.router.navigate(['/main']);
        }, 1500);
      }).catch(error=>{
        this.mensajeFirebase = error.message;
        this.openSnackBarRegister();
      });
  }

  openSnackBarRegister(): void{
    this.snackbar.open(this.mensajeFirebase, 'Cerrar',{
      duration:3000
    });
  }

}
