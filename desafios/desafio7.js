/*
 Queremos contar quantos filmes
 cada um dos atores e atrizes do elenco (cast)
 já participou e obter uma média do campo imdb.rating
 para cada um desses atores e atrizes.

Traga o nome do ator ou atriz,
número de filmes em que participou
e a média do imdb desses filmes com apenas uma casa decimal.
Considere somente os membros do elenco de filmes com o idioma inglês (English).

*/


/*
use aggregations;

db.movies.aggregate([
  {
    $match: {
      'languages': { $all: ['English'] }
    }
  },
  {
    $unwind: '$cast'
  },
  {
    $group: {
      '_id': '$cast',
      'numeroFilmes': { $sum: 1 },
      'mediaIMDB': { $avg: '$imdb.rating' }
    }
  },
  {
    $project: {
      'numeroFilmes': 1,
      'mediaIMDB': {
        $round: ['$mediaIMDB', 1]
      }
    }
  }
]);
*/
