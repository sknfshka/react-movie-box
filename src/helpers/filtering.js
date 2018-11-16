const compareDates = (a, b) => {
  if (a < b) return 1;
  else if (a === b) return 0;
  else return -1;
}

const compareNumbers = (a, b) => {
  if (a < b) return 1;
  else if (a === b) return 0;
  else return -1;
}

const filterFilms = (films, filterFilms) => {
  if (filterFilms.category && filterFilms.category !== 'all') {
    films = films.filter(film => film.categories
      .map(category => category.toLowerCase())
      .includes(filterFilms.category.toLowerCase()));
  }

  if (filterFilms.sortBy) {
    switch (filterFilms.sortBy) {
      case 'title': {
        films = films.sort((a, b) => a.title.localeCompare(b.title))
        break;
      }
      case 'latest': {
        films = films.sort((a, b) => compareDates(a.date, b.date));
        break;
      }
      case 'best': {
        films = films.sort((a, b) => compareNumbers(a.rating, b.rating));
        break;
      }
      default:
    }
  }

  return films
    .filter(film => film.date.getFullYear() <= filterFilms.yearUntil)
    .filter(film => film.date.getFullYear() >= filterFilms.yearFrom)
    .filter(film => film.rating >= filterFilms.ratingFrom)
    .filter(film => film.title.toLowerCase().startsWith(filterFilms.title.toLowerCase()));
}


export default filterFilms;