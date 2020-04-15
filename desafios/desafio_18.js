use aggregations;
db.trips.aggregate([
  {
    $addFields: {
      diaSemana: { $dayOfWeek: '$startTime' }
    }
  },
  {
    $group: { _id: '$diaSemana', total: { $sum: 1 } }
  },
  {
    $project: {
      total: 1, diaDaSemana: '$_id', _id: 0
    }
  },
  { $sort: { total: -1 } },
  { $limit: 1 }
]).pretty();
