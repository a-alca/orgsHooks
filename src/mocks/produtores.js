import green from '../assets/produtores/green.png';
import salad from '../assets/produtores/salad.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import grow from '../assets/produtores/grow.png';
import potager from '../assets/produtores/potager.png';

const gerarNumeroRandomico = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const produtores = {
  titulo: 'Produtores',
  lista: [
    {
      nome: 'Green',
      imagem: green,
      distancia: `${gerarNumeroRandomico(1, 500)}`,
      estrelas: gerarNumeroRandomico(1, 5),
    },
    {
      nome: 'Salad',
      imagem: salad,
      distancia: `${gerarNumeroRandomico(1, 500)}`,
      estrelas: gerarNumeroRandomico(1, 5),
    },
    {
      nome: 'Jenny Jack',
      imagem: jennyJack,
      distancia: `${gerarNumeroRandomico(1, 500)}`,
      estrelas: gerarNumeroRandomico(1, 5),
    },
    {
      nome: 'Grow',
      imagem: grow,
      distancia: `${gerarNumeroRandomico(1, 500)}`,
      estrelas: gerarNumeroRandomico(1, 5),
    },
    {
      nome: 'Potager',
      imagem: potager,
      distancia: `${gerarNumeroRandomico(1, 500)}`,
      estrelas: gerarNumeroRandomico(1, 5),
    },
  ],
};

export default produtores;
