const userDetailsInfo = {
  id: 321,
  name: "Arhur Morgan",
  email: "arthur.morgan@mail.com",
  logo: "/images/user-321.jpg",
  registrationDate: new Date(2013, 7, 18),
  watchedFilms: [
    {
      id: 4,
      title: "Django Unchained",
      date: new Date(2012, 17, 1),
      rating: 8.4,
      picture: "/images/film-4.jpg",
    },
    {
      id: 3,
      title: "Medici: The Magnificent",
      date: new Date(2018, 8, 2),
      rating: 7.8,
      picture: "/images/film-3.jpg",
    },
  ],
  favoriteFilms: [
    {
      id: 4,
      title: "Django Unchained",
      date: new Date(2012, 17, 1),
      rating: 8.4,
      picture: "/images/film-4.jpg",
    },
    {
      id: 2,
      title: "Mamma Mia! 2",
      date: new Date(2013, 7, 18),
      rating: 7.0,
      picture: "/images/film-2.jpg",
    },
  ],
  myComments: [
    {
      film: {
        id: 2,
        title: "Mamma Mia! 2",
      },
      date: new Date(2013, 10, 2),
      rating: 7.5,
      title: "Best Movie",
      text: "«Богемная рапсодия» — автобиографическая, художественная картина. Можно сказать, что она получилась довольно спорной в силу того, что аудитория разделилась на несколько лагерей. Одни полностью поддерживают мысли по поводу её качества, а некоторые не согласны в корне. Что же получается? Получается большой ажиотаж. С учётом этого за первую неделю проката удалось собрать 150 миллионов долларов. Это внушительные цифры с опором на то, что было затрачено всего 50 миллионов.",
    },
    {
      film: {
        id: 2,
        title: "Mamma Mia! 2",
      },
      date: new Date(2013, 10, 2),
      rating: 7.5,
      title: "Best Movie",
      text: "«Богемная рапсодия» — автобиографическая, художественная картина. Можно сказать, что она получилась довольно спорной в силу того, что аудитория разделилась на несколько лагерей. Одни полностью поддерживают мысли по поводу её качества, а некоторые не согласны в корне. Что же получается? Получается большой ажиотаж. С учётом этого за первую неделю проката удалось собрать 150 миллионов долларов. Это внушительные цифры с опором на то, что было затрачено всего 50 миллионов.",
    },
  ],

  subscriptions: [
    {
      id: 1,
      name: "Some User",
    },
    {
      id: 2,
      name: "Other User",
    },

  ],

  subscribers: [
    {
      id: 1,
      name: "Some User",
    },
    {
      id: 2,
      name: "Other User",
    },

  ],

}

export default function user(state = {}, action) {
  if (action.type === 'GET_USER_DETAILS') {
    /** action.payload.userId */
    return userDetailsInfo;
  }

  return state;
}
