use aggregations;
db.trips.aggregate([
  {
    $facet: {
      usuariosPorGenero: [
        {
          $group: {
            _id: "$gender",
            total: { $sum: 1 }
          }
        }
      ],
      usuariosPorTipo: [
        {
          $group: {
            _id: "$userType",
            total: { $sum: 1 }
          }
        }
      ],
      estacaoInicio: [
        {
          $group: {
            _id: {
              estacaoId: "$startStationId",
              estacaoNome: "$startStationName"
            },
            total: { $sum: 1 }
          }
        }
      ],
      estacaoFim: [
        {
          $group: {
            _id: {
              estacaoId: "$endStationId",
              estacaoNome: "$endStationName"
            },
            total: { $sum: 1 }
          }
        }
      ]
    }
  }
]);
