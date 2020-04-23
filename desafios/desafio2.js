/*
utilizando o mesmo pipeline anterior,
retorne apenas os campos title, rated, imdb.rating, imbd.votes e year,
modificando seus nomes para titulo, avaliado, notaIMDB, votosIMDB e ano, respectivamente.
*/


/*
use aggregations;

db.movies.aggregate([
  {
    $match: {
      $and: [
        {
          'imdb.rating': { $gte: 7 }
        },
        {
          $nor: [
            {
              'genres': { $in: ['Crime', 'Horror'] }
            }
          ]
        },
        {
          $or: [
            {
              'rated': 'PG',
            },
            {
              'rated': 'G',
            }
          ]
        },
        {
          'languages': { $all: ['English', 'Spanish'] }
        },
      ]
    }
  },
  {
    $project: {
      '_id': 0,
      'titulo': '$title',
      'avaliado': '$rated',
      'notaIMDB': '$imdb.rating',
      'votosIMDB': '$imdb.votes',
      'ano': '$year',
    }
  }
]);
*/
