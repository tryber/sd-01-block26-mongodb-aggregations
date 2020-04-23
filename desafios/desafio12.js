
/*
use aggregations;

db.trips.aggregate([
  {
    $addFields: {
      'tempoViagem': {
        $subtract: ['$stopTime', '$startTime']
      }
    }
  },
  {
    $facet: {
      'maiorViagem': [
        {
          $sort: {
            'tempoViagem': -1
          }
        },
        {
          $limit: 1
        },
        {
          $unset: 'tempoViagem'
        },
      ],
      'menorViagem': [
        {
          $sort: {
            'tempoViagem': 1
          }
        },
        {
          $limit: 1
        },
        {
          $unset: 'tempoViagem'
        },
      ]
    }
  }
]).pretty();
*/
