import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { ChatServiceService } from 'src/app/services/chat-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje:string ="";
  elemento: any;
  usuario:any = {}

  constructor( public chat_service: ChatServiceService,
              private authService:AuthService) {
  
    this.chat_service.cargarMensajes()
                     .subscribe( ()=>{
                        setTimeout( ()=>{
                          this.elemento.scrollTop = this.elemento.scrollHeight;
                        },20);
                     });
   }

  ngOnInit(): void {
    this.elemento = document.getElementById("chat-mensajes");
  }

  enviarMensaje(){
    if(this.mensaje.length === 0){
      return;
    }
    this.chat_service.agregarMensaje(this.mensaje);
    this.mensaje = "";
  }

}
