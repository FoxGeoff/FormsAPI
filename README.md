# FormsAPI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Angulat Development with TypScript

## Check: Preparing for using the template-driven API
1. Add to app.module.ts ```import { FormsModule } from '@angular/forms';```

## Check: Add Form template
1.  Listing 10.2. Binding NgForm to a template variable 
```
<form #f="ngForm"></form> 
<pre>{{ f.value | json }}</pre>
```
1. Listing 10.3. Intercepting the submit event ```<form #f="ngForm" (ngSubmit)="onSubmit(f.value)"></form>```
1. Listing 10.4. Adding the NgModel directive to an HTML element
```
<form #f="ngForm">
  <input type="text"
         name="username"
         ngModel>
</form>
```
## Tip: Although the names of the classes that implement form directives are capitalized, their names should start with a lowercase letter in templates (for example, NgForm versus ngForm).
1. Listing 10.5. A form with a nested form
```
<form #f="ngForm">
  <div ngModelGroup="passwords">
    <input type="text" name="password" ngModel>
    <input type="text" name="pconfirm" ngModel>
  </div>
</form>

<!-- Access the values from the nested object-->
<pre>Password: {{ f.value.passwords.password }}</pre>
<pre>Password confirmation: {{ f.value.passwords.pconfirm }}</pre>
```
1. Angular-aware form
```
<form #f="ngForm"
      (ngSubmit)="onSubmit(f.value)">
    <!-- Form controls will be added here -->
</form>
```
1. The username and ssn fields
```
<div>Username: <input type="text" name="username" ngModel></div>
<div>SSN:      <input type="text" name="ssn"      ngModel></div>
```
1. The password fields
```
<div ngModelGroup="passwordsGroup">
  <div>Password: <input type="password" 
                  name="password" ngModel></div>
  <div>Confirm password: <input type="password"
                  name="pconfirm" ngModel></div>
</div>
```
1. ```<button type="submit">Submit</button>```


