use aggregations;
db.trips.aggregate([
  {
    $match: {
      birthYear: {
        $exists: true,
        $ne: ""
      }
    }
  },
  {
    $set: {
      idade: {
        $floor: {
          $subtract: [{ $year: "$$NOW" }, { $toInt: "$birthYear" }]
        }
      }
    }
  },
  {
    $bucketAuto: {
      groupBy: "$idade",
      buckets: 5,
    }
  },
]);
