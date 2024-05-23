import produtores from '../mocks/produtores';
import topo from '../mocks/topo';

//aqui criei uma interface onde podemos chamar esses métodos, importar eles. E usar na aplicação para pegar os produtores e o topo, como se estivéssemos fazendo uma requisição mesmo.

export const carregaProdutores = () => {
  return produtores;
};

export const carregaTopo = () => {
  return topo;
};
