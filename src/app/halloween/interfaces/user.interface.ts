export interface User {

    name      : string;
    startDate : string;
    endDate   : string | boolean;
    points    : number;
    moviesOK  : number;
    moviesErr : number;
    duration  : number,
    lives     : number;
}

export enum  TypeFinished {
    LOST,
    OVER
}

export interface GameOver {
    status: TypeFinished;

}