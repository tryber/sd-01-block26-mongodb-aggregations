use aggregations;
db.movies.aggregate([
  {
    $match: {
      languages: { $in: ["English"] }
    }
  },
  { $unwind: "$cast" },
  {
    $group: {
      _id: "$cast",
      numeroFilmes: { $sum: 1 },
      media1IMDB: { $avg: "$imdb.rating" }
    }
  },
  {
    $project: {
      _id: 1,
      numeroFilmes: 1,
      mediaIMDB: { $round: ["$media1IMDB", 1] }
    }
  }
]);
