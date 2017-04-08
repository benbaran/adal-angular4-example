# adal-angular4-example
Angular 4 ADAL Wrapper Example

Steps taken to create this project:

Update to latest angular/cli:

npm uninstall -g @angular/cli
npm cache clean
npm install -g @angular/cli@latest

Create the project:

ng new adal-angular4-example --routing

Change to the project directory:

    cd adal-angular4-example

Install adal-angular4 and save in package.json:

    npm install -save adal-angular4
    npm install

Create the components:

    ng g component Home
    ng g component PageNotFound

Add routes to app-routing-module.ts:

    import { HomeComponent } from './home/home.component';
    import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

    const routes: Routes = [
        { path: '', component: HomeComponent },
        { path: '**', component: PageNotFoundComponent }
    ];







