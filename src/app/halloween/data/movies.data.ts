import { Movie } from "../interfaces/movies.interface";

export const DATA_MOVIES: Movie[] = [
    {
        title: 'Hocus Pocus',
        description: "After moving to Salem, Massachusetts, Max Dennison explores an abandoned house with his sister, Dani, and their new friend, Allison. Max accidentally frees three witches who used to live there. With the help of a magical cat, the boys must steal the witches' spell book before they become immortal.",
        picture: '/hocus.png',
        options: [
            {
                title: 'Hocus Pocus',
                success: true
            },
            {
                title: 'the witches of salem',
                success: false
            },
            {
                title: 'The Anderson sisters',
                success: false
            }
        ]
    },

    {
        title: 'Wednesday',
        description: "While attending Nevermore Academy, Merlina Addams attempts to master her budding psychic ability, thwart a murder spree, and solve the mystery that involved her parents 25 years ago.",
        picture: '/wednesday.webp',
        options: [
            {
                title: 'the girl in black',
                success: false
            },
            {
                title: 'Wednesday Addams',
                success: false
            },
            {
                title: 'Wednesday',
                success: true
            }
        ]
    },

    {
        title: 'Casper',
        description: "During a visit to an heiress's mansion, a young orphan helps a friendly ghost named Gasparín.",
        picture: '/casper.jpg',
        options: [
            {
                title: 'Gaspar',
                success: false
            },
            {
                title: 'Casper',
                success: true
            },
            {
                title: 'Casparin',
                success: false
            }
        ]
    },

    {
        title: 'The Conjuring II',
        description: "Ed and Lorraine Warren, renowned demonologists and paranormal investigators, once again face infernal forces. On this occasion, they travel to north London to try to help a mother and her four children, who live in a house plagued by evil spirits.",
        picture: '/conjuring.jpg',
        options: [
            {
                title: 'The Nun',
                success: false
            },
            {
                title: 'The Conjuring',
                success: false
            },
            {
                title: 'The Conjuring II',
                success: true
            }
        ]
    },

    {
        title: 'Monster House',
        description: "No adult believes three kids who claim that a neighborhood residence is a living creature that represents a danger. With Halloween approaching, the trio must find a way to destroy its structure before innocent children are affected.",
        picture: '/monsterhouse.jpg',
        options: [
            {
                title: 'Monster House',
                success: true
            },
            {
                title: 'Ghost House',
                success: false
            },
            {
                title: 'Haunted House',
                success: false
            }
        ]
    },

    {
        title: 'Ghostbusters',
        description: "Four unemployed paranormal investigators create a company in New York with the purpose of clearing the city of ghosts.",
        picture: '/Ghostbusters.jpg',
        options: [
            {
                title: 'Spirit hunters',
                success: false
            },
            {
                title: 'Ghostbusters',
                success: true
            },
            {
                title: 'Ghost Tunters',
                success: false
            }
        ]
    },
   
    {
        title: 'the nightmare before christmas',
        description: "The pumpkin king in the witch town plans to kidnap Santa Claus and at the same time bring panic instead of joy.",
        picture: '/jack.jpg',
        options: [
            {
                title: 'the strange world of jack',
                success: false
            },
            {
                title: 'the nightmare before christmas',
                success: true
            },
            {
                title: 'pumpkin king',
                success: false
            }
        ]
    },


    {
        title: 'Insidious',
        description: "Josh and Renai move to a new house, where their son has a terrible accident and is left in a coma.",
        picture: '/insidius.webp',
        options: [
            {
                title: 'the night of the demon',
                success: false
            },
            {
                title: 'the night of the demon II',
                success: false
            },
            {
                title: 'Insidious',
                success: true
            }
        ]
    },

    {
        title: 'Coco',
        description: "Miguel is a boy who dreams of being a musician, but his family forbids it because his great-great-grandfather, a musician, abandoned them, and they want to force Miguel to be a shoemaker, like all the members of the family. By accident, Miguel enters the Land of the Dead, from where he can only leave if a deceased relative",
        picture: '/coco.jpeg',
        options: [
            {
                title: 'COCO',
                success: true
            },
            {
                title: 'day of the dead',
                success: false
            },
            {
                title: "All Saints' Day",
                success: false
            }
        ]
    },
    {
        title: 'halloweentown',
        description: "Discovering that she comes from a family of witches, a young woman helps her family fight the forces of evil.",
        picture: '/halloweentown.jpg',
        options: [
            {
                title: 'The magic book',
                success: false
            },
            {
                title: 'the witches',
                success: false
            },
            {
                title: "halloweentown",
                success: true
            }
        ]
    }


    


    
     
]