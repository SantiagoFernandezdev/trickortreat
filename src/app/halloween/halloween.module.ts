import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayComponent } from './components/play/play.component';
import { BoardComponent } from './components/board/board.component';
import { UserComponent } from './components/user/user.component';
import { ButtonOptionComponent } from './components/button-option/button-option.component';
import { GameOverComponent } from './components/game-over/game-over.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    MoviesComponent,
    HomeComponent,
    PlayComponent,
    BoardComponent,
    UserComponent,
    ButtonOptionComponent,
    GameOverComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HalloweenModule { }
