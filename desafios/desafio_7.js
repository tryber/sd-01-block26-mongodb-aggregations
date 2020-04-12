use aggregations;
db.movies.aggregate([
  {
    $match:
    {
      cast: { $exists: true },
      languages: { $in: ['English'] }
    }
  },
  { $unwind: '$cast' },
  {
    $group: {
      _id: '$cast',
      count: { $sum: 1 },
      mediaOfIMDB: { $avg: '$imdb.rating' }
    }
  },
  {
    $project: {
      numeroFilmes: '$count',
      mediaIMDB: { $round: ['$mediaOfIMDB', 1] }
    }
  }
]).pretty();
