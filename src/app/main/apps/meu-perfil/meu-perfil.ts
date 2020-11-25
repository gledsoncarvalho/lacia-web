export interface MeuPerfil {

    idUsuario: number;
    nome: string;
    telefone: string;
    dataNascimento: Date;
    email: string;
    cpf: string;
    tipoUsuario: 'C' | 'P' | 'A';
  }
  