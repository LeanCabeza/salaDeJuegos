import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  logged = false;
  constructor ( private  authService: AuthService) { }

  ngOnInit(): void {
    this.obtenerUsuarioLoggeado();
  }

  obtenerUsuarioLoggeado(){
    this.authService.getUserLogged().subscribe(user => {
      console.log(user?.email);
      if (user?.email != null) {
        this.logged = true; 
      } else this.logged = false;
    })
  }

}
