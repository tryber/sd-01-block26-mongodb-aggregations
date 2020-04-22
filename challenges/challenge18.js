use aggregations;
db.trips.aggregate([
  {
    $addFields: {
      dayWeek: { $dayOfWeek: '$startTime' }
    }
  },
  {
    $group: { _id: '$dayWeek', total: { $sum: 1 } }
  },
  {
    $project: {
      total: 1, diaDaSemana: '$_id', _id: 0
    }
  },
  { $sort: { total: -1 } },
  { $limit: 1 }
]).pretty();
