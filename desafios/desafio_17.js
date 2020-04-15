  
use aggregations;
db.trips.aggregate([
  {
    $addFields: {
      mediaViagem:
      {
        $divide: [{ $subtract: ['$stopTime', '$startTime'] },{ $multiply: [ 60 , 60000]}]
      }
    }
  },
  {
    $group: {
      _id: '$usertype', duracaoMedia: { $avg: '$mediaViagem' }
    }
  },
  {
    $project: {
      _id: 0, tipo: '$_id', duracaoMedia: {$trunc: ['$duracaoMedia', 2]}
    }
  }
]).pretty();
