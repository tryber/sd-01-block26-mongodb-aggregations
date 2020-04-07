//use aggregations;
db.movies.aggregate([
  {
    $match:
    {
      'imdb.rating': { $gte: 7 },
      genres: { $nin: ['Crime', 'Horror'] },
      $or: [{ rated: 'PG' }, { rated: 'G' }],
      $and: [{ languages: 'English' }, { languages: 'Spanish' }]
    }
  },
  {
    $project:
    {
      _id: 0,
      título: '$title',
      avaliado:'$rated',
      notaIMDB:'$imdb.rating',
      votosIMDB:'$imdb.votes',
      ano: '$year'
    }
  }
]).pretty();
