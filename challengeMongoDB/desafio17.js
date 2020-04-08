db.trips.aggregate([
  {
    $facet: {
      viagensManha: [
        {$match: {}}

      ],
      viagensNoite: [
        
      ]
    }
  }
])

db.trips.aggregate([
  {$match: {8: {$hour: '$startTime'}}}
])

//incompleto
