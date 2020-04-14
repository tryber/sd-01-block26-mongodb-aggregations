
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
      'bikeId': '$bikeid',
      'duracaoMedia': {
        $subtract: [
          { $minute: '$stopTime' },
          { $minute: '$startTime'}
        ]
      },
    }
  },
  {
    $sort: {
      'duracaoMedia': -1
    }
  },
  {
    $limit: 5,
  },
]);
*/
