use aggregations;
db.movies.aggregate([
  {
    $match: {
      "imdb.rating": { $gte: 0 },
      metacritic: { $gte: 0 } }
  },
  {
    $facet: {
      top10IMDB: [
        { $sort: { "imdb.rating": -1 } },
        { $limit: 10 }
      ],
      top10Metacritic: [
        { $sort: { "metacritic": -1 } },
        { $limit: 10 }
      ]
    }
  },
  {
    $group: {
      _id: {
        $setIntersection: ["$top10IMDB", "$top10Metacritic"] },
        filmesEmComum: { $sum: 1 } 
    }
  }, 
  {
    $project: {
      _id: 0,
      nome: "$_id.title",
      anoLancamento: "$_id.year",
      notaImdb: "$_id.imdb.rating",
      notaMetacritic: "$_id.metacritic"
    }
  }
]).pretty();
