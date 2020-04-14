
/*
use aggregations;

db.trips.aggregate([
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
      'total': 1,
    }
  }
]);
*/
