import { UsuarioProjeto } from './usuario-projeto.model';


export interface Projeto {
    idProjeto: number;
    titulo: string;
    descricao: string;
    orcamento: number;
    dataInicio: Date;
    dataFim: Date;
    aprovado: boolean;
    idUser?: number;
    usuarios: UsuarioProjeto[];
}