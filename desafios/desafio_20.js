use aggregations;

const date = { initial: ISODate('2016-03-10T00:00:00Z'), final: ISODate('2016-03-10T23:59:59Z') };

db.trips.aggregate([
  {
    $match: {
      startTime: {
        $gte: date.initial,
        $lte: date.final
      }
    }
  },
  {
    $addFields:
    {
      diferencaSegundos: { $subtract: ['$stopTime', '$startTime'] },
    }
  },
  {
    $group: { _id: null, duracaoMediaEmSegundos: { $avg: '$diferencaSegundos' } }
  },
  {
    $project: {
      _id: 0, duracaoMediaEmMinutos: { $ceil: { $divide: ['$duracaoMediaEmSegundos', 60000] } }
    }
  }
]).pretty();
