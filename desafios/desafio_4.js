// use aggregations;
db.movies.aggregate([
  {
    $addFields:
    {
      quantidade: { $size: { $split: ['$title', ' '] } }
    },

  },
  {
    $match: { quantidade: 1 }
  },
  {
    $project:
    {
      _id: 0,
      título: '$title',
      avaliado: '$rated',
      notaIMDB: '$imdb.rating',
      votosIMDB: '$imdb.votes',
      ano: '$year'
    }
  }
]).pretty();
