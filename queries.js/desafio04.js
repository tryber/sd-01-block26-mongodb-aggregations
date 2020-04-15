use aggregations;
db.movies.aggregate([
  {
    $set: {
      titulo: {
        $size: {
          $split: ["$title", " "]
        }
      }
    }
  },
  { $match: { titulo: 1 } },
  { $project: { _id: 0, title: 1 } },
]);
