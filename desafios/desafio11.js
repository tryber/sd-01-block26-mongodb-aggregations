// use aggregations;
db.air_alliances.aggregate([
  {
    $lookup: {
      from: "air_routes",
      localField: "airline.name",
      foreignField: "airlines",
      as: "rota"
    }
  },
  {$limit: 1}
]);

// {
//   $match: {
//     airplane: { $in: ["747", "380"] }
//   }
// }