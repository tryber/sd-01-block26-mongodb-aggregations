
/*
use aggregations;

db.movies.aggregate([
  { $match: { 'imdb.rating': { $gte: 0 }, metacritic: { $gte: 0 } } },
  {
    $facet: {
      top10IMDB: [
        { $project: { titulo: '$title', notaIMDB: '$imdb.rating' } },
        { $sort: { notaIMDB: -1 } },
        { $limit: 10 }
      ],
      top10Metacritic: [
        { $project: { titulo: '$title', notaMetacritic: '$metacritic' } },
        { $sort: { notaMetacritic: -1 } },
        { $limit: 10 }
      ]
    }
  }
]);
*/
