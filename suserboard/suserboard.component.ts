import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suserboard',
  templateUrl: './suserboard.component.html',
  styleUrls: ['./suserboard.component.css']
})
export class SuserboardComponent implements OnInit {
  allemp = [];

  constructor( public router :Router) {
    let value=JSON.parse(localStorage.getItem('emplist'));
    console.log(value);
    if(value== null)
    {
      this.allemp=[];
    }
    else{
      this.allemp=value;
    }
   }
   

  ngOnInit() {
  }
  move():void{
    this.router.navigate(["edit"])

  }


}
