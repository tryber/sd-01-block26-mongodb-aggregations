use aggregations;
db.trips.aggregate([
  {
    $set:
    {
      diferencaSegundos: { $subtract: ['$stopTime', '$startTime'] },
    }
  },
  {
    $group: { 
      _id: '$bikeid',
      ultimaViagem: { $last: '$stopTime'},
      duracaoMediaEmSegundos: { $avg: '$diferencaSegundos' } 
    }
  },
  { $sort: { duracaoMediaEmSegundos: -1 } },
  { $limit: 5 },
  {
    $project: {
      _id: 0, bikeId: '$_id',
      ultimaViagem: 1,
    }
  }
]).pretty();

ultimaLocalizacao: { $last: '$endStationLocation'},
ultimaEstacao: { $last: '$endStationName'},

ultimaLocalizacao: 1,
ultimaEstacao: 1
