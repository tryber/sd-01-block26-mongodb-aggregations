use aggregations;
db.trips.aggregate([
  {
    $addFields: {
      hourAm: { $hour: '$startTime'},
      hourPm: { $hour: '$stopTime'}
    }
  },
  {
    $facet: {
      viagensManha: [
        {
          $match:
          {
            hourAm: { $in: [6, 7]} 
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
            hourPm: { $in: [18, 19]}
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
