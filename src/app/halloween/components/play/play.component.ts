import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HalloweenService } from '../../services/halloween.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrl: './play.component.css'
})
export class PlayComponent {

  constructor(
    private halloweenService: HalloweenService
  ) {

  }

  @Output()
  userEvent: EventEmitter<string> = new EventEmitter()

  @Output()
  againGame: EventEmitter<boolean> = new EventEmitter()

  @Input() again: boolean = false;

  @Input() title: string = 'start game';

  startGame() {

    if (this.again) {
      this.againGame.emit(true)
      return;
    }

    if (!this.halloweenService.user) {
      alert('User not found, please wirte your name')
      return;
    }

    try {
      this.halloweenService.startGame();
      this.userEvent.emit(this.halloweenService.user)
    } catch (error) {
      
    }
    



   
  }



}
