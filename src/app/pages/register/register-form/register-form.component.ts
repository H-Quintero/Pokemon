import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
public userRegisterForm: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userRegisterForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)]],
      email: ['', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}")]],
      emailRepeat: ['', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}")]],
      password: ['', [
        Validators.required,
        Validators.pattern("((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})")]],
      passwordRepeat: ['', [
        Validators.required,
        Validators.pattern("((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})")]]
    })
  }

}
