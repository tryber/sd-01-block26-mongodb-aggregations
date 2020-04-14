/*
imdb.rating deve ser ao menos 7;
genres não deve conter Crime ou Horror;
rated deve ser igual a PG ou G;
languages contém English e Spanish.
Utilizando a coleção movies,
faça um pipeline que retorne todos esses filmes.

Sua query deve retornar 41 documentos.
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
  }
]);
*/
