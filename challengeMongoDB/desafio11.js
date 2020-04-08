db.air_alliances.aggregate([
  { $unwind: '$airlines' },
  {
    $lookup: {
      from: 'air_routes',
      localField: 'airlines',
      foreignField: 'airline.name',
      as: 'avioes'
    }
  },
  { $unwind: '$avioes' },
  {
    $match: { 'avioes.airplane': { $in: ['380', 747] } }
  },
  {
    $group: {
      _id: '$avioes.airline.name', totalRotas: { $sum: 1 }
    }
  },
  { $sort: { total: -1 } },
  { $limit: 1 }
]);
