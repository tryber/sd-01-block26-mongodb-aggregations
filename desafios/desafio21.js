
/*
use aggregations;

db.trips.aggregate([
  {
    $match: {
      $expr: {
        $eq: [{ $year: '$startTime'}, 2016],
        $eq: [{ $month: '$startTime'}, 3],
        $eq: [{ $dayOfMonth: '$startTime'}, 10]
      }
    }
  },
  {
    $project: {
      '_id': 0,
      'duration': {
        $subtract: [
          { $minute: '$stopTime' },
          { $minute: '$startTime'}
        ]
      },
    }
  },
  {
    $group: {
      '_id': null,
      duracaoMediaEmMinutos: {
        $avg: '$duration'
      }
    }
  },
  {
    $project: {
      '_id': 0,
      'duracaoMediaEmMinutos': {
        $ceil: '$duracaoMediaEmMinutos'
      },
    }
  }
]);
*/
