/*
Agora que você tem os campos essenciais,
retorne esses filmes ordenados por ano
e nota IMDB de forma decrescente
e por ordem alfabética.
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
  },
  {
    $sort: {
      'ano': -1,
      'notaIMDB': -1,
      'titulo': 1,
    }
  }
]);
*/