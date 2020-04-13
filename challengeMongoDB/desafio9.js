use aggregations;
db.movies.aggregate([
  { $match: { 'imdb.rating': { $gte: 0 }, metacritic: { $gte: 0 } } },
  {
    $facet: {
      top10IMDB: [
        { $sort: { 'imdb.rating': -1 } },
        { $limit: 10 }
      ],
      top10Metacritic: [
        { $sort: { 'metacritic': -1 } },
        { $limit: 10 }
      ]
    }
  },
  {
    $project: { filmesEmComum: { $size: { $setIntersection: ['$top10IMDB', '$top10Metacritic'] } } }
  }
]).pretty();
