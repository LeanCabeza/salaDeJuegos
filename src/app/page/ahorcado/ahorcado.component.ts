import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  ngOnInit(): void {
  }

  palabraOculta = ''
  intentos = 0;
  win = false;
  lose = false;
  palabras: Array<String> = ['COMPUTADORA','LAVADORA','HELADERA','TIGRE','LEOPARDO','LICUADORA','SILLA','PARLANTES','PLANCHA','ASPIRADORA','CELULAR','TELEFONO','CALCULADORA','MOUSE','AUTOMOVIL','AURICULARES','TELESCOPIO','TESLA','PROMOCION','OFERTA'];
  letras: Array<String> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  palabra = this.palabras[Math.floor(Math.random() * this.palabras.length)].toUpperCase();
  
  constructor() {
    this.palabraOculta = "_ ".repeat(this.palabra.length);
  }

  validarLetra( letra: any ){
    this.existeLetra(letra);
    let palabraOcultaArr = this.palabraOculta.split(' ');
      for (let i = 0; i<this.palabra.length; i++){
        if (this.palabra[i] === letra){
        palabraOcultaArr [i] = letra;}
      }
    this.palabraOculta = palabraOcultaArr.join(' ');
    this.verificarVictoria();
  }
  
  verificarVictoria(){
    const palabraToArray = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraToArray.join("");

   if( palabraEvaluar === this.palabra) {
     this.win = true;
     console.log ('Ganaste');
   }
   if ( this.intentos >= 8){
     this.lose = true;
      console.log ('Perdiste');
   }

  }

  existeLetra (letra: string ){
    if (this.palabra.indexOf(letra)>=0){
      console.log ('Existe');
    }else{
      this.intentos ++;
    }
  }

  refresh(): void {
    window.location.reload();
  }

}
