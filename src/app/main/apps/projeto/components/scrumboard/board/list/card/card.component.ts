import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
    selector: 'scrumboard-board-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ScrumboardBoardCardComponent implements OnInit {
    @Input()
    cardId;

    card: any;
    board: any;
    myDate = new Date();

    constructor(
        private _activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.board = this._activatedRoute.snapshot.data.board;
        this.card = this.board[0].cartaoTarefaList.filter((card) => {
            return this.cardId === card.idCartaoTarefa;
        })[0];
    }

    isOverdue(cardDate): boolean {
        return moment() > moment(new Date(cardDate));
    }
}
