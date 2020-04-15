use aggregations;
db.movies.aggregate([
  {
    $match: {
      awards: { $exists: true },
      awards: { $regex: /Won [1-20] Oscar/ }
    }
  },
  {
    $addFields: {
      ratingMovie: '$imdb.rating'
    }
  },
  {
    $group: {
      _id: null,
      maior_rating: { $max: '$ratingMovie' },
      menor_rating: { $min: '$ratingMovie' },
      media_rating: { $avg: '$ratingMovie' },
      desvio_padrao: { $stdDevSamp: '$ratingMovie' }
    }
  },
  {
    $project: {
      _id: 0,
      maior_rating: '$maior_rating',
      menor_rating: '$menor_rating',
      media_rating: '$media_rating',
      desvio_padrao: '$desvio_padrao'
    }
  }
]).pretty();
