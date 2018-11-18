let userDetails = {};

export function logIn(login, password) {
  return login && password && login === 'admin' && password === 'admin' ? 321 : undefined;
}

export function loadUserDetails(userId) {
  return userDetails;
}

export function makeFilmFavorite(film) {
  userDetails.favoriteFilms.push(film);
}

export function removeFilmFromFavorite(film) {
  userDetails.favoriteFilms.splice(userDetails.favoriteFilms.indexOf(film), 1);
}

export function makeFilmVisited(film) {
  if (!userDetails.visitedFilms.includes(film)) { userDetails.visitedFilms.push(film); }
}

export function approveUser(myId, userId) {
  userDetails.subscribers[userDetails.subscribers.findIndex(user => user.id === userId)].approved = true;
}

export function deleteUser(myId, userId) {
  userDetails.subscribers.splice(userDetails.subscribers.findIndex(user => user.id === userId), 1);
}

export function unfollowFrom(myId, userId) {
  userDetails.subscriptions.splice(userDetails.subscriptions.findIndex(user => user.id === userId), 1);
}

export function cancelRequestTo(myId, userId) {
  userDetails.subscriptions.splice(userDetails.subscriptions.findIndex(user => user.id === userId), 1);
}

userDetails = {
  id: 321,
  name: "Arhur Morgan",
  hasPermission: true, // allows to watch favorite catalog
  email: "arthur.morgan@mail.com",
  logo: "/images/user-321.jpg",
  registrationDate: new Date(2013, 7, 18),
  visitedFilms: [],
  favoriteFilms: [
    {
      id: 4,
      title: "Django Unchained",
      date: new Date(2012, 17, 1),
      rating: 8.4,
      picture: "/images/film-4.jpg",
      categories: ["Drama", "Western"],
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
      approved: true,
    },
    {
      id: 2,
      name: "Other User",
      approved: false,
    },

  ],

  subscribers: [
    {
      id: 1,
      name: "Some User",
      approved: true,
      // logo: "/images/user-321.jpg",
    },
    {
      id: 2,
      name: "Other User",
      // logo: "/images/user-321.jpg",
      approved: false,
    },

  ],

}