npm install --save @angular/material @angular/cdk

npm install --save @angular/animations

app.module.ts:

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})

@import "~@angular/material/prebuilt-themes/indigo-pink.css";

npm install --save hammerjs

main.ts:

import 'hammerjs';

index.html:

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">





ng g module Material

ng g component Toolbar

ng g component Home
ng g component NotFound


npm install --save adal-angular4@latest