
/*
  use aggregations;
*/


db.trips.aggregate([
  {
    $project: {
      '_id': 0,
      'startStationName': 1,
      'dia': {
        $dayOfWeek: '$startTime'
      }
    }
  },
  {
    $lookup: {
      from: 'trips',
      pipeline: [
        {
          $project: {
            'dia': {
              $dayOfWeek: '$startTime'
            }
          }
        },
        {
          $group: {
            '_id': '$dia',
            'total': {
              $sum: 1
            }
          }
        },
        {
          $sort: {
            'total': -1
          }
        },
        {
          $limit: 1
        }
      ],
      as: 'high_day'
    },
  },

]).pretty()



use aggregations;
db.trips.aggregate([
  {
    $set: {
      dayOfWeek: { $dayOfWeek: '$startTime' }
    }
  },
  {
    $group: { _id: {diaSemana: '$dayOfWeek', estacao: '$startStationName'}, total: { $sum: 1 } }
  },
  {
    $project: {
      total: 1, nomeEstacao: '$_id.estacao', _id: 1,
    }
  },
  { $sort: { total: -1 } },
  { $limit: 1 }
]);
