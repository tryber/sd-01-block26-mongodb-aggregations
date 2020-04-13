use aggregations;
db.air_alliances.aggregate([
  {
    $match: { name: 'OneWorld'}
  }
]);

// Não consegui entender o 12;
