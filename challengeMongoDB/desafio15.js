db.trips.aggregate([
  {
    $match: {birthYear: {$gte: 1990}}
  },
  {
    $set: {
      anoAtual: { $toDouble: { $year: '$$NOW' } },
      nascimento: { $toDouble: '$birthYear' }
    }
  }, 
  {
    $set: {
      idade: { $subtract: ['$anoAtual', '$nascimento'] }
    }
  },
  {
    $bucketAuto: {
      groupBy: '$nascimento',
      buckets: 5,
      output: {
        count: { $sum: 1 }
      }
    }
  }
]).pretty()

// Sem utilizar o $match, o código quebra
