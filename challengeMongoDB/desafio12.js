use aggregations;
db.trips.aggregate([
  {
    $facet: {
      maiorViagem: [
        { $set: { viagem: { $subtract: ['$stopTime', '$startTime'] } } },
        { $sort: {viagem: -1 } },
        { $limit: 1 }
      ],
      menorViagem: [
        { $set: { viagem: { $subtract: ['$stopTime', '$startTime'] } } },
        { $sort: {viagem: 1 } },
        { $limit: 1 }
      ]
    }
  }
]).pretty();
