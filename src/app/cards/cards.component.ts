import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  type = 0;

  ngOnInit() {
    //this.type = this.route.snapshot.params['type'];
    this.route.params.subscribe(params => {
      this.type = +params['type'];
      this.m1 = params['m1'];
    })
    this.route.queryParams.subscribe(params => {
      this.q1 = params['q1'];
    })
  }

  ngAfterContentInit(){
    this.liveNumber=this.type;
  }
  liveNumber=0;
  // addType(num: number) {
  //   this.type = +this.type + num ;
  //   this.router.navigateByUrl('/cards/'+this.type);
  // }
  q1;
  m1;
}
