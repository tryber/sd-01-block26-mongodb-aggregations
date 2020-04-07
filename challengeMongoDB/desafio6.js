db.movies.aggregate([
  { $match: { awards: { $exists: true }, awards: {$regex: /Won/} } },
  {
    $group: {
      _id: '$awards',
      maior_rating: {$max: '$imdb.rating'},
      menor_rating: {$min: '$imdb.rating'},
      media_rating: {$avg: '$imdb.rating'},
      desvio_padrao: {$stdDevPop: '$imdb.rating'}
    }
  }
]);

// Incompleto
