import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question.interface';
import { AuthService } from 'src/app/services/auth.service';
import { PuntajeServiceService } from 'src/app/services/puntaje-service.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {
  
  actualMail: string;
  score: number = 0;
  gameOver: boolean = false;
  currentQuestionIndex: number = 0;
  questions:   Question[] = [
    {
      text: '¿Cuál es la capital de Francia?',
      options: ['Londres', 'París', 'Madrid', 'Berlín'],
      correctOption: 1
    },
    {
      text: '¿En qué año se fundó Google?',
      options: ['1998', '2001', '1996', '2004'],
      correctOption: 0
    },
    {
      text: '¿Cuál es el río más largo del mundo?',
      options: ['Amazonas', 'Nilo', 'Yangtsé', 'Misisipi'],
      correctOption: 0
    },
    {
      text: '¿Quién pintó La Mona Lisa?',
      options: ['Pablo Picasso', 'Vincent van Gogh', 'Leonardo da Vinci', 'Frida Kahlo'],
      correctOption: 2
    },
    {
      text: '¿Cuál es el planeta más grande del sistema solar?',
      options: ['Tierra', 'Marte', 'Júpiter', 'Saturno'],
      correctOption: 2
    },
    {
      text: '¿En qué continente se encuentra Egipto?',
      options: ['África', 'Asia', 'Europa', 'Oceanía'],
      correctOption: 0
    },
    {
      text: '¿Cuál es el océano más grande del mundo?',
      options: ['Atlántico', 'Pacífico', 'Índico', 'Ártico'],
      correctOption: 1
    },
    {
      text: '¿Cuál es la moneda oficial de Japón?',
      options: ['Yen', 'Euro', 'Dólar', 'Libra'],
      correctOption: 0
    },
    {
      text: '¿Cuál es el metal más abundante en la corteza terrestre?',
      options: ['Hierro', 'Aluminio', 'Oro', 'Plata'],
      correctOption: 1
    },
    {
      text: '¿Quién escribió la novela "Cien años de soledad"?',
      options: ['Gabriel García Márquez', 'Mario Vargas Llosa', 'Jorge Luis Borges', 'Isabel Allende'],
      correctOption: 0
    },
    {
      text: '¿Cuál es el país más poblado del mundo?',
      options: ['China', 'India', 'Estados Unidos', 'Rusia'],
      correctOption: 0
    },
    {
      text: '¿Quién fue el primer presidente de Estados Unidos?',
      options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John F. Kennedy'],
      correctOption: 0
    },
    {
      text: '¿Cuál es el metal líquido a temperatura ambiente?',
      options: ['Hierro', 'Plomo', 'Mercurio', 'Cobre'],
      correctOption: 2
    },
    {
      text: '¿En qué país se encuentra la Gran Muralla China?',
      options: ['China', 'Japón', 'Corea del Sur', 'India'],
      correctOption: 0
    },
    {
      text: '¿Cuál es el idioma más hablado del mundo?',
      options: ['Inglés', 'Español', 'Chino mandarín', 'Hindi'],
      correctOption: 2
    },
    {
      text: '¿Cuál es la capital de Australia?',
      options: ['Sídney', 'Melbourne', 'Brisbane', 'Canberra'],
      correctOption: 3
    },
  ];

  constructor(private puntajeService: PuntajeServiceService,private authService: AuthService){}

  currentQuestion: Question;

  ngOnInit(): void {
    this.actualMail = this.authService.actualUserMail;
    this.shuffleQuestions();
    this.showNextQuestion();
  }

  shuffleQuestions(): void {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
    }
  }

  showNextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length) {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    } else {
      this.endGame();
    }
  }

  answerSelected(optionIndex: number): void {
    if (optionIndex === this.currentQuestion.correctOption) {
      this.score++;
      this.currentQuestionIndex++;
      this.showNextQuestion();
    } else {
      this.endGame();
    }
  }

  endGame(): void {
    this.puntajeService.guardarPuntaje(this.actualMail,this.score,"Preguntados");
    this.gameOver = true;
  }

  restartGame(): void {
    this.score = 0;
    this.gameOver = false;
    this.currentQuestionIndex = 0;
    this.shuffleQuestions();
    this.showNextQuestion();
  }
}
