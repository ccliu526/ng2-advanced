import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {
  data:any = {};
  form: FormGroup;
  metadataControls: FormArray;
  constructor(private fb:FormBuilder) {

   }

  ngOnInit() {
    let metadataArray  = [
      this.fb.control('111'),
      this.fb.control('222')
    ];
    this.metadataControls = this.fb.array(metadataArray );

    this.form = this.fb.group({
      title:"default title",
      summary:"default title",
      metadata:this.metadataControls
    })
  }

  doSubmit(f){
    console.log(f);
  }

  addInput(){
    this.metadataControls.insert(0, this.fb.control('TEST'));
  }

}
