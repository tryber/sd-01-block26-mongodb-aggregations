use aggregations;
db.trips.aggregate([
  {
    $match: {
      birthYear: { $exists: true },
      birthYear: { $ne: "" },
    }
  },
  {
    $project:{
      birthYear:1
    }
  },
  {
    $addFields: {
      age: {
        $subtract: [{ $year: "$$NOW" }, { $toInt: "$birthYear" }]
      }
    }
  },
  {
    $bucketAuto:{
      groupBy: "$age",
      buckets: 5,
    }
  }
],{allowDiskUse: true}).pretty()
