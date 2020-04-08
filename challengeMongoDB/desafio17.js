db.trips.aggregate([
  {
    $set: {
      hourStart: { $hour: '$startTime'},
      hourStop: { $hour: '$stopTime'}
    }
  },
  {
    $facet: {
      viagensManha: [
        {
          $match:
          {
            hourStart: { $in: [6, 7]} // 8
          }
        },
        {
          $group: {
            _id: { estacaoId: '$startStationId', estacaoNome: '$startStationName' }, total: { $sum: 1 }
          }
        },
        { $sort: { total: -1 } },
        { $limit: 5 }
      ],
      viagensNoite: [
        {
          $match:
          {
            hourStop: { $in: [18, 19]} // 20
          }
        },
        {
          $group: {
            _id: { estacaoId: '$endStationId', estacaoNome: '$endStationName' }, total: { $sum: 1 }
          }
        },
        { $sort: { total: -1 } },
        { $limit: 5 }
      ]
    }
  }
]).pretty();

//Conferir resultado
