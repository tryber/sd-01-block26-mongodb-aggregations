// use aggregations;
db.air_alliances.aggregate([
  { $unwind: "$airlines" },
  {
    $lookup: {
      from: "air_routes",
      localField: "airlines",
      foreignField: "airline.name",
      as: "rotas"
    }
  },
  { $unwind: "$rotas" },
  { $match: { "rotas.airplane": { $in: ["747", "380"] } } },
  {
    $group: {
      _id: "$rotas.airline.name",
      totalRotas: { $sum: 1 }
    }
  },
  { $sort: { totalRotas: -1 } },
  { $limit: 1 }
]);
