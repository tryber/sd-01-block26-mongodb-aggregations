use aggregations;
db.trips.aggregate([
  {
    $set: {
      dayOfWeek: { $dayOfWeek: '$startTime' }
    }
  },
  {
    $group: { _id: '$dayOfWeek', total: { $sum: 1 } }
  },
  {
    $project: {
      total: 1, diaDaSemana: '$_id', _id: 0
    }
  },
  { $sort: { total: -1 } },
  { $limit: 1 }
]);
