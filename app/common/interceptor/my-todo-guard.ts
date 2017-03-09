import { Injectable } from '@angular/core';
import { CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';
// import { TodoDetailComponent } from './detail/detail.component';

@Injectable()
export class MyTodoGuard implements CanActivateChild {

    constructor(private authService: AuthService, private router: Router) {}

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.authService.isLogdedin()) {
            alert('You need to login!');
            this.router.navigate(['/member-list']);
            return false;
        }
        // if (this.authService.hasRole('CUSTOMER')) {
        //     return true;
        // }
        return true;
    }
}