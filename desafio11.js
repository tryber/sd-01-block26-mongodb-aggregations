use aggregations;
db.air_alliances.aggregate([
  {
    $unwind: "$airlines"
  },
  {
    $lookup: {
      from: "air_routes",
      let: { air_line: "$airlines" },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$airline.name", "$$air_line"],
            },
            airplane: { $in: ['380', '747'] },
          }
        }
      ],
      as: "airlinesComplete"
    },
  },
  {
    $addFields: {
      qtdAirlines: {
        $size: "$airlinesComplete"
      }
    },
  },
  {
    $group: {
      _id: "$airlines",
      totalRotas: {
        $sum: "$qtdAirlines"
      }
    }
  },
  { $sort: { totalRotas: -1 } },
  { $limit: 1 },
]).pretty();

//Duvida se era para agrupar pelas as rotas ou pela a empresa.

use aggregations;
db.air_alliances.aggregate([
  {
    $unwind: "$airlines"
  },
  {
    $lookup: {
      from: "air_routes",
      let: { air_line: "$airlines" },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$airline.name", "$$air_line"],
            },
            airplane: { $in: ['380', '747'] },
          }
        }
      ],
      as: "airlinesComplete"
    },
  },
  {
    $addFields: {
      qtdAirlines: {
        $size: "$airlinesComplete"
      }
    },
  },
  {
    $group: {
      _id: "$name",
      totalRotas: {
        $sum: "$qtdAirlines"
      }
    }
  },
  { $sort: { totalRotas: -1 } },
  { $limit: 1 },
]).pretty();
