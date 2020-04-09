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
        { $limit: 10 }],
      'top10Metacritic': [
        { $sort: { metacritic: -1 } },
        { $limit: 10 }]
    }
  },
  {
    $group: {
      _id: { $setIntersection: ['$top10IMDB', '$top10Metacritic'] },
      filmesEmComum: { $sum: 1 }
    }
  },
  { $project: { _id: 0, filmesEmComum: '$filmesEmComum' } }
]).pretty();
