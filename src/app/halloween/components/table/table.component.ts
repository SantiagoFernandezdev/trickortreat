import { Component, OnInit } from '@angular/core';
import { HalloweenService } from '../../services/halloween.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {

  constructor(
    private halloweenService: HalloweenService
  ) {

  }

  public tableUsers: User[] = [];

  public session?: User;
  

  ngOnInit(): void {
    this.session = this.halloweenService.session;
      this.getTable()
  }

  getTable() {
  this.tableUsers =  this.halloweenService.getTable()
  }

}
