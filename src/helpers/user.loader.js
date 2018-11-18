let userDetails = {};
let user1 = {};
let user2 = {};

export function logIn(login, password) {
  return login && password && login === 'admin' && password === 'admin' ? 321 : undefined;
}

export function loadUserDetails(userId) {
  if (userId === 321) { return userDetails; }
  if (userId === 1) { return user1; }
  if (userId === 2) { return user2; }
  return {};
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
        id: 4,
        title: "Django Unchained",
      },
      date: new Date(2013, 10, 2),
      rating: 7.5,
      title: "Best Movie",
      text: "Really like that i guess everyone enjoy this movie. And if not ...",
    }
  ],

  subscriptions: [
    {
      id: 1,
      name: "Jhon Black",
      approved: true,
    },
    {
      id: 2,
      name: "James Smith",
      approved: false,
    },

  ],

  subscribers: [
    {
      id: 1,
      name: "Jhon Black",
      approved: true,
      // logo: "/images/user-321.jpg",
    },
    {
      id: 2,
      name: "James Smith",
      // logo: "/images/user-321.jpg",
      approved: false,
    },

  ],
}

user1 = {
  id: 1,
  name: "Jhon Black",
  hasPermission: true, // allows to watch favorite catalog
  email: "Jhon.Black@mail.com",
  registrationDate: new Date(2013, 7, 18),
  visitedFilms: [],
  favoriteFilms: [
    {
      id: 5,
      title: "Bohemian Rhapsody",
      date: new Date(2012, 17, 1),
      rating: 7.5,
      picture: "/images/film-5.jpg",
      categories: ["Drama", "Western"],
    },
  ],
  myComments: [
    {
      film: {
        id: 5,
        title: "Bohemian Rhapsody",
      },
      date: new Date(2013, 10, 2),
      rating: 7.5,
      title: "Best Movie",
      text: "«Богемная рапсодия» — автобиографическая, художественная картина. Можно сказать, что она получилась довольно спорной в силу того, что аудитория разделилась на несколько лагерей. Одни полностью поддерживают мысли по поводу её качества, а некоторые не согласны в корне. Что же получается? Получается большой ажиотаж. С учётом этого за первую неделю проката удалось собрать 150 миллионов долларов. Это внушительные цифры с опором на то, что было затрачено всего 50 миллионов.",
    }
  ],

  subscriptions: [
    {
      id: 2,
      name: "James Smith",
      approved: false,
    },
    {
      id: 321,
      name: "Arthor Morgan",
      approved: true,
    },
  ],

}

user2 = {
  id: 2,
  name: "James Smith",
  hasPermission: false, // allows to watch favorite catalog
  email: "James.Smith@mail.com",
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

  subscriptions: [
    {
      id: 1,
      name: "Jhon Black",
      approved: true,
    },
  ],

}