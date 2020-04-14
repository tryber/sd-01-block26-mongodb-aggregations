
/*
use aggregations;

db.trips.aggregate([
  {
    $match: {
      'birthYear': {
        $ne: '',
        $exists: 1,
      },
    }
  },
  {
    $project: {
      '_id': 0,
      'age': {
        $subtract: [{ $year: '$$NOW' }, { $toInt: '$birthYear' }]
      }
    }
  },
  {
    $bucketAuto: {
      groupBy: '$age',
      buckets: 5,
      output: {
        'count': {
          $sum: 1
        }
      }
    }
  },
],
{ allowDiskUse: true });

*/



