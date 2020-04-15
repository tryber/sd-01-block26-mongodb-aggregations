use aggregations;
db.trips.aggregate([
  {
    $addFields: {
      diaSemana: { $dayOfWeek: '$startTime' }
    }
  },
  {
    $group: { _id: { diaSemana: '$diaSemana', estacao: '$startStationName' }, total: { $sum: 1 } }
  },
  {
    $project: {
      nomeEstacao: '$_id.estacao', total: 1, _id: 0
    }
  },
  { $sort: { total: -1 } },
  { $limit: 1 }
]).pretty();
