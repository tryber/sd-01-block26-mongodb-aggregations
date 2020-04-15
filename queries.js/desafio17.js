use aggregations;
db.trips.aggregate([
  {
    $set: {
      media: {
        $divide: [{
          $subtract: ["$stopTime", "$startTime"]
        },
        60 * 60000
        ]
      }
    }
  },
  {
    $group: {
      _id: "$usertype",
      duracaoMedia: { $avg: "$media" }
    }
  },
  {
    $project: {
      _id: 0,
      tipo: "$_id",
      duracaoMedia: { $trunc: ["$duracaoMedia", 2] }
    }
  }
]);
