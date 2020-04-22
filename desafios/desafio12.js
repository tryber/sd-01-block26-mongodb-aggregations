use aggregations;
db.trips.aggregate([
  {
    $set: {
      time: { $subtract: ["$stopTime", "$startTime"] }
    }
  },
  {
    $facet: {
      maiorViagem: [
        {
          $sort: {
            time: -1
          }
        },
        { $limit: 1 }
      ],
      menorViagem: [
        {
          $sort: {
            time: 1
          }
        },
        { $limit: 1 }
      ]
    }
  }
]);
