
/*
use aggregations;

db.trips.aggregate([
  {
    $project: {
      '_id':0,
      'startStationId': 1,
      'startStationName': 1,
      'endStationId': 1,
      'endStationName': 1,
      'inicioViagens': {
        $hour: '$startTime'
      },
      'fimViagens': {
        $hour: '$stopTime'
      }
    }
  },
  {
    $facet: {
      'viagensManha': [
        {
          $match: {
            'inicioViagens': {
              $gte: 6, $lte: 8
            }
          }
        },
        {
          $group: {
            '_id': {
              'estacaoId': '$startStationId',
              'estacaoNome': '$startStationName'
            },
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
          $limit: 5
        }
      ],
      'viagensNoite': [
        {
          $match: {
            'fimViagens': {
              $gte: 18, $lte: 20
            }
          }
        },
        {
          $group: {
            '_id': {
              'estacaoId': '$endStationId',
              'estacaoNome': '$endStationName'
            },
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
        $limit: 5
      }
      ]
    }
  }
]).pretty();
*/



