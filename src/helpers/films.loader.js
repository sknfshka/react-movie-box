export function loadFilmDetails(id) {
    return {
        id: 2,
        title: "Fantastic Beasts and Where to Find Them",
        date: new Date(2013, 10, 2),
        rating: 8.3,
        backgroundPicture: "/images/film-bg.jpg",
        picture: "/images/film3.jpg",
        yearAllowed: "12+",
        categories: ["Comedy"],
        stars: ["Eddie Redmayne", "Katherine Waterston", "Alison Sudol"],
        director: "David Yates",
        writer: "J.K. Rowling",
        description: "In mid-20s New York, Newt Scamander, the British young activist wizard, arrives in town, holding a mysterious leather suitcase which shelters a wide array of diverse and magical creatures that exist among us. Amid an already fragile equilibrium of secrecy, and the increasing disasters ascribed to the dark wizard, Gellert Grindelwald, Newt's precious suitcase will be lost--and to make matters worse--several creatures will manage to escape. Before long, this situation will catch Senior Auror Percival Graves' attention who will target Newt, in the background of an invisible, devastating, and utterly unpredictable menace that still wreaks havoc on 5th Avenue. In the end, is there a hidden agenda behind Graves' intentions; moreover, what will happen to the remaining fantastic beasts still loose in the streets?",
        reviews: [
            {
                user: "Jhon Black",
                date: new Date(2013, 10, 2),
                rating: 7.5,
                title: "Best Movie",
                text: "«Богемная рапсодия» — автобиографическая, художественная картина. Можно сказать, что она получилась довольно спорной в силу того, что аудитория разделилась на несколько лагерей. Одни полностью поддерживают мысли по поводу её качества, а некоторые не согласны в корне. Что же получается? Получается большой ажиотаж. С учётом этого за первую неделю проката удалось собрать 150 миллионов долларов. Это внушительные цифры с опором на то, что было затрачено всего 50 миллионов.",
            },
            {
                user: "Jhon Black",
                date: new Date(2013, 10, 2),
                rating: 7.5,
                title: "Best Movie",
                text: "«Богемная рапсодия» — автобиографическая, художественная картина. Можно сказать, что она получилась довольно спорной в силу того, что аудитория разделилась на несколько лагерей. Одни полностью поддерживают мысли по поводу её качества, а некоторые не согласны в корне. Что же получается? Получается большой ажиотаж. С учётом этого за первую неделю проката удалось собрать 150 миллионов долларов. Это внушительные цифры с опором на то, что было затрачено всего 50 миллионов.",
            },
            {
                user: "Jhon Black",
                date: new Date(2013, 10, 2),
                rating: 7.5,
                title: "Best Movie",
                text: "«Богемная рапсодия» — автобиографическая, художественная картина. Можно сказать, что она получилась довольно спорной в силу того, что аудитория разделилась на несколько лагерей. Одни полностью поддерживают мысли по поводу её качества, а некоторые не согласны в корне. Что же получается? Получается большой ажиотаж. С учётом этого за первую неделю проката удалось собрать 150 миллионов долларов. Это внушительные цифры с опором на то, что было затрачено всего 50 миллионов.",
            },
        ]
    }
}

export function loadFilms() {
  return [
    {
        id: 2,
        title: "Mamma Mia! 2",
        date: new Date(2013, 10, 2),
        rating: 8.3,
        picture: "/images/film3.jpg",
        categories: ["Comedy"]
    },
    {
        id: 4,
        title: "Django Unchained",
        date: new Date(2013, 11, 2),
        rating: 2,
        picture: "/images/iphone360_586397.jpg",
        categories: ["Comedy","Thriller"]
    },
    {
        id: 1,
        title: "Mortal Engines",
        date: new Date(2012, 11, 2),
        rating: 5,
        picture: "/images/film6.jpg",
        categories: ["Comedy","Thriller"]
    },
    {
        id: 3,
        title: "Medici: The Magnificent",
        date: new Date(2015, 11, 2),
        rating: 10,
        picture: "/images/film5.jpg",
        categories: ["Comedy","Thriller"]
    },
    {
        id: 5,
        title: "Bohemian Rhapsody",
        date: new Date(2018, 11, 1),
        rating: 7,
        picture: "/images/film4.jpg",
        categories: ["Comedy","Thriller"]
    },
    {
        id: 6,
        title: "Aquaman",
        date: new Date(2013, 11, 2),
        rating: 2,
        picture: "/images/film8.jpg",
        categories: ["Comedy","Thriller"]
    },
    {
        id: 7,
        title: "Fantastic Beasts and Where to Find Them",
        date: new Date(2013, 11, 2),
        rating: 2,
        picture: "/images/films2.jpg",
        categories: ["Comedy","Thriller"]
    }];
}