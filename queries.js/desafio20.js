use aggregations;
db.trips.aggregate([
  {
    $match: {
      startTime: {
        $gte: ISODate("2016-03-10T00:00:00Z"),
        $lte: ISODate("2016-03-10T23:59:59Z")
      }
    }
  },
  {
    $set: {
      segundos: { $subtract: ["$stopTime", "$startTime"] },
    }
  },
  {
    $group: {
      _id: null,
      duracaoMediaEmSegundos: { $avg: "$segundos" }
    }
  },
  {
    $project: {
      _id: 0, duracaoMediaEmMinutos: { $ceil: { $divide: ["$duracaoMediaEmSegundos", 60000] } }
    }
  }
]);
