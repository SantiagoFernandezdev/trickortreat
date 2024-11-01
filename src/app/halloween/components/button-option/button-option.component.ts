import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HalloweenService } from '../../services/halloween.service';
import { Option } from '../../interfaces/movies.interface';

@Component({
  selector: 'app-button-option',
  templateUrl: './button-option.component.html',
  styleUrl: './button-option.component.css'
})
export class ButtonOptionComponent {

  constructor(
    private hallowwenService: HalloweenService
  ) {

  }

  @Input() option?: Option;
  @Output() chooseMovie: EventEmitter<Option> = new EventEmitter()

  choose(option: Option) {
    this.chooseMovie.emit(option)
  }
}
