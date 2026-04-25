import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  form1: FormGroup;

  constructor(private index: FormBuilder) {
    this.form1 = this.index.group({
       name: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  password: ['', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/)
  ]],
  phone: ['', [
    Validators.required,
    Validators.pattern(/^\+?[0-9]{9,15}$/)
  ]],
  address: ['', Validators.required],
    });
  }

 submitBtn() {
  if (this.form1.valid) {
    const values = this.form1.value;
    alert(
      `სახელი: ${values.name}\n` +
      `ელფოსტა: ${values.email}\n` +
      `პაროლი: ${values.password}\n` +
      `ტელეფონი: ${values.phone}\n` +
      `მისამართი: ${values.address}`
    );
  } else {
    alert('შეავსე ფორმა სწორად');
  }
}

}
