/*
Sandra Bullock
Tom Hanks
Julia Roberts
Kevin Spacey
George Clooney

Para filmes lançados nos Estados Unidos (campo countries),
com tomatoes.viewer.rating maior ou igual a 3,
crie um novo campo chamado num_favs,
que represente quantos atores ou atrizes favoritos aparecem no elenco
(campo cast) do filme.
Ordene os resultados por num_favs,
tomatoes.viewer.rating
e title, todos em ordem decrescente.

Por fim, utilizando o mesmo pipeline,
responda: Qual o título do vigésimo quinto filme do resultado dessa agregação?

Dica: coloque a lista de atores e atrizes favoritos em uma variável
e explore operadores como $size e $setIntersection.

O resultado da sua query deve ter o seguinte formato:

{ "title" : <nome_do_filme> }

*/


/*
use aggregations;

const favorite_actores = [
  'Sandra Bullock',
  'Tom Hanks',
  'Julia Roberts',
  'Kevin Spacey',
  'George Clooney',
];

db.movies.aggregate([
  {
    $match: {
      $and: [
        {
          'countries': { $all: ['USA'] }
        },
        {
          'tomatoes.viewer.rating': { $gte: 3 }
        }
      ]
    }
  },
  {
    $addFields: {
      favs: { $setIntersection: ['$cast', favorite_actores] }
    }
  },
  {
    $addFields: {
      num_favs: {
        $size: {
          $ifNull: [
            '$favs',
            []
          ]
        }
      }
    }
  },
  {
    $sort: {
      num_favs: -1,
      'tomatoes.viewer.rating': -1,
      'title': -1
    }
  },
  {
    $project: {
      'title': 1,
      '_id': 0,
    }
  },
  {
    $skip: 24,
  },
  {
    $limit: 1,
  }
]);
*/
