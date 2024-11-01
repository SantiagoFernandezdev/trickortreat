import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HalloweenService } from '../../services/halloween.service';
import { Movie, Option } from '../../interfaces/movies.interface';
import 'animate.css';
import { GameOver, TypeFinished, User } from '../../interfaces/user.interface';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {

  constructor(
    private halloweenService: HalloweenService
  ) {

  }

  @Output() gameOver: EventEmitter<GameOver> = new EventEmitter()

  movie?: Movie;

  isSelectChoise: boolean = false;
  isClick: boolean = false;
  count: number = 5;

  intervalCount?: any;
  intervalCountRegresive?: any;

  user?: User;

  livs = [0,0,0]
  progress = 100;

  countRegresive = 20;

  soundRisa?: HTMLAudioElement;
  soundTicTac?: HTMLAudioElement;

  rounds = 0;
  currentRound = 0;

  ngOnInit(): void {
   
    this.user = this.halloweenService.session;
    this.getRouds()
    this.randomMovie()
  }

  getRouds() {
    this.rounds = this.halloweenService.rounds;
    this.currentRound = this.halloweenService.roundsCurrent;
  }

  resetLives() {
    this.livs = []
    for (let i = 0; i < this.user!.lives; i++) {
     this.livs.push(i)
      
    }

    this.progress =  Math.round((( this.livs.length * 100 )/3))
  }

  chooseMovie(option: Option, movie?: Movie) {

    this.isClick = true

    this.isSelectChoise = option.success;

    this.stopRegresive()

    if (this.isSelectChoise) {
      this.user!.points += 50;
      this.user!.moviesOK += 1;
     
    } else {
      this.user!.moviesErr += 1;
      this.user!.lives -= 1
      this.soundRisa = new Audio('/risa2.mp3')
      this.soundRisa.play()
      this.resetLives()
    }

    this.halloweenService.putUser(this.user!, movie)

    if (this.user!.lives == 0) {
      this.stopRegresive()
      
      this.gameOver.emit({
        status: TypeFinished.LOST
      })

      return;
    }


    
    this.startCount()


    setTimeout(() => {
   
      this.endCount()
      this.randomMovie()
    
    }, 5000);

   

  }

  startCount() {
     this.intervalCount = setInterval(() => {
        this.count = this.count - 1
    }, 1000);
  }

  endCount() {
    this.count = 5;
    window.clearInterval(this.intervalCount!)
    this.stopRegresive()
    if (this.soundRisa) {
      this.soundRisa.pause()
    }

    if (this.soundTicTac) {
      this.soundTicTac.pause()
      this.soundTicTac = undefined;
    }

    
  }

  stopRegresive() {
    if (this.intervalCountRegresive) {
    
      this.countRegresive = 20;
      window.clearInterval(this.intervalCountRegresive)
    } 
  }

  randomMovie() {

   
    this.stopRegresive()
    this.isClick = false;
    this.isSelectChoise = false;
    this.movie = this.halloweenService.randomMovies()

    this.getRouds()

   if (!this.movie) {
    this.gameOver.emit({
      status: TypeFinished.OVER
    })
   }

    if (this.movie) {

  
      this.intervalCountRegresive = setInterval(() => {
        console.log('coerriendo')
        this.countRegresive = this.countRegresive - 1

        if (this.countRegresive >= 0 && this.countRegresive <= 10) {

          if (!this.soundTicTac) {
            this.soundTicTac = new Audio('/tic-tac.mp3')
            this.soundTicTac.play()
          }
         
        }

        if (this.countRegresive == 0) {
          this.soundTicTac!.pause()
          this.soundTicTac = undefined;
          window.clearInterval(this.intervalCountRegresive)
          this.chooseMovie(this.movie!.options.filter(o => !o.success)[0], this.movie!)
          this.countRegresive = 20;
        }
    }, 1000);
    } 

    this.resetLives()
  }



}
