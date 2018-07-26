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

# Angular Development with TypeScript

# 10.2.1  Forms directives
## Check: Preparing for using the template-driven API
1. Add to app.module.ts ```import { FormsModule } from '@angular/forms';```

## Check: Add Form template
1.  Listing 10.2. Binding NgForm to a template variable 
```
<form #f="ngForm"></form> 
<pre>{{ f.value | json }}</pre>
```
1. Listing 10.3. Intercepting the submit event ```<form #f="ngForm" (ngSubmit)="onSubmit(f.value)"></form>```
1. Listing 10.4. Adding the `NgModel` directive to an HTML element
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
## 10.2.2 Check: Applying template-driven API to HTML forms

1. Listing 10.6. Angular-aware form
```
<form #f="ngForm"
      (ngSubmit)="onSubmit(f.value)">
    <!-- Form controls will be added here -->
</form>
```
1. Listing 10.7. The username and ssn fields
```
<div>Username: <input type="text" name="username" ngModel></div>
<div>SSN:      <input type="text" name="ssn"      ngModel></div>
```
1. Listing 10.8. The password fields
```
<div ngModelGroup="passwordsGroup">
  <div>Password: <input type="password" 
                  name="password" ngModel></div>
  <div>Confirm password: <input type="password"
                  name="pconfirm" ngModel></div>
</div>
```
1. The Submit button remains the same as in the plain HTML version of the form: ```<button type="submit">Submit</button>```
*Listing 10.9. A component that uses the template-driven Forms API*
```
@Component({
  selector: 'app-root',
  template: `
    <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
      <div>Username:        <input type="text"     name="username" ngModel></div>
      <div>SSN:             <input type="text"     name="ssn"      ngModel></div>
      <div ngModelGroup="passwordsGroup">
        <div>Password:        <input type="password" name="password" ngModel></div>
        <div>Confirm password: <input type="password" name="pconfirm"  ngModel></div>
      </div>
      <button type="submit">Submit</button>
    </form>
  `
})
export class AppComponent {
  onSubmit(formData) {
    console.log(formData);
  }
}
```


 # 10.2.1  Reactive Forms

 ## Check: Add setups for reactive forms #1~#4
 1. Import ReactiveFormsModule in the `NgModule()` where your component is declared.
 1. In your TypeScript code, create an instance of the model object `FormGroup` to store the form’s values.
 1. Create an HTML form template adding reactive directives.
 1. Use the instance of the FormGroup to access form’s values.

*Listing 10.10. Adding support for reactive forms*
 ## Check: Add setup for reactive forms #1
 ```
 import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  ...
  imports: [
    ...
    ReactiveFormsModule
  ],
  ...
})
```
*Listing 10.11. Creating a form model object*
## Check: Add instance of model object "FormGroup" reactive forms #2
```
myFormModel: FormGroup;

  constructor() {
    this.myFormModel = new FormGroup({
      username: new FormControl(''),
      ssn: new FormControl('')
    });
  }
 ```

 ## Add instance of model object "FormGroup" reactive forms #3
 *Listing 10.12. Adding validators to a form control*
 ```
let city = new FormControl('New York',
                [Validators.required,
                 Validators.minLength(2)]);
 ```
 *Listing 10.13. Creating a form model by instantiating a `FormGroup`*
 ```
 myFormModel: FormGroup;

  constructor() {
    this.myFormModel = new FormGroup({
      username: new FormControl(''),
      ssn: new FormControl(''),
      passwordsGroup: new FormGroup({
        password: new FormControl(''),
        pconfirm: new FormControl('')
      })
    });
  }
```
*Listing 10.14. Adding a `FormArray` to `FormGroup`*
```
let myFormModel = new FormGroup({
  emails: new FormArray([
    new FormControl()
  ])
});
```
*Listing 10.15. Binding the FormGroup to an HTML form*
```
@Component({
  selector: 'app-frm1',
  template: `
    <form [formGroup]="myFormModel">
    </form>
  `
})
class Frm1Component {
  myFormModel = new FormGroup({
// form controls are created here });
}
```
*Listing 10.16. Using a formGroupName*
```
@Component({
  ...
  template: `<form [formGroup]="myFormModel">
               <div formGroupName="dateRange">...</div>
             </form>`
})
class FormComponent {
  myFormModel = new FormGroup({
    dateRange: new FormGroup({
      from: new FormControl(),
      to  : new FormControl()
    })
  })
}
```
*Listing 10.17. Completed form template*
```
<form [formGroup]="myFormModel">
  <div formGroupName="dateRange">
    <input type="date" formControlName="from">
    <input type="date" formControlName="to">
  </div>
</form>
```
*Listing 10.18. FormControl*
```
@Component({
   ...
   template: `<input type="text" [formControl]="weatherControl">`
})
class FormComponent {
  weatherControl: FormControl = new FormControl();

  constructor() {
    this.weatherControl.valueChanges
        .pipe(
          debounceTime(500),
          switchMap(city => this.getWeather(city))
        )
        .subscribe(weather => console.log(weather));
  }
}
```
## 10.3.3  Applying reactive API to HTML forms
## Check: Add reactive API to HTML forms
*Listing 10.19. Creating a form model with reactive API*
```
@Component(...)
class AppComponent {
  myFormModel: FormGroup;

  constructor() {
    this.myFormModel = new FormGroup({
      username: new FormControl(),
      ssn: new FormControl(),
      passwordsGroup: new FormGroup({
        password: new FormControl(),
        pconfirm: new FormControl()
      })
    });
  }

  onSubmit() {
    console.log(this.myFormModel.value);
  }
}
```
*Listing 10.20. HTML binding to the model*
```
<form [formGroup]="myFormModel"
      (ngSubmit)="onSubmit()"> 
  <div>Username: <input type="text" formControlName="username"></div>
  <div>SSN:      <input type="text" formControlName="ssn"></div>

  <div formGroupName="passwordsGroup">
    <div>Password: <input type="password" 
                          formControlName="password"></div>
     
    <div>Confirm password: <input type="password" 
                           formControlName="pconfirm"></div>
  </div>   
  <button type="submit">Submit</button>
</form>
```



 



