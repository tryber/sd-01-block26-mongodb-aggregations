/*
Considerando todos os filmes que ganharam o Oscar
pelo menos uma vez, calcule o desvio padrão,
o maior valor, o menor valor
e a média da avaliações (campo imdb.rating).

*/


/*
use aggregations;

db.movies.aggregate([
  {
    $match: {
      'awards': {
        $regex: /Oscar/i
      }
    }
  },
  {
    $group: {
      '_id': null,
      'maior_rating': { $max: '$imdb.rating'},
      'menor_rating': { $min: '$imdb.rating'},
      'media_rating': { $avg: '$imdb.rating'},
      'desvio_padrao': { $stdDevPop: '$imdb.rating'},
    }
  },
  {
    $project: { '_id': 0 }
  }
]);
*/
