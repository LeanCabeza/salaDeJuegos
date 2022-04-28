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

  mensajeError: string = '';

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
      this.openSnackBarLogin();
      setTimeout(() => {
        this.router.navigate(['/main']);
      }, 1500);
      });
  }

  openSnackBarLogin(): void{
    this.snackbar.open(this.mensajeError, 'Cerrar',{
      duration:3000
    });
  }

}
