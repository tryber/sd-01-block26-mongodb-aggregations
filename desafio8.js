use aggregations;
db.movies.aggregate([
  {
    $match: {
      "imdb.rating": { $gte: 0 },
      "metacritic": { $gte: 0 }
    }
  },
  {
    $facet: {
      "top10IMDB": [
        {
          $sort: { "imdb.rating": -1 }
        },
        {
          $limit: 10
        },
        {
          $project: {
            titulo: "$title",
            notaIMDB: "$imdb.rating"
          }
        }
      ],
      "top10Metacritic": [
        {
          $sort: { "metacritic": -1 }
        },
        {
          $limit: 10
        },
        {
          $project: {
            titulo: "$title",
            notaMetacritic: "$metacritic"
          }
        }
      ]
    }
  },
]).pretty();
