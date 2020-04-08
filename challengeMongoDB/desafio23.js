use aggregations;
// db.trips.aggregate([
//   {
//     $set:
//     {
//       diferencaSegundos: { $subtract: ['$stopTime', '$startTime'] },
//     }
//   },
//   {
//     $group: { _id: '$bikeid', duracaoMediaEmSegundos: { $avg: '$diferencaSegundos' } }
//   },
//   {
//     $project: {
//       _id: 0, bikeId: '$_id', duracaoMedia: { $ceil: { $divide: ['$duracaoMediaEmSegundos', 1000] } }
//     }
//   },
//   { $sort: { duracaoMedia: -1 } },
//   { $limit: 5 }
// ]);

// bikeid, stopTime
