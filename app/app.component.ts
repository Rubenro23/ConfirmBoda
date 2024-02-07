import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConfirmacionBoda';
  myForm:FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required,],
      surname: ['', Validators.required],
      si: false,
      no: false,
      _next: ['http://localhost:4200/'],
      _captcha: ['false']
    });
  }

  onSubmit() {
    if(this.myForm.valid){
      alert('¡Formulario enviado!');
    }
    else{
      alert('Por favor complete los campos');
    }
  }
}
