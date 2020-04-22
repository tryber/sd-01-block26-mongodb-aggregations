use aggregations;
db.movies.aggregate([
  {
    $addFields: {
      numberOf: { $size: { $split: ["$title", " "] } }
    }
  },
  {
    $match: {
      numberOf: 1
    }
  }
]);
