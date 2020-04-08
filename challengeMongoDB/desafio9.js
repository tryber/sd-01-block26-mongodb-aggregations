db.movies.aggregate([
  { $match: { 'imdb.rating': { $gte: 0 }, metacritic: { $gte: 0 } } },
  {
    $facet: {
      top10IMDB: [
        { $project: { titulo: '$title', notaIMDB: '$imdb.rating' } },
        { $sort: { notaIMDB: -1 } },
        { $limit: 10 }
      ],
      top10Metacritic: [
        { $project: { titulo: '$title', notaMetacritic: '$metacritic' } },
        { $sort: { notaMetacritic: -1 } },
        { $limit: 10 }
      ]
    }
  },
]).pretty();

// {$unwind: '$top10IMDB'},
// {$unwind: '$top10Metacritic'},
// {
//   $group: {
//     _id: {top10IMDB: '$top10IMDB.title', top10Metacritic: '$top10Metacritic'}, total: {$sum: 1}
//   }
// }

// {
//   $lookup: {
//     from: 'movies',
//     localField: 'top10IMDB',
//     foreignField: 'top10Metacritic',
//     as: 'intersection'
//   }
// },

//incompleto
