import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensajeLoggeo: string = '';

  constructor(private authService:AuthService,
    private snackbar: MatSnackBar,
    private router: Router,
    ) {

     }

  ngOnInit(): void {
  }
  
  usuario={
    email: "",
    password: ""
  }

  Loggin(){
    console.log(this.usuario);
    const{email,password} = this.usuario;

    this.authService.login(email,password).then(res=>{
      this.mensajeLoggeo = "Loggeado Corectamente";
      this.openSnackBarLogin();
        setTimeout(() => {
          this.router.navigate(['/main']);
        }, 1500);
      }).catch(error=>{
        this.mensajeLoggeo = error.message;
        this.openSnackBarLogin();
      });
  }

  openSnackBarLogin(): void{
    this.snackbar.open(this.mensajeLoggeo, 'Cerrar',{
      duration:3000
    });
  }

}
