db.trips.aggregate([
  {
    $set: {
      anoAtual: { $toInt: { $year: new Date() } } // '$$NOW'
    }
  }, //tranformar number long em ano 
  {
    $set: {
      idade: { $subtract: ['$anoAtual', '$birthYear'] }
    }
  },
  {
    $bucketAuto: {
      groupBy: '$birthYear',
      buckets: 5,
      output: {
        count: { $sum: 1 }
      }
    }
  }
]).pretty()

// codigo quebrado
