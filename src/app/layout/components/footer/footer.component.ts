import { Component } from '@angular/core';

@Component({
    selector   : 'footer',
    templateUrl: './footer.component.html',
    styleUrls  : ['./footer.component.scss']
})
export class FooterComponent
{

    date: Date = new Date();
    /**
     * Constructor
     */
    constructor()
    {
    }
}
