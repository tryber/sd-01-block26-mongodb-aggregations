db.trips.aggregate([
  {
    $set: {
      dayOfWeek: { $dayOfWeek: '$startTime' }
    }
  },
  {
    $group: { _id: {diaSemana: '$dayOfWeek', estacao: '$startStationName'}, total: { $sum: 1 } }
  },
  {
    $project: {
      total: 1, nomeEstacao: '$_id.estacao', _id: 0
    }
  },
  { $sort: { total: -1 } },
  { $limit: 1 }
]);
