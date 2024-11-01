import { Component, OnInit } from '@angular/core';
import { HalloweenService } from '../../services/halloween.service';
import 'animate.css';
import { GameOver } from '../../interfaces/user.interface';


export enum  Screen {
  WELCOME,
  MOVIES,
  TABLE,
  GAMEOVER
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})



export class HomeComponent implements OnInit {

  constructor(
    private halloweenService: HalloweenService
  ) {

  }

  loadScreen: Screen = Screen.WELCOME;

  Screen = Screen;

  ngOnInit(): void {
    if (this.halloweenService.session) {
      this.loadScreen = Screen.MOVIES

      if (this.halloweenService.session.lives <= 0) {
        this.loadScreen = Screen.GAMEOVER
      }
    }
  }

  startGame(event: string) {
    this.loadScreen = Screen.MOVIES;
  }

  gameOver(event: GameOver) {
    this.loadScreen = Screen.GAMEOVER

    this.halloweenService.gameOver()
  }

  againGame(event: boolean) {
    if (event) {
      this.loadScreen = Screen.WELCOME;
    }
  }

  changeMode() {
    this.loadScreen = Screen.GAMEOVER

  }
}
