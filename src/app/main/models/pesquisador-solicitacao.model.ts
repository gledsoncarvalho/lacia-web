export interface PesquisadorSolicitacao {
    idUsuario: number;
    nome: string;
    email: string;
    tipoUsuario: 'P'; 
    cpf: string;
    dataNascimento: Date;
    telefone: string;
    isAprovado: boolean;
}