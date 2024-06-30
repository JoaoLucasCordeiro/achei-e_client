// types.ts
export interface User {
    nome: string;
    sobrenome: string;
    curso: string;
    periodo: string;
    telefone: string;
    foto: string;
  }
  
  export interface Item {
    estado: string;
    categoria: string;
    descricao: string;
    titulo: string;
    data: string;
    foto: string;
  }
  
  export interface Post {
    id: string; // Adicione esta linha para incluir o ID do post
    tipo: string;
    dataCriacao: string;
    dataRemocao: string;
    usuario: User;
    item: Item;
    comentarios: string[];
  }
  