/*
 Se quisermos analisar nossa coleção para encontrar títulos de filmes que têm uma só palavra no título, poderíamos buscar todos os filmes do dataset e processar isso na aplicação, mas o Aggregation Framework nos permite fazer isso diretamente no lado do banco de dados.

Crie um pipeline que retorne apenas os filmes com o título composto apenas de uma palavra. Por exemplo, "Cinderela" e "3-25" devem entrar nessa contagem, mas "Cast Away" não.

Dica: utilize os operadores $split e $size para te auxiliar.

Sua query deve retornar 8068 documentos.
*/


/*
use aggregations;

db.movies.aggregate([
  {
    $addFields: {
      title_film: {
        $split: ['$title', ' ']
      },
    }
  },
  {
    $match: {
      title_film: {
        $size: 1
      }
    }
  },
  {
    $unset: 'title_film',
  },
]);
*/
