export interface UserResponse {
    
    email: string;
    token: string;
    avatar: string[];
    nome: string;
    tipoUsuario: 'C' | 'P' | 'A';

}