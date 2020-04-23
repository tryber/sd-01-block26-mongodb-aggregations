
/*
use aggregations;

db.movies.aggregate([
  {
    $match: {
      'imdb.rating': { $gt: 0 },
      'metacritic': { $gt: 0 }
    }
  },
  {
    $sort: {
      'imdb.rating': -1,
    }
  },
  {
    $limit: 10,
  },
  {
    $group: {
      '_id': null,
      'top10IMDB': {
        $push: {
          'nome': '$title',
          'anoLancamento': '$year',
          'notaImdb': '$imdb.rating',
          'notaMetacritic': '$metacritic',
        }
      }
    }
  },
  {
    $lookup: {
      from: 'movies',
      pipeline: [
        {
          $match: {
            'imdb.rating': { $gt: 0 },
            'metacritic': { $gt: 0 }
          }
        },
        {
          $sort: {
            'metacritic': -1
          },
        },
        {
          $limit: 10,
        },
        {
          $project: {
            '_id': 0,
            'nome': '$title',
            'anoLancamento': '$year',
            'notaImdb': '$imdb.rating',
            'notaMetacritic': '$metacritic',
          }
        }
      ],
      as: 'top10Metacritic'
    }
  },
  {
    $addFields: {
      'filmesEmComum': {
        $setIntersection: ['$top10IMDB', '$top10Metacritic']
      },
    }
  },
  {
    $project: {
      'filmesEmComum': 1, '_id': 0,
    }
  },
]);
*/
