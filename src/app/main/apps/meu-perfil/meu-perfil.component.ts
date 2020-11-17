import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AlertComponent } from '@fuse/components/alert/alert.component';
import { MeuPerfilEditarModalComponent } from './components/meu-perfil-editar-modal/meu-perfil-editar-modal.component';
import { MeuPerfil } from './meu-perfil';


@Component({
    selector: 'app-meu-perfil',
    templateUrl: './meu-perfil.component.html',
    styleUrls: ['./meu-perfil.component.css']
})
export class MeuPerfilComponent implements OnInit {

    MeuPerfilForm: FormGroup;
    colunasTable: string[] = ['idMeuPerfil', 'nomeMeuPerfil', 'emailMeuPerfil', 'acoes'];
    dados_perfil: MatTableDataSource<MeuPerfil> = new MatTableDataSource();
    perfil: MeuPerfil = { idMeuPerfil: 100, nomeMeuPerfil: 'Francisco José dos Santos Santana', emailMeuPerfil: 'francisco.jsantos@souunit.com.br', telefoneMeuPerfil: '(79)99841-4129', dtNascimentoMeuPerfil: new Date(), cpfMeuPerfil: '212.121.211-11' } as MeuPerfil;


    constructor(private fb: FormBuilder, private dialog: MatDialog, private alert: AlertComponent) { }

    ngOnInit(): void {
    }

    criarForm() {
        this.MeuPerfilForm = this.fb.group({
            nomeMeuPerfil: [null],
            emailMeuPerfil: [null]
        })
    }

    atualizarMeuPerfil() {
        let dialogRef = this.dialog.open(MeuPerfilEditarModalComponent, { data: this.perfil });
        dialogRef.afterClosed().subscribe(resposta => {
            if (resposta) {
                this.perfil = resposta;
            }
        })
    }
    /*document.getElementById('my-file').onchange = function() {
      if (this.files && this.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
          // e.target.result is a base64-encoded url that contains the image data
          document.getElementById('profile-pic').setAttribute('src', e.target.result);
        }
        reader.readAsDataURL(this.files[0]);
      }
    }*/

}

