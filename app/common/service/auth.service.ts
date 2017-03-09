import { Injectable } from '@angular/core';
import { Hero} from '../entity/hero';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
    hero: Hero;
    // simulation to login.
    login(role: string): Observable<Hero> {
        let hero = new Hero();
        hero.id = 11;
        hero.name = 'super man';
        // hero.roles = [role];
        this.hero = hero;
        return Observable.of(hero);
    }
    getHero(): Hero {
        return this.hero;
    }
    isLogdedin(): boolean {
        // return this.hero && this.hero.id != null;
        
        return false;
    }
    // hasRole(role: string): boolean {
    //     return this.hero && this.hero.roles.includes(role);
    // }
}