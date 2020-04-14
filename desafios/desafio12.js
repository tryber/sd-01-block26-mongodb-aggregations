/*
Encontre a lista de todos os destinos únicos possíveis,
com no máximo uma escala,
partindo dos aeroportos da Alemanha (Germany),
Espanha (Spain)
ou Canadá (Canada)
que fazem parte da parceria OneWorld.
Inclua o destino
e quais companhias aéreas atendem esse mesmo local.
*/


/*
  use aggregations;
*/


{
  $graphLookup: {
    from: "employees",
      startWith: "$reportsTo",
        connectFromField: "reportsTo",
          connectToField: "name",
            as: "reportingHierarchy"
  }
}

db.air_alliances.aggregate([
  {
    $match: {
      'name': 'OneWorld',
    }
  },
  {
    $lookup: {
      from: 'air_airlines',
      let: { airlines: '$airlines' },
      pipeline: [
        {
          $match: {
            $and: [
              {
                $expr: {
                  $in: ['$name', '$$airlines']
                }
              },
              {
                'country': {
                  $in: ['Germany', 'Spain', 'Canada']
                }
              }
            ]
          },
        }
      ],
      as: 'each_airline'
    }
  },
  {
    $graphLookup: {
      from: 'air_routes',
      startWith: '$each_airline.name',
      connectFromField: 'airline.name',
      connectToField: 'airline.name',
      as: 'destiny',
      maxDepth: 1
    }
  },
  {
    $project: { 'destiny': 1 }
  },
  {
    $match: {
      'destiny.stops': { $lte: 1}
    }
  },
  {
    $unwind: '$destiny'
  },
  {
    $group: {
      '_id': null,
      'counting': {
        $addToSet: '$destiny.dst_airport'
      }
    }
  },
  {
    $project: {
      'hey': {
        $size: '$counting'
      }
    }
  }
]).pretty()


db.air_alliances.aggregate([
  {
    $match: {
      'name': 'OneWorld',
    }
  },
  {
    $lookup: {
      from: 'air_airlines',
      let: { airlines: '$airlines' },
      pipeline: [
        {
          $match: {
            $and: [
              {
                $expr: {
                  $in: ['$name', '$$airlines']
                }
              },
              {
                'country': {
                  $in: ['Germany', 'Spain', 'Canada']
                }
              }
            ]
          },
        }
      ],
      as: 'each_airline'
    }
  },
  {
    $graphLookup: {
      from: 'air_routes',
      startWith: '$each_airline.name',
      connectFromField: 'airline.name',
      connectToField: 'airline.name',
      as: 'destiny',
      maxDepth: 1
    }
  },
  {
    $project: { 'destiny': 1 }
  },
]).pretty()
