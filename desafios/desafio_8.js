// use aggregations;
db.movies.aggregate([
  {
    $match:
    {
      'imdb.rating': { $exists: true, $gt: 0 },
      metacritic: { $exists: true, $gt: 0 },
    }
  },
  {
    $facet: {
      'top10IMDB': [
        { $sort: { 'imdb.rating': -1 } },
        {
          $project: {
            _id: 1,
            titulo: '$title',
            notaIMDB: '$imdb.rating'
          }
        },

        { $limit: 10 }],
      'top10Metacritic': [
        { $sort: { metacritic: -1 } },
        {
          $project: {
            _id: 1,
            titulo: '$title',
            notaMetacritic: '$metacritic'
          }
        },
        { $limit: 10 }]
    }
  },
]).pretty();
