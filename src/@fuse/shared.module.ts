import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { FuseDirectivesModule } from '@fuse/directives/directives';
import { FusePipesModule } from '@fuse/pipes/pipes.module';
import { NgBrazil } from 'ng-brazil';
import { AlertComponent } from './components/alert/alert.component';
import { MaskDirective } from './directives/mask';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { AngularFileUploaderModule } from "angular-file-uploader";
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UsuarioService } from '../app/main/services/usuario.service';
import { ProjetoService } from '../app/main/services/projeto.service';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
    declarations: [MaskDirective, AlertComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        FuseDirectivesModule,
        FusePipesModule
    ],
    exports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        FuseDirectivesModule,
        FusePipesModule,
        RouterModule,
        MatCardModule,
        MatCheckboxModule,
        MatButtonModule,
        MatDialogModule,
        MatSidenavModule,
        MatIconModule,
        MatTabsModule,
        MatTableModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MaskDirective,
        MatDatepickerModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatPaginatorModule,
        MatMenuModule,
        MatExpansionModule,
        NgBrazil,
        CurrencyMaskModule,
        AngularFileUploaderModule,
        AlertComponent
    ],
    providers: [
        AlertComponent,
        UsuarioService,
        ProjetoService
    ]
})
export class FuseSharedModule {
}
