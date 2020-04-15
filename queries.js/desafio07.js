use aggregations;
db.movies.aggregate([
  {
    $match: {
      cast: { $exists: true },
      languages: { $in: ["English"] }
    }
  },
  {
    $unwind: "$cast"
  },
  {
    $group: {
      _id: "$cast",
      count: { $sum: 1 },
      averageIMDB: { $avg: "$imdb.rating" }
    }
  },
  {
    $project: {
      numMovies: "$count",
      IMDB: { $round: ["$averageIMDB", 1] }
    }
  }
]).pretty();
