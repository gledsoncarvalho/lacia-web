export interface UserResponse {
    
    email: string;
    token: string;
    fotoPerfil: any;
    nome: string;
    tipoUsuario: 'C' | 'P' | 'A';

}