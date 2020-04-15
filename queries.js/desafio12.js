use aggregations;
db.trips.aggregate([
  {
    $set: {
      tempo: { $subtract: ['$stopTime', '$startTime'] }
    }
  },
  {
    $facet: {
      maiorViagem: [
        {
          $sort: { tempo: -1 }
        },
        { $limit: 1 }
      ],
      menorViagem: [
        {
          $sort: { tempo: 1 }
        },
        { $limit: 1 }
      ]
    }
  }
]).pretty();
