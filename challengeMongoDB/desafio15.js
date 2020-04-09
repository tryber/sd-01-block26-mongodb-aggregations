use aggregations;
db.trips.aggregate([
  {
    $match: { birthYear: { $exists: true, $ne: '' } }
  },
  {
    $set: {
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
]).pretty();

// Sem utilizar o $match, o código quebra
