export interface Aluno {
    idUsuario: number;
    nome: string;
    email: string;
    dataNascimento: Date;
    telefone: string;
    cpf?: string; 
}