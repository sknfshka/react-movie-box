let filmsWithDetails, userInfoToFilms, films;

export function loadFilmDetails(id) {
    return filmsWithDetails.find(film => film.id === id);
}

export function switchFilmFavorite(userId, filmId) {
    const i = userInfoToFilms.findIndex(userToFilm => userToFilm.userId === userId);
    if (i !== -1) {
        const j = userInfoToFilms[i].films.findIndex(film => film.filmId === filmId);
        if (j !== -1) {
            userInfoToFilms[i].films[j].isFavorite = !userInfoToFilms[i].films[j].isFavorite;
        }
    }
}

export function getUserInfoToFilm(filmId, userId) {
    const userToFilm = userInfoToFilms.find(userToFilm => userToFilm.userId === userId);
    const result = userToFilm.films.find(film => film.filmId === filmId);
    return {
        rating: result.rating,
        isFavorite: result.isFavorite,
    }
}

export function loadFilms() {
    return films;
}

films = [
    {
        id: 1,
        title: "Mortal Engines",
        date: new Date(2018, 12, 6),
        rating: 7.0,
        picture: "/images/film-1.jpg",
        categories: ["Action", "Adventure", "Fantasy"],
    },
    {
        id: 2,
        title: "Mamma Mia! 2",
        date: new Date(2013, 7, 18),
        rating: 7.0,
        picture: "/images/film-2.jpg",
        categories: ["Comedy", "Musical", "Romance"],
    },
    {
        id: 3,
        title: "Medici: The Magnificent",
        date: new Date(2018, 8, 2),
        rating: 7.8,
        picture: "/images/film-3.jpg",
        categories: ["Biography", "Drama", "History"],
    },
    {
        id: 4,
        title: "Django Unchained",
        date: new Date(2012, 17, 1),
        rating: 8.4,
        picture: "/images/film-4.jpg",
        categories: ["Drama", "Western"],
    },
    {
        id: 5,
        title: "Bohemian Rhapsody",
        date: new Date(2018, 11, 1),
        rating: 8.4,
        picture: "/images/film-5.jpg",
        categories: ["Biography", "Drama", "Music"],
    },
    {
        id: 6,
        title: "Fantastic Beasts and Where to Find Them",
        date: new Date(2016, 11, 17),
        rating: 7.3,
        picture: "/images/film-6.jpg",
        categories: ["Adventure", "Fantasy"],
    },
    {
        id: 7,
        title: "Super Mario Bros.",
        date: new Date(1997, 10, 31),
        rating: 4.0,
        picture: "/images/film-7.jpg",
        categories: ["Adventure", "Comedy"],
    },
    {
        id: 8,
        title: "Dragonball Evolution",
        date: new Date(2009, 4, 2),
        rating: 2.6,
        picture: "/images/film-8.jpg",
        categories: ["Action", "Adventure", "Fantasy"],
    }
]

userInfoToFilms = [
    {
        userId: 321,
        films: [
            {
                filmId: 1,
                rating: 3,
                isFavorite: true,
            },
            {
                filmId: 2,
                rating: 6,
                isFavorite: true,
            },
            {
                filmId: 3,
                rating: 5,
                isFavorite: true,
            },
            {
                filmId: 4,
                rating: 9,
                isFavorite: true,
            },
            {
                filmId: 5,
                rating: 8,
                isFavorite: true,
            },
            {
                filmId: 6,
                rating: 8,
                isFavorite: false,
            },
            {
                filmId: 7,
                rating: 1,
                isFavorite: false,
            }
            ,
            {
                filmId: 8,
                rating: 1,
                isFavorite: false,
            }
        ]
    },
]


filmsWithDetails = [
    {
        id: 1,
        title: "Mortal Engines",
        date: new Date(2018, 12, 6),
        rating: 7,
        picture: "/images/film-1.jpg",
        categories: ["Action", "Adventure", "Fantasy"],

        time: '2h 33min',
        backgroundPicture: "/images/film-1-bg.jpg",
        yearAllowed: "13+",
        stars: ["Hugo Weaving", "Stephen Lang", "Hera Hilmar"],
        director: "Christian Rivers",
        writer: "Fran Walsh",
        description: "A mysterious young woman named Hester Shaw joins forces with Anna Fang, a dangerous outlaw with a bounty on her head, and Tom Natsworthy, an outcast from London, to lead a rebellion against a giant predator city on wheels.",
        comments: [
            {
                author: {
                    name: "Jhon Black",
                    id: 1,
                },
                date: new Date(2013, 10, 2),
                rating: 7.5,
                title: "Best Movie",
                text: "«Богемная рапсодия» — автобиографическая, художественная картина. Можно сказать, что она получилась довольно спорной в силу того, что аудитория разделилась на несколько лагерей. Одни полностью поддерживают мысли по поводу её качества, а некоторые не согласны в корне. Что же получается? Получается большой ажиотаж. С учётом этого за первую неделю проката удалось собрать 150 миллионов долларов. Это внушительные цифры с опором на то, что было затрачено всего 50 миллионов.",
            },
        ]
    },
    {
        id: 2,
        title: "Mamma Mia! 2",
        date: new Date(2013, 7, 18),
        rating: 7,
        picture: "/images/film-2.jpg",
        categories: ["Comedy", "Musical", "Romance"],

        time: '1h 54min',
        backgroundPicture: "/images/film-2-bg.jpg",
        yearAllowed: "13+",
        stars: ["Lily James", "Amanda Seyfried", "Meryl Streep"],
        director: "Ol Parker",
        writer: "Ol Parker",
        description: "Five years after the events of Mamma Mia! (2008), Sophie prepares for the grand reopening of the Hotel Bella Donna as she learns more about her mother's past.",
        comments: [
            {
                author: {
                    name: "Jhon Black",
                    id: 1,
                },
                date: new Date(2013, 10, 2),
                rating: 7.5,
                title: "Best Movie",
                text: "«Богемная рапсодия» — автобиографическая, художественная картина. Можно сказать, что она получилась довольно спорной в силу того, что аудитория разделилась на несколько лагерей. Одни полностью поддерживают мысли по поводу её качества, а некоторые не согласны в корне. Что же получается? Получается большой ажиотаж. С учётом этого за первую неделю проката удалось собрать 150 миллионов долларов. Это внушительные цифры с опором на то, что было затрачено всего 50 миллионов.",
            },
        ]
    },
    {
        id: 3,
        title: "Medici: The Magnificent",
        date: new Date(2018, 8, 2),
        rating: 7.8,
        picture: "/images/film-3.jpg",
        categories: ["Biography", "Drama", "History"],

        time: '3 seasons',
        backgroundPicture: "/images/film-3-bg.jpg",
        yearAllowed: "83+",
        stars: ["Daniel Sharman", "Synnove Karlsen", "Jacopo Olmo Antinori"],
        director: "-",
        writer: "Domenico Sica",
        description: "1470. Medici's family power has been consolidated over time. Lorenzo is called to take his father's place after an attempt on his life which reveals years of poor bank management from them. As new head of Medici's family he has to take care of his brother Giuliano and his sister Bianca. He marries Clarice Orsini, a noble woman from Rome, and his friendship with Botticelli gives life to Renaissance. His contrast with Pope Sixtus brings Florence to the most bloody moment of its History, the Pazzi conspiracy.",
        comments: [
            {
                author: {
                    name: "Jhon Black",
                    id: 1,
                },
                date: new Date(2013, 10, 2),
                rating: 7.5,
                title: "Best Movie",
                text: "«Богемная рапсодия» — автобиографическая, художественная картина. Можно сказать, что она получилась довольно спорной в силу того, что аудитория разделилась на несколько лагерей. Одни полностью поддерживают мысли по поводу её качества, а некоторые не согласны в корне. Что же получается? Получается большой ажиотаж. С учётом этого за первую неделю проката удалось собрать 150 миллионов долларов. Это внушительные цифры с опором на то, что было затрачено всего 50 миллионов.",
            },
        ]
    },
    {
        id: 4,
        title: "Django Unchained",
        date: new Date(2012, 17, 1),
        rating: 8.4,
        picture: "/images/film-4.jpg",
        categories: ["Drama", "Western"],

        time: '2h 45min',
        backgroundPicture: "/images/film-4-bg.jpg",
        yearAllowed: "18+",
        stars: ["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio"],
        director: "Quentin Tarantino",
        writer: "Quentin Tarantino",
        description: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
        comments: [
            {
                author: {
                    name: "Jhon Black",
                    id: 1,
                },
                date: new Date(2013, 10, 2),
                rating: 7.5,
                title: "Best Movie",
                text: "«Богемная рапсодия» — автобиографическая, художественная картина. Можно сказать, что она получилась довольно спорной в силу того, что аудитория разделилась на несколько лагерей. Одни полностью поддерживают мысли по поводу её качества, а некоторые не согласны в корне. Что же получается? Получается большой ажиотаж. С учётом этого за первую неделю проката удалось собрать 150 миллионов долларов. Это внушительные цифры с опором на то, что было затрачено всего 50 миллионов.",
            },
        ]
    },


    {
        id: 5,
        title: "Bohemian Rhapsody",
        date: new Date(2018, 11, 1),
        rating: 8.4,
        picture: "/images/film-5.jpg",
        categories: ["Biography", "Drama", "Music"],

        time: '2h 14min',
        backgroundPicture: "/images/film-5-bg.jpg",
        yearAllowed: "18+",
        stars: ["Rami Malek", "Lucy Boynton", "Gwilym Lee"],
        director: "Bryan Singer",
        writer: "Anthony McCarten",
        description: "A chronicle of the years leading up to Queen's legendary appearance at the Музыкальный фестиваль Live Aid (1985) concert.",
        comments: [
            {
                author: {
                    name: "Jhon Black",
                    id: 1,
                },
                date: new Date(2013, 10, 2),
                rating: 7.5,
                title: "Best Movie",
                text: "«Богемная рапсодия» — автобиографическая, художественная картина. Можно сказать, что она получилась довольно спорной в силу того, что аудитория разделилась на несколько лагерей. Одни полностью поддерживают мысли по поводу её качества, а некоторые не согласны в корне. Что же получается? Получается большой ажиотаж. С учётом этого за первую неделю проката удалось собрать 150 миллионов долларов. Это внушительные цифры с опором на то, что было затрачено всего 50 миллионов.",
            },
        ]
    },

    {
        id: 6,
        title: "Fantastic Beasts and Where to Find Them",
        date: new Date(2016, 11, 17),
        rating: 7.3,
        picture: "/images/film-6.jpg",
        categories: ["Adventure", "Fantasy"],

        time: '2h 13min',
        backgroundPicture: "/images/film-6-bg.jpg",
        yearAllowed: "12+",
        stars: ["Eddie Redmayne", "Katherine Waterston", "Alison Sudol"],
        director: "David Yates",
        writer: "J.K. Rowlingn",
        description: "In mid-20s New York, Newt Scamander, the British young activist wizard, arrives in town, holding a mysterious leather suitcase which shelters a wide array of diverse and magical creatures that exist among us. Amid an already fragile equilibrium of secrecy, and the increasing disasters ascribed to the dark wizard, Gellert Grindelwald, Newt's precious suitcase will be lost--and to make matters worse--several creatures will manage to escape. Before long, this situation will catch Senior Auror Percival Graves' attention who will target Newt, in the background of an invisible, devastating, and utterly unpredictable menace that still wreaks havoc on 5th Avenue. In the end, is there a hidden agenda behind Graves' intentions; moreover, what will happen to the remaining fantastic beasts still loose in the streets?",
        comments: [
            {
                author: {
                    name: "Jhon Black",
                    id: 1,
                },
                date: new Date(2013, 10, 2),
                rating: 7.5,
                title: "Best Movie",
                text: "«Богемная рапсодия» — автобиографическая, художественная картина. Можно сказать, что она получилась довольно спорной в силу того, что аудитория разделилась на несколько лагерей. Одни полностью поддерживают мысли по поводу её качества, а некоторые не согласны в корне. Что же получается? Получается большой ажиотаж. С учётом этого за первую неделю проката удалось собрать 150 миллионов долларов. Это внушительные цифры с опором на то, что было затрачено всего 50 миллионов.",
            },
        ]
    },
    {
        id: 7,
        title: "Super Mario Bros.",
        date: new Date(1997, 10, 31),
        rating: 4.0,
        picture: "/images/film-7.jpg",
        categories: ["Adventure", "Comedy"],

        time: '1h 44min',
        backgroundPicture: "/images/film-7-bg.jpg",
        yearAllowed: "0+",
        stars: ["Bob Hoskins", "John Leguizamo", "Dennis Hopper"],
        director: "Annabel Jankel",
        writer: "Parker Bennett",
        description: "Two Brooklyn plumbers, Mario and Luigi, must travel to another dimension to rescue a princess from the evil dictator King Koopa and stop him from taking over the world.",
        comments: [
            {
                author: {
                    name: "Jhon Black",
                    id: 1,
                },
                date: new Date(2013, 10, 2),
                rating: 7.5,
                title: "Best Movie",
                text: "«Богемная рапсодия» — автобиографическая, художественная картина. Можно сказать, что она получилась довольно спорной в силу того, что аудитория разделилась на несколько лагерей. Одни полностью поддерживают мысли по поводу её качества, а некоторые не согласны в корне. Что же получается? Получается большой ажиотаж. С учётом этого за первую неделю проката удалось собрать 150 миллионов долларов. Это внушительные цифры с опором на то, что было затрачено всего 50 миллионов.",
            },
        ]
    },
    {
        id: 8,
        title: "Dragonball Evolution",
        date: new Date(2009, 4, 2),
        rating: 2.6,
        picture: "/images/film-8.jpg",
        categories: ["Action", "Adventure", "Fantasy"],

        time: '1h 25min ',
        backgroundPicture: "/images/film-8-bg.jpg",
        yearAllowed: "12+",
        stars: ["Justin Chatwin", "James Marsters", "Yun-Fat Chow"],
        director: "James Wong",
        writer: "Ben Ramsey",
        description: "The young warrior Son Goku sets out on a quest, racing against time and the vengeful King Piccolo, to collect a set of seven magical orbs that will grant their wielder unlimited power.",
        comments: [
            {
                author: {
                    name: "Jhon Black",
                    id: 1,
                },
                date: new Date(2013, 10, 2),
                rating: 7.5,
                title: "Best Movie",
                text: "«Богемная рапсодия» — автобиографическая, художественная картина. Можно сказать, что она получилась довольно спорной в силу того, что аудитория разделилась на несколько лагерей. Одни полностью поддерживают мысли по поводу её качества, а некоторые не согласны в корне. Что же получается? Получается большой ажиотаж. С учётом этого за первую неделю проката удалось собрать 150 миллионов долларов. Это внушительные цифры с опором на то, что было затрачено всего 50 миллионов.",
            },
        ]
    }
]