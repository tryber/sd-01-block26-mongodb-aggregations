use aggregations;
db.trips.aggregate([
  {
    $set:
    {
      diferencaSegundos: { $subtract: ['$stopTime', '$startTime'] },
    }
  },
  { $sort: { bikeid: 1, stopTime: 1, endStationLocation: 1, endStationName: 1, } },
  {
    $group: {
      _id: '$bikeid',
      ultimaViagem: { $last: '$stopTime' },
      ultimaLocalizacao: { $last: '$endStationLocation' },
      ultimaEstacao: { $last: '$endStationName' },
      duracaoMediaEmSegundos: { $avg: '$diferencaSegundos' }
    }
  },
  { $sort: { duracaoMediaEmSegundos: -1 } },
  { $limit: 5 },
  {
    $project: {
      _id: 0,
      bikeId: '$_id',
      ultimaViagem: 1,
      ultimaLocalizacao: 1,
      ultimaEstacao: 1
    }
  }
]).pretty();
