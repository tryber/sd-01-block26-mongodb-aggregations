use aggregations;
db.movies.aggregate([
  {
    $addFields: {
      firstWord: { $split: ['$title', ' '] }
    }
  },
  {
    $match: {
      "firstWord": { $size: 1 }
    }
  },
]).pretty();
