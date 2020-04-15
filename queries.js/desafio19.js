use aggregations;
db.trips.aggregate([
  {
    $addFields: {
      dia: { $dayOfWeek: "$startTime" }
    }
  },
  {
    $group: {
      _id: {
        dia: "$dia",
        estacao: "$startStationName"
      },
      total: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      nomeEstacao: "$_id.estacao",
      total: 1
    }
  },
  {
    $sort: { total: -1 }
  },
  { $limit: 1 }
]).pretty();
