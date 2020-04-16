use aggregations;
db.trips.aggregate([
  {
    $addFields: {
      minutes: {
        $divide: [
          { $subtract: ["$stopTime", "$startTime"] },
          60000
        ]
      }
    }
  },
  {
    $group: {
      _id: "$bikeid",
      duracaoMedia: {
        $avg: "$minutes"
      }
    }
  },
  {
    $sort: { "duracaoMedia": -1 }
  },
  {
    $limit: 5
  },
  {
    $project: {
      _id: 0,
      bikeid: "$_id",
      duracaoMedia: { $ceil: "$duracaoMedia" }
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
