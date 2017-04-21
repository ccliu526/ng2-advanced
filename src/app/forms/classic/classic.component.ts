import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {
  data:any = {};
  form: FormGroup;
  constructor(private fb:FormBuilder) {

   }

  ngOnInit() {
    this.form = this.fb.group({
      title:"default title",
      summary:"default title"
    })
  }

  doSubmit(f){
    console.log(f);
  }

}
