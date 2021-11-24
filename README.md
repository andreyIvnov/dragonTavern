# DragonTavern

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.






#############################################################################################
ng s -o === for testing of first app (geting from git)

was adding pakage:
    - ng add @angular/material
    - Bootstram href


adding a NAVBAR component

<app-navbar> and <router-outlet> added in app.component.html

ReactiveFormsModule added 

adding ABOUT component 

testing a routing to about component whit about button on NAVBAR -- cheakd

 {{{{{{{{{{{{{{stopped on navbar.component.html }}}}}}}}}}}}}}
        

adding HOME componnet and LOGIN component + routes in <app-routing.module.ts>
added email form on login component


The UI of LOGIN component is ready 
        - email form is added
        - password form is added
Was added a error message function for required forms in login.component.ts 


Added a GitHubUsers MODULE
    added a module (not component) for LAZY Loading testing 
    added a routing to Github module from app-routing + CanActivate of Route Guard + Provider: [GitHubUsersGuard]
Get GITHUB users service from free API to httpGET testing
    url = "https://api.github.com/users"
    get users from github API by using a Observable<any>

Get All users list on git-hub-users module by getGitHubUsers() function on git-hub-users.component.ts
    + cheak by console.log(data) --- V cheaked

Add a one of cards from matirial to show a users List on git-hub-users.component.html
    - using of *ngFor to run all of them 

NEXT STEPS:
    - next page after a login

