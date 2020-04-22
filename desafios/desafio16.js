use aggregations;
db.trips.aggregate([
  {
    $addFields: {
      horaInicial: { $hour: "$startTime" },
      horaFinal: { $hour: "$stopTime" }
    }
  },
  {
    $facet: {
      viagensManha: [
        {
          $match: {
            horaInicial: {
              $gte: 6,
              $lte: 8
            }
          }
        },
        {
          $group: {
            _id: {
              estacaoId: "$startStationId",
              estacaoNome: "$startStationName"
            },
            total: { $sum: 1 }
          }
        },
        { $sort: { total: -1 } },
        { $limit: 5 }
      ],
      viagensNoite: [
        {
          $match: {
            horaFinal: {
              $gte: 18,
              $lte: 20
            }
          }
        },
        {
          $group: {
            _id: {
              estacaoId: "$startStationId",
              estacaoNome: "$startStationName"
            },
            total: { $sum: 1 }
          }
        },
        { $sort: { total: -1 } },
        { $limit: 5 }
      ]
    }
  }
]);
