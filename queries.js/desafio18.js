use aggregations;
db.trips.aggregate([
  {
    $set: {
      dayOfWeek: { $dayOfWeek: "$startTime" }
    }
  },
  {
    $group: {
      _id: "$dayOfWeek",
      total: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      total: 1,
      diaDaSemana: "$_id"
    }
  },
  {
    $sort: { total: -1 }
  },
  { $limit: 1 }
]);
