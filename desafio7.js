use aggregations;
db.movies.aggregate([
  {
    $match:{
      "languages": { $all: ["English"]}
    }
  },
  {
    $unwind:"$cast"
  },
  {
    $group:{
      _id:"$cast",
      numeroFilmes:{
        $sum: 1,
      },
      mediaIMDB:{
        $avg:"$imdb.rating"
      }
    }
  },
  {
    $count:'count'
  }
]).pretty();

