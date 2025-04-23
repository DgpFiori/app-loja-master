import { Category } from '../types/category';
import { Product } from '../types/product';

type Data = {
  categories: Category[];
  products: Product[];
};
export const data: Data = {
  categories: [
    {
      id: 1,
      title: 'Smartphones',
      cover: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500'
    },
    {
      id: 2,
      title: 'Acessórios',
      cover: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500'
    },
    {
      id: 3,
      title: 'Periféricos',
      cover: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'
    }
  ],
  products: [
    {
      id: 1,
      idCategory: 1,
      image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500',
      title: 'Smartphone X1',
      description: 'Alta performance, tela AMOLED e câmera avançada.',
      price: 599.99
    },
    {
      id: 2,
      idCategory: 1,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
      title: 'Smartphone M2',
      description: 'Bateria de longa duração, câmera tripla.',
      price: 899.99
    },
    {
      id: 3,
      idCategory: 3,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      title: 'Fone Bluetooth',
      description: 'Som cristalino, cancelamento de ruído ativo.',
      price: 199.99
    },
    {
      id: 4,
      idCategory: 2,
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500',
      title: 'Bolsa de Couro',
      description: 'Design clássico, espaçosa e elegante para uso.',
      price: 89.99
    },
    {
      id: 5,
      idCategory: 2,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500',
      title: 'Óculos de Sol',
      description: 'Proteção UV, design moderno, armação leve.',
      price: 49.99
    },
    {
      id: 6,
      idCategory: 3,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
      title: 'Carregador Rápido',
      description: 'Carregamento ultra rápido, múltiplas portas USB.',
      price: 79.99
    },
    {
      id: 7,
      idCategory: 2,
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500',
      title: 'Carteira Slim',
      description: 'Compacta e prática, material durável.',
      price: 29.99
    },
    {
      id: 8,
      idCategory: 3,
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500',
      title: 'Capa Protetora',
      description: 'Proteção premium, design elegante.',
      price: 39.99
    },
    {
      id: 9,
      idCategory: 3,
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500',
      title: 'Película de Vidro',
      description: 'Proteção total da tela, instalação fácil.',
      price: 19.99
    },
    {
      id: 10,
      idCategory: 2,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500',
      title: 'Colar Elegante',
      description: 'Design sofisticado, charme e refinamento.',
      price: 44.99
    }
  ]
};
