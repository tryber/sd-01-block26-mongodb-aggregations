
/*
use aggregations;

db.air_alliances.aggregate([
  {
    $lookup: {
      from: 'air_routes',
      let: { airlines: '$airlines' },
      pipeline: [
        {
          $match: {
            $and: [
              {
                $expr: {
                  $in: ['$airline.name', '$$airlines']
                }
              },
              {
                'airplane': { $in: ['747', '380'] }
              }
            ]

          }
        }
      ],
      as: 'match_airlines'
    },
  },
  {
    $project: {
      '_id': "$name", 'totalRotas': { $size: '$match_airlines' }
    }
  },
  {
    $sort: {
      'totalRotas':-1
    }
  },
  {
    $limit: 1
  },
]).pretty();
*/




