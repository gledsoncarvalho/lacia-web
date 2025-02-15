import { Component, Inject, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { DomSanitizer } from '@angular/platform-browser';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { FuseUtils } from '@fuse/utils';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ScrumboardService } from '../../../scrumboard.service';
import { Attachment } from './../../../attachment.model';



@Component({
    selector: 'scrumboard-board-card-dialog',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ScrumboardCardDialogComponent implements OnInit, OnDestroy {
    card: any;
    board: any;
    list: any;
    
    date = new FormControl(new Date());
    serializedDate = new FormControl((new Date()).toISOString());

    toggleInArray = FuseUtils.toggleInArray;
    confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

    @ViewChild('checklistMenuTrigger')
    checklistMenu: MatMenuTrigger;

    @ViewChild('newCheckListTitleField')
    newCheckListTitleField;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {MatDialogRef<ScrumboardCardDialogComponent>} matDialogRef
     * @param _data
     * @param {MatDialog} _matDialog
     * @param {ScrumboardService} _scrumboardService
     */
    constructor(
        private _sanitizer: DomSanitizer,
        public matDialogRef: MatDialogRef<ScrumboardCardDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _matDialog: MatDialog,
        private _scrumboardService: ScrumboardService
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this._scrumboardService.onBoardChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(board => {
                this.board = board;

                this.card = this.board.cards.find((_card) => {
                    return this._data.cardId === _card.id;
                });

                this.list = this.board.lists.find((_list) => {
                    return this._data.listId === _list.id;
                });
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Remove due date
     */
    removeDueDate(): void {
        this.card.due = '';
        this.updateCard();
    }

    addDueDate(): void{
        this.card.due = new Date();
    }

    /**
     * Toggle subscribe
     */
    toggleSubscribe(): void {
        this.card.subscribed = !this.card.subscribed;

        this.updateCard();
    }

    /**
     * Toggle cover image
     *
     * @param attachmentId
     */
    toggleCoverImage(attachmentId): void {
        if (this.card.idAttachmentCover === attachmentId) {
            this.card.idAttachmentCover = '';
        }
        else {
            this.card.idAttachmentCover = attachmentId;
        }

        this.updateCard();
    }

    /**
     * Remove attachment
     *
     * @param attachment
     */
    removeAttachment(attachment): void {
        if (attachment.id === this.card.idAttachmentCover) {
            this.card.idAttachmentCover = '';
        }

        this.card.attachments.splice(this.card.attachments.indexOf(attachment), 1);

        this.updateCard();
    }

    /**
     * Remove checklist
     *
     * @param checklist
     */
    removeChecklist(checklist): void {
        this.card.checklists.splice(this.card.checklists.indexOf(checklist), 1);

        this.updateCard();
    }

    /**
     * Update checked count
     *
     * @param list
     */
    updateCheckedCount(list): void {
        const checkItems = list.checkItems;
        let checkedItems = 0;
        let allCheckedItems = 0;
        let allCheckItems = 0;

        for (const checkItem of checkItems) {
            if (checkItem.checked) {
                checkedItems++;
            }
        }

        list.checkItemsChecked = checkedItems;

        for (const item of this.card.checklists) {
            allCheckItems += item.checkItems.length;
            allCheckedItems += item.checkItemsChecked;
        }

        this.card.checkItems = allCheckItems;
        this.card.checkItemsChecked = allCheckedItems;

        this.updateCard();
    }

    /**
     * Remove checklist item
     *
     * @param checkItem
     * @param checklist
     */
    removeChecklistItem(checkItem, checklist): void {
        checklist.checkItems.splice(checklist.checkItems.indexOf(checkItem), 1);

        this.updateCheckedCount(checklist);

        this.updateCard();
    }

    /**
     * Add check item
     *
     * @param {NgForm} form
     * @param checkList
     */
    addCheckItem(form: NgForm, checkList): void {
        const checkItemVal = form.value.checkItem;

        if (!checkItemVal || checkItemVal === '') {
            return;
        }

        const newCheckItem = {
            name: checkItemVal,
            checked: false
        };

        checkList.checkItems.push(newCheckItem);

        this.updateCheckedCount(checkList);

        form.setValue({ checkItem: '' });

        this.updateCard();
    }

    /**
     * Add checklist
     *
     * @param {NgForm} form
     */
    addChecklist(form: NgForm): void {
        this.card.checklists.push({
            id: FuseUtils.generateGUID(),
            name: form.value.checklistTitle,
            checkItemsChecked: 0,
            checkItems: []
        });

        form.setValue({ checklistTitle: '' });
        form.resetForm();
        this.checklistMenu.closeMenu();
        this.updateCard();
    }

    /**
     * On checklist menu open
     */
    onChecklistMenuOpen(): void {
        setTimeout(() => {
            this.newCheckListTitleField.nativeElement.focus();
        });
    }

    /**
     * Add new comment
     *
     * @param {NgForm} form
     */
    addNewComment(form: NgForm): void {
        const newCommentText = form.value.newComment;

        const newComment = {
            idMember: '36027j1930450d8bf7b10158',
            message: newCommentText,
            time: 'now'
        };

        this.card.comments.unshift(newComment);

        form.setValue({ newComment: '' });

        this.updateCard();
    }

    /**
     * Remove card
     */
    removeCard(): void {
        this.confirmDialogRef = this._matDialog.open(FuseConfirmDialogComponent, {
            disableClose: false
        });

        this.confirmDialogRef.componentInstance.confirmMessage = 'Você tem certeza que quer remover este cartão?';

        this.confirmDialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.matDialogRef.close();
                this._scrumboardService.removeCard(this.card.id, this.list.id);
            }
        });
    }

    /**
     * Update card
     */
    updateCard(): void {
        this._scrumboardService.updateCard(this.card);
    }

    changeListener($event): void {
        this.readThis($event.target);
    }

    readThis(inputValue: any): void {
        for (let i = 0; i < inputValue.files.length; i++) {
            let file: File = inputValue.files[i];
            let myReader: FileReader = new FileReader();



            myReader.onloadend = (e) => {
                // you can perform an action with readed data here
                let attachment: Attachment = {} as Attachment;
                attachment.src = myReader.result.toString();
                attachment.type = 'image';
                attachment.name = file.name;
                attachment.time = new Date();
                this.card.attachments.push(attachment);
                console.log(myReader.result.toString());
            }

            myReader.readAsDataURL(file);
        }
    }

    retornarImagem(src: string) {
        return src.startsWith('data:image') ? this._sanitizer.bypassSecurityTrustResourceUrl(src) : '../../../../../../../../../assets/images/scrumboard/documents.jpg';
    }

    uploadImage() {
        document.getElementById('btn').click();
    }
}