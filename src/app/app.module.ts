import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FuseProgressBarModule, FuseSidebarModule } from '@fuse/components';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from 'app/app.component';
import { FakeDbService } from 'app/fake-db/fake-db.service';
import { fuseConfig } from 'app/fuse-config';
import { LayoutModule } from 'app/layout/layout.module';
import { FuseMaterialColorPickerModule } from '../@fuse/components/material-color-picker/material-color-picker.module';
import { AuthGuard } from './main/guards/auth.guard';
import { JwtService } from './main/services/jwt.service';




const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'pages/auth/login',
        pathMatch: 'full'
    },
    {
        path: 'apps',
        loadChildren: () => import('./main/apps/apps.module').then(m => m.AppsModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'pages',
        loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule)
    },
    {
        path: '**',
        redirectTo: 'pages/errors/error-404',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseMaterialColorPickerModule,

        // App modules
        LayoutModule,
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
        JwtService,
        AuthGuard
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
