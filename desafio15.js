use aggregations;
db.trips.aggregate([
  {
    $facet: {
      usuariosPorGenero: [
        {
          $group: {
            _id: "$gender",
            total: { $sum: 1 }
          }
        }
      ],
      usuariosPorTipo: [
        {
          $group: {
            _id: "$usertype",
            total: { $sum: 1 }
          }
        }
      ],
      estacaoInicio: [
        {
          $group: {
            _id: {
              estacaoId: "$startStationId",
              estacaoNome: "$startStationName",
            },
            total: { $sum: 1 }
          }
        }
      ],
      estacaoFim: [
        {
          $group: {
            _id: {
              estacaoId: "$endStationId",
              estacaoNome: "$endStationName",
            },
            total: { $sum: 1 }
          }
        }
      ]
    }
  }
]).pretty()


// {
// 	"_id" : ObjectId("572bb8222b288919b68abf5a"),
// 	"bikeid" : 17827,
// 	"usertype" : "Subscriber",
// 	"gender" : 1,
// 	"birthYear" : 1969,
// 	"endStationId" : 498,
// 	"endStationLocation" : {
// 		"type" : "Point",
// 		"coordinates" : [
// 			-73.98808416,
// 			40.74854862
// 		]
// 	},
// 	"endStationName" : "Broadway & W 32 St",
// 	"startStationId" : 476,
// 	"startStationLocation" : {
// 		"type" : "Point",
// 		"coordinates" : [
// 			-73.97966069,
// 			40.74394314
// 		]
// 	},
// 	"startStationName" : "E 31 St & 3 Ave",
// 	"startTime" : ISODate("2016-01-01T00:00:45Z"),
// 	"stopTime" : ISODate("2016-01-01T00:07:04Z")
// }
