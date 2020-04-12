use aggregations;
db.trips.aggregate([
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
  allowDiskUse:true,
  cursor:{}
 }).pretty();
 // allowDiskUse:true achei isso no stack, mas não sei porque resolveu.
 // Era erro na quantidade de memoria alocada.
 