export interface UserResponse {
    
    email: string;
    token: string;
    avatar: string[];
    tipoUsuario: 'C' | 'P' | 'A';

}