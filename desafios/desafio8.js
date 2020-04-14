
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
          '_id': '$_id',
          'titulo': '$title',
          'notaIMDB': '$imdb.rating',
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
            '_id': 1, 'titulo': '$title', 'notaMetacritic': '$metacritic'
          }
        }
      ],
      as: 'top10Metacritic'
    }
  },
  {
    $project: {
      '_id': 0,
      'top10IMDB': 1,
      'top10Metacritic': 1,
    }
  }
]);
*/


