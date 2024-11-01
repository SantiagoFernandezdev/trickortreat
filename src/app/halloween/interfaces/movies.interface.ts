
export interface Movie {

    title       : string;
    description : string;
    picture     : string;
    options     : Option[]
}

export interface Option {

    title      : string;
    success    : boolean;
}