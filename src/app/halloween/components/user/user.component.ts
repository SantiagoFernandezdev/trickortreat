import { Component, ElementRef, ViewChild } from '@angular/core';
import { HalloweenService } from '../../services/halloween.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  constructor(
    private halloweenService: HalloweenService
  ) {

  }

  @ViewChild('user') user?: ElementRef<HTMLInputElement>;

  setText() {
    this.halloweenService.user = this.user!.nativeElement.value;
  }

}
