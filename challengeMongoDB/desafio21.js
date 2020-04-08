db.trips.aggregate([
  {$match: {startTime: {$gte: ISODate('2016-03-10T00:00:00Z'), $lte: ISODate('2016-03-10T23:59:59Z') }}},
  {
    $set: 
    { 
      diferencaSegundos: {$subtract: ['$stopTime', '$startTime']},
      viagens: 2016
    }
  },
  {
    $group: {_id: '$viagens', duracaoMediaEmSegundos: {$avg: '$diferencaSegundos'}}
  },
  {
    $project: {
      _id: 0, duracaoMediaEmMinutos: {$ceil: {$divide: ['$duracaoMediaEmSegundos', 1000]}}
    }
  }
]);

//conferir valores 1061 minutos
