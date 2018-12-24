import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  //----------------PROPERTIRS-------------------

  signInForm: FormGroup;
  currentYear: number;

  //----------------CONSTRUCTOR------------------

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.currentYear = new Date().getFullYear();
  }

  //----------------METHODS-------------------

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.signInForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl('')
    });
  }

  onFocus(controlName: string) {
    let control = this.signInForm.get(controlName);
    control.markAsUntouched();
  }

  logIn(): void {
    this.router.navigate(['main']);
  }
}
