import { Injectable } from "@angular/core";
import moment from "moment-timezone";
import { User } from "../interfaces/user.interface";
import { Movie } from "../interfaces/movies.interface";
import { DATA_MOVIES } from "../data/movies.data";


@Injectable({
    providedIn: 'root'
})
export class HalloweenService {

    constructor() {

        this.createBD();

        console.log('hola')

    }

    public intro?: HTMLAudioElement;

    public user: string = '';

    public session? : User;

    private movieList: Movie[] = [...DATA_MOVIES];

    private movieRealese: Movie[] = [

    ];

    get rounds() {
        return DATA_MOVIES.length;
    }


    get roundsCurrent() {
        return this.movieRealese.length;
    }


    createBD() {

        console.log(localStorage.getItem('user'))

        if (!localStorage.getItem('user')) {
            localStorage.setItem('user', '')
        } else {
            this.session = JSON.parse(localStorage.getItem('user')!)
        }

        if (!localStorage.getItem('movies')) {
            localStorage.setItem('movies', JSON.stringify({
                movies: [...DATA_MOVIES],
                release: []
    
            }))
        } else {
            this.getMovies()
        }

        if (!localStorage.getItem('table')) {
            localStorage.setItem('table', '')
        }

        if (!this.intro && !this.session) {
            this.iniSound()
        }
    }

    iniSound() {
        if (this.intro) {
            this.intro = undefined
     
        }

        console.log(this.intro, 'intro')

        this.intro = new Audio('/sounds/intro.mp3')
            this.intro.play()

        
    }

    startGame(): void {

        const userSession: User = {
            name      : this.user,
            startDate : moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss'),
            endDate   : false,
            points    : 0,
            moviesOK  : 0,
            moviesErr : 0,
            duration  : 0,
            lives     : 3
        }

        this.session = userSession;

        const table = localStorage.getItem('table') || '';

        const json: User[] = this.convertToJSON(table!);

        let idx = json.findIndex(userInfo => userInfo.name == this.session?.name)

        if (idx >= 0) {
            alert('User has already been registered')
            throw new Error('User has already been registered')
           
        }

        localStorage.setItem('user', JSON.stringify(userSession))

        if (this.intro) {
            this.intro.pause()
        }


    }

    getMovies() {
        if (localStorage.getItem('movies')) {
            this.movieList = JSON.parse( localStorage.getItem('movies')!).movies;
            this.movieRealese = JSON.parse( localStorage.getItem('movies')!).release;
        }
    }

    randomMovies(): Movie | undefined {
        console.log(Math.random())
        let idx: number = Math.floor( Math.random() * this.movieList.length)
     
        const movie: Movie = {...this.movieList[idx]}

        

        if(this.movieList[idx]) {

            this.revieMovies()

            this.movieRealese.push(movie)

           console.log('ENTRANDO')
         
           
            

            localStorage.setItem('movies', JSON.stringify({
                movies: this.movieList,
                release: this.movieRealese
            }))
        }
        return movie.title ? movie : undefined;
    }

    revieMovies() {
        this.movieList.forEach( movie => {
            let existMovie = this.movieRealese.findIndex(mov => mov.title == movie.title)

            if (existMovie >= 0) {
                this.movieRealese.splice(existMovie, 1)
            }
        })
    }

    putUser(user: User, save?: Movie): void {
        this.session = user;
        localStorage.setItem('user', JSON.stringify(this.session))

        if (save) {

            let idx = this.movieList.findIndex(mov => mov.title == save.title)

            console.log(idx, 'INDICE')
          
           if (idx >= 0) {
            this.movieList.splice(idx, 1)
            

            localStorage.setItem('movies', JSON.stringify({
                movies: this.movieList,
                release: this.movieRealese
            }))
           }
        }
    }

    gameOver() {
        const table = localStorage.getItem('table') || '';

        const json: User[] = this.convertToJSON(table!);
        this.session!.endDate = moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss')
        this.session!.duration = moment(this.session!.endDate).diff(moment(this.session!.startDate), 'seconds')
       

        let idx = json.findIndex(userInfo => userInfo.name == this.session?.name)

        if (idx >= 0) {
            alert('User has already been registered')
            return;
        }

        json.push(this.session!)
        localStorage.setItem('table', JSON.stringify(json))

        this.iniSound()
    }

    getTable() {
        let users: User[] = this.convertToJSON(localStorage.getItem('table') || '')

        users = users.sort((a, b) => {
            if (a.points > b.points) {
                return -1;
            }
            if (a.points < b.points) {
                return 1;
            }


            if (a.lives > b.lives) {
                return -1;
            }
            if (a.lives < b.lives) {
                return 1;
            }

            return 0
        })

        return users
    }

    convertToJSON(jsonString: string) {
        try {
            return JSON.parse(jsonString)
        } catch(error) {
            return [];
        }
    }
    

    againGame() {
        this.session = undefined;
      
        this.user = '';
        if (this.intro) {
            this.intro.pause()
        }
        this.iniSound()
        this.movieList = [...DATA_MOVIES];
        this.movieRealese = [];
        
        localStorage.setItem('user', '')
        localStorage.setItem('movies', JSON.stringify({
            movies: [...DATA_MOVIES],
            release: []

        }))
    }
}