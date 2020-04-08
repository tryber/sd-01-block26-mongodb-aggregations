db.trips.aggregate([
  {
    $facet: {
      usuariosPorGenero: [
        {
          $group: { _id: '$gender', total: { $sum: 1 } }
        }
      ],
      usuariosPorTipo: [
        {
          $group: { _id: '$usertype', total: { $sum: 1 } }
        }
      ],
      estacaoInicio: [
        {
          $group: { _id: 
            { estacacaoId: '$startStationId', estacaoNome: '$startStationName' }, total: { $sum: 1 } }
        }

      ],
      estacaoFim: [
        {
          $group: { _id: 
            { estacacaoId: '$endStationId', estacaoNome: '$endStationName' }, total: { $sum: 1 } }
        }

      ]
    }
  }
]).pretty()
