
/*
use aggregations;

db.trips.aggregate([
  {
    $lookup: {
      from: 'trips',
      pipeline: [
        {
          $project: {
            '_id': 0,
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
        },
        {
          $project: {
            '_id': 0,
            'diaDaSemana': '$_id',
          }
        }
      ],
      as: 'weekday'
    }
  },
  {
    $unwind: '$weekday'
  },
  {
    $match: {
      $expr: {
        $eq: [{ $dayOfWeek: '$startTime' }, '$weekday.diaDaSemana']
      }
    }
  },
  {
    $group: {
      '_id': { 'name': '$startStationName' },
      'total': { $sum: 1 }
    }
  },
  {
    $sort: { total: -1 }
  },
  {
    $limit: 1
  },
  {
    $project: {
      '_id': 0,
      'nomeEstacao': '$_id.name',
      'total': 1,
    }
  }
]).pretty();
*/
