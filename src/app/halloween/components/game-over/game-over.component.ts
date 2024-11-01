import { Component, EventEmitter, Output } from '@angular/core';
import { HalloweenService } from '../../services/halloween.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrl: './game-over.component.css'
})
export class GameOverComponent {

  constructor(
    private halloweenService: HalloweenService
  ) {

  }


  @Output() again: EventEmitter<boolean> = new EventEmitter()

  againGame(event: boolean) {
    if (event) {
      this.halloweenService.againGame()
      this.again.emit(true)
    }
  }

}
