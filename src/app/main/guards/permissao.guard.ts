import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PermissaoGuard implements CanActivateChild {

    constructor(private _router: Router) { }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let permissions: string[] = childRoute.data.permissions;
        if (permissions.indexOf(sessionStorage.getItem('tipoUsuario')) === -1) {
            this._router.navigateByUrl('pages/errors/error-500');
            return false;
        }
        return true;
    }
}
