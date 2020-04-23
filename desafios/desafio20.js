
/*
use aggregations;

db.trips.aggregate([
 { 
    $match: {
      startTime: { 
        $gte: ISODate('2016-03-10T00:00:00Z'), 
        $lte: ISODate('2016-03-10T23:59:59Z') 
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
