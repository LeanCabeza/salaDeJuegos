import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Card {
  value: number;
  imageUrl: string;
}

@Component({
  selector: 'app-mayormenor',
  templateUrl: './mayormenor.component.html',
  styleUrls: ['./mayormenor.component.css']
})
export class MayormenorComponent implements OnInit {

  constructor() { }


  cards: Card[] = [
    { value: 0, imageUrl: 'assets/images/cards/0.png' },
    { value: 1, imageUrl: 'assets/images/cards/1.png' },
    { value: 2, imageUrl: 'assets/images/cards/2.png' },
    { value: 3, imageUrl: 'assets/images/cards/3.png' },
    { value: 4, imageUrl: 'assets/images/cards/4.png' },
    { value: 5, imageUrl: 'assets/images/cards/5.png' },
    { value: 6, imageUrl: 'assets/images/cards/6.png' },
    { value: 7, imageUrl: 'assets/images/cards/7.png' },
    { value: 8, imageUrl: 'assets/images/cards/8.png' },
    { value: 9, imageUrl: 'assets/images/cards/9.png' }
  ];

  nextCardVisible: boolean = false;
  currentCard: Card = {value: 0, imageUrl: 'assets/images/cards/0.png'};
  nextCard: Card = {value: 0, imageUrl: 'assets/images/cards/0.png'};;
  score: number = 0;
  gameOver: boolean = false;

  ngOnInit() {
    this.shuffleCards();
    this.showNextCard();
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  showNextCard() {
    const index = Math.floor(Math.random() * this.cards.length);
    this.currentCard = this.nextCard;
    this.nextCard = this.cards[index];
  }

  checkGuess(isHigher: boolean) {
    if (
      (isHigher && this.nextCard.value > this.currentCard.value) ||
      (!isHigher && this.nextCard.value < this.currentCard.value)
    ) {
      this.score++;
      this.showNextCard();
    } else {
      this.gameOver = true;
      this.nextCardVisible = true;
    }
  }

  restartGame() {
    window.location.reload();
  }

}


