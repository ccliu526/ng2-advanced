import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, AbstractControl } from "@angular/forms";


function mustHaveWillValidator(control: AbstractControl) {
  if (control.value.indexOf('Will') > -1) {
    return null;
  } else {
    return {
      'must-have-will': true
    };
  }
}
@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {
  data: any = {};
  form: FormGroup;
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {

    this.form = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.maxLength(10),
        mustHaveWillValidator]],
      summary: ['', [Validators.required]],
      metadata: this.fb.array([
        this.fb.control('111'),
        this.fb.control('222')
      ])
    })
  }

  doSubmit(f) {
    console.log(f);
  }

  addInput() {
    let arr = this.form.get('metadata') as FormArray;
    arr.push(this.fb.control('TEST'));
  }

}
