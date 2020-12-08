import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { Board } from './board.model';
import { ProjetoService } from '../../../../services/projeto.service';
import { Projeto } from '../../../../models/projeto.model';
import { ListaTarefaService } from '../../../../services/lista-tarefa.service';

@Injectable()
export class ScrumboardService implements Resolve<any>
{
    projetos: Projeto[];
    routeParams: any;
    projeto: any;

    onBoardsChanged: BehaviorSubject<any>;
    onBoardChanged: BehaviorSubject<any>;

    private URL: string = 'api/scrumboard-boards'; 

    constructor(
        private _httpClient: HttpClient,
        private projetoService: ProjetoService
    )
    {
        this.onBoardsChanged = new BehaviorSubject([]);
        this.onBoardChanged = new BehaviorSubject([]);
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {
            Promise.all([
                this.getProjetos()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    getProjetos(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.projetoService.obterProjetosPorMembros()
                .subscribe((response: Projeto[]) => {
                    this.projetos = response;
                    this.onBoardsChanged.next(this.projetos);
                    resolve(this.projetos);
                }, reject);
        });
    }

    getProjeto(projetoId): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/scrumboard-boards/')
                .subscribe((response: any) => {
                    this.projeto = response;
                    this.onBoardChanged.next(this.projeto);
                    resolve(this.projeto);
                }, reject);
        });
    }

    addCard(listId, newCard): Promise<any>
    {
        this.projeto.lists.map((list) => {
            if ( list.id === listId )
            {
                return list.idCards.push(newCard.id);
            }
        });

        this.projeto.cards.push(newCard);

        return this.updateBoard();
    }

    addList(newList): Promise<any>
    {
        this.projeto.lists.push(newList);

        return this.updateBoard();
    }

    removeList(listId): Promise<any>
    {
        const list = this.projeto.lists.find((_list) => {
            return _list.id === listId;
        });

        for ( const cardId of list.idCards )
        {
            this.removeCard(cardId);
        }

        const index = this.projeto.lists.indexOf(list);

        this.projeto.lists.splice(index, 1);

        return this.updateBoard();
    }

    removeCard(cardId, listId?): void
    {
        const card = this.projeto.cards.find((_card) => {
            return _card.id === cardId;
        });

        if ( listId )
        {
            const list = this.projeto.lists.find((_list) => {
                return listId === _list.id;
            });
            list.idCards.splice(list.idCards.indexOf(cardId), 1);
        }

        this.projeto.cards.splice(this.projeto.cards.indexOf(card), 1);

        this.updateBoard();
    }

    updateBoard(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/scrumboard-boards/' + this.projeto.id, this.projeto)
                .subscribe(response => {
                    this.onBoardChanged.next(this.projeto);
                    resolve(this.projeto);
                }, reject);
        });
    }

    updateCard(newCard): void
    {
        this.projeto.cards.map((_card) => {
            if ( _card.id === newCard.id )
            {
                return newCard;
            }
        });

        this.updateBoard();
    }

    createNewBoard(board): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/scrumboard-boards/' + board.id, board)
                .subscribe(response => {
                    resolve(board);
                }, reject);
        });
    }
}

@Injectable()
export class BoardResolve implements Resolve<any>
{
    constructor(
        private _scrumboardService: ScrumboardService,
        private _listaTarefaService: ListaTarefaService
    )
    {
    }

    resolve(route: ActivatedRouteSnapshot): Promise<any>
    {
        return this._listaTarefaService.obterListas(+route.paramMap.get('boardId')).toPromise();
    }
}
