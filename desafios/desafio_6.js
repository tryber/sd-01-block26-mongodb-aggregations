use aggregations;
db.movies.aggregate([
  {
    $match:
    {
      awards: { $exists: true },
      awards: { $regex: /Won [1-9][0-9]? Oscar/ }
    }
  },
  {
    $addFields:
    {
      rating: '$imdb.rating'
    }
  },
  {
    $group:
    {
      _id: null,
      maior_rating: { $max: '$rating' },
      menor_rating: { $min: '$rating' },
      media_rating: { $avg: '$rating' },
      desvio_padrao: { $stdDevSamp: '$rating' }
    }
  },
  {
    $project: 
    {
      _id: 0,
      maior_rating: '$maior_rating',
      menor_rating: '$menor_rating',
      media_rating: '$media_rating',
      desvio_padrao: '$desvio_padrao'
    }
  }
]).pretty();
