export interface SessionStorageModel {
    fotoPerfil: any;
    nome: string;
    email: string;
    autenticado: boolean;
    tipoUsuario: 'C'|'P'|'A';
    token: any;
    
}