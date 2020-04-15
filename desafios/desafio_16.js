use aggregations;
db.trips.aggregate([
  {
    $addFields: {
      horaInicial: { $hour: '$startTime'},
      horaFinal: { $hour: '$stopTime'}
    }
  },
  {
    $facet: {
      viagensManha: [
        {
          $match:
          {
            horaInicial: { $in: [6, 7]} 
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
            horaFinal: { $in: [18, 19]}
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
