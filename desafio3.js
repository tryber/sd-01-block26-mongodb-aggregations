use aggregations;
db.movies.aggregate([
  {
    $match: {
      $and: [
        {
          "imdb.rating": { $gte: 7 }
        },
        {
          "genres": { $nin: ["Crime", "Horror"] }
        },
        {
          $or: [
            { "rated": "PG" },
            { "rated": "G" }
          ]
        },
        {
          "languages": { $all: ["English", "Spanish"] }
        },
      ]
    }
  },
  {
    $project:{
      _id:0,
      titulo:"$title",
      avaliado:"$rated",
      notaIMDB:"$imdb.rating",
      votosIMDB:"$imdb.votes",
      ano:"$year"
    }
  },
  {
    $sort:{
      ano:-1,
      notaIMDB:-1,
      title:1
    }
  }
]).pretty();
//title, rated, imdb.rating, imbd.votes e year

//titulo, avaliado, notaIMDB, votosIMDB e ano
