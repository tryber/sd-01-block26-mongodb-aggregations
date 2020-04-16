
/*
use aggregations;

db.trips.aggregate([
  {
    $project: {
      '_id': 0,
      'usertype': 1,
      'duration': {
        $subtract: [
          { $hour: '$stopTime' },
          { $hour: '$startTime'}
        ]
      }
    }
  },
  {
    $group: {
      '_id': '$usertype',
      'duracaoMedia': {
        $avg: '$duration'
      },
    }
  },
  {
    $project: {
      '_id': 0,
      'tipo': '$_id',
      'duracaoMedia': {
        $round: [
          '$duracaoMedia', 2
        ]
      }
    }
  }
]);
*/
