import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export class GitHubUsersGuard implements CanActivate
{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
        Observable<boolean> | boolean 
    {
        console.log('Must be some popUp whit quastion....');


        return confirm('Its RouteGuard test \n You are gona see some github users list!')
    }

}