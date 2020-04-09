use aggregations;
db.movies.aggregate([
{ $match: { awards: { $exists: true }, awards: {$regex: /Won.*Oscar/} } },
  {
    $set: { ganhouOscar: 1}
  },
  {
    $group: {
      _id: null,
      maior_rating: {$max: '$imdb.rating'},
      menor_rating: {$min: '$imdb.rating'},
      media_rating: {$avg: '$imdb.rating'},
      desvio_padrao: {$stdDevSamp: '$imdb.rating'}
    }
  },
  {
    $project: {
      _id: 0, maior_rating: 1, menor_rating: 1, media_rating: 1, desvio_padrao: 1
    }
  }
]).pretty();