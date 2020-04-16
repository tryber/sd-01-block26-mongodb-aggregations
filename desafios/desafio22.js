
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
      'stopTime': 1,
      'duracaoMedia': {
        $subtract: [
          { $minute: '$stopTime' },
          { $minute: '$startTime'}
        ]
      },
      'endStationLocation': 1,
      'endStationName': 1
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
  {
    $lookup: {
      from: 'trips',
      let: {
        'bikeid': '$bikeId'
      },
      pipeline: [
        {
          $match: {
              $expr: {
                $eq: ['$bikeid', '$$bikeid']
              }
          }
        },
        {
          $group: {
            '_id': null,
            'newest': {
              $max: '$stopTime'
            }
          }
        },
      ],
      as: 'bikes'
    },
  },
  {
    $project: {
      'bikeId': 1,
      'ultimaViagem': '$bikes.newest',
      'ultimaLocalizacao': {
        'localizacao': ['$endStationLocation'],
        'ultimaEstacao': ['$endStationName']
      },
    }
  }
]).pretty();
*/
