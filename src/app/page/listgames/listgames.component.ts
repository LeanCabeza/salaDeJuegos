import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-listgames',
  templateUrl: './listgames.component.html',
  styleUrls: ['./listgames.component.css']
})
export class ListgamesComponent implements OnInit {

  logged = false;
  constructor(private  authService: AuthService) { }

  ngOnInit() {
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
