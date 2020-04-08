db.trips.aggregate([
  { $match: { birthYear: { $gt: 0 } } },
  {
    $facet: {
      maiorAno: [
        { $sort: { birthYear: -1 } },
        { $limit: 1 },
      ],
      menorAno: [
        { $sort: { birthYear: 1 } },
        { $limit: 1 },
      ]
    }
  },
  {
    $project: {
      _id: 0,
      maiorAnoNascimento: '$maiorAno.birthYear',
      menorAnoNascimento: '$menorAno.birthYear'
    }
  },
  { $unwind: '$maiorAnoNascimento' },
  { $unwind: '$menorAnoNascimento' }
]);
