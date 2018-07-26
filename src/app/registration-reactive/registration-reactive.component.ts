import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-registration-reactive',
  templateUrl: './registration-reactive.component.html',
  styleUrls: ['./registration-reactive.component.css']
})
export class RegistrationReactiveComponent implements OnInit {
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

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myFormModel.value);
  }
}
