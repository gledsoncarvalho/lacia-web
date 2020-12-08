import { ProjetoService } from './../../../../services/projeto.service';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';

import { ScrumboardService } from './scrumboard.service';
import { Board } from './board.model';
import { Projeto } from '../../../../models/projeto.model';
import { AlertComponent } from '../../../../../../@fuse/components/alert/alert.component';

@Component({
    selector     : 'scrumboard',
    templateUrl  : './scrumboard.component.html',
    styleUrls    : ['./scrumboard.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ScrumboardComponent implements OnInit, OnDestroy
{
    projetos: Projeto[];

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {Router} _router
     * @param {ScrumboardService} _scrumboardService
     */
    constructor(
        private  _router: Router,
        private _scrumboardService: ScrumboardService,
        private projetoService: ProjetoService,
        private alert: AlertComponent
    )
    {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void
    {
        this.obterProjetosPorUsuario();
        //this._scrumboardService.onBoardsChanged
          //  .pipe(takeUntil(this._unsubscribeAll))
            //.subscribe(boards => {
              //  this.projetos = boards;
            //});
    }

    ngOnDestroy(): void
    {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    newBoard(): void
    {
        const newBoard = new Board({});
        this._scrumboardService.createNewBoard(newBoard).then(() => {
            this._router.navigate(['/apps/scrumboard/boards/' + newBoard.id + '/' + newBoard.uri]);
        });
    }

    obterProjetosPorUsuario(){
        this.projetoService.obterProjetosPorMembros()
            .subscribe(projetos => {
                this.projetos = projetos;
            }, error => this.alert.show('Erro','Não foi possível obter os projetos!', 'error'));
    }
}
