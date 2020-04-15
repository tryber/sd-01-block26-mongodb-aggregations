use aggregations;
db.trips.aggregate(
  [
    {
      $match: { birthYear: { $exists: true, $ne: '' } }
    },
    {
      $addFields: {
        idade: { $subtract: [{ $year: '$$NOW' }, { $toInt: '$birthYear' }] }
      }
    },
    {
      $bucketAuto: {
        groupBy: '$idade',
        buckets: 5,
        output: {
          count: { $sum: 1 }
        }
      }
    }
  ],
  {
    allowDiskUse: true,
    cursor: {}
  }
).pretty();
