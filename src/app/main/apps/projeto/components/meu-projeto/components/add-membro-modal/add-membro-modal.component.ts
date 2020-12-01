import { AlertComponent } from './../../../../../../../../@fuse/components/alert/alert.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjetoService } from 'app/main/services/projeto.service';
import { UsuarioProjeto } from 'app/main/models/usuario-projeto.model';

@Component({
  selector: 'app-add-membro-modal',
  templateUrl: './add-membro-modal.component.html',
  styleUrls: ['./add-membro-modal.component.scss']
})
export class AddMembroModalComponent implements OnInit {

  usuarios: UsuarioProjeto[] = [];
  todosUsuarios: UsuarioProjeto[] = [
    {idUsuario: 1, nome: 'desgraça', fotoPerfil: '../../../../../../../assets/images/avatars/carl.jpg'} as UsuarioProjeto,
    {idUsuario: 2, nome: 'Brenno', fotoPerfil: '../../../../../../../assets/images/avatars/brenno.jpg'} as UsuarioProjeto, 
    {idUsuario: 3, nome: 'Gledson', fotoPerfil: '../../../../../../../assets/images/avatars/gledson.jpg'} as UsuarioProjeto
  ];

  constructor(
    private dialogRef: MatDialogRef<AddMembroModalComponent>,
    private alert: AlertComponent,
    private projetoService: ProjetoService,
    @Inject(MAT_DIALOG_DATA) usuarios: UsuarioProjeto[]) {
      this.usuarios = usuarios;
}

  ngOnInit(): void {
  }

  addMembros(){
    this.alert.show("Adicionado(s)", "Os alunos fora adicionados com sucesso!", "success");
  }
  
}
