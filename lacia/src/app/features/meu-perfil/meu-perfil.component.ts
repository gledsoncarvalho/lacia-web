import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { MeuPerfil } from './meu-perfil';
import { MeuPerfilEditarModalComponent } from './components/meu-perfil-editar-modal/meu-perfil-editar-modal.component';


@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.css']
})
export class MeuPerfilComponent implements OnInit {
 
  MeuPerfilForm: FormGroup;
  colunasTable: string[] = ['idMeuPerfil', 'nomeMeuPerfil', 'emailMeuPerfil', 'acoes'];
  dados_perfil: MatTableDataSource<MeuPerfil> = new MatTableDataSource();
  perfil: MeuPerfil = {idMeuPerfil: 100,nomeMeuPerfil:'Francisco José dos Santos Santana',emailMeuPerfil:'francisco.jsantos@souunit.com.br',telefoneMeuPerfil:'(79)99841-4129',dtNascimentoMeuPerfil: new Date(),cpfMeuPerfil: '21212121111'} as MeuPerfil;

  constructor(private fb: FormBuilder, private dialog: MatDialog, private alert: AlertComponent) { }

  ngOnInit(): void {
  }

  criarForm(){
    this.MeuPerfilForm = this.fb.group({
      nomeMeuPerfil: [null],
      emailMeuPerfil:[null]
    })
  }

  atualizarMeuPerfil(){
    let dialogRef = this.dialog.open(MeuPerfilEditarModalComponent, {data: this.perfil});
    dialogRef.afterClosed().subscribe(resposta => {
      this.perfil = resposta;
      console.log(resposta);
    })
  } 
}
