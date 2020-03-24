import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suseredit',
  templateUrl: './suseredit.component.html',
  styleUrls: ['./suseredit.component.css']
})
export class SusereditComponent implements OnInit {

  public first:string;
  public last:string;
  public address:string;
  public mobile:string;
  public pass:string;
  public  repass:string;
 
  constructor( public router:Router) {
    this.move();
   }

  ngOnInit() {
   
  }
  move(){
    
    
    this.first="hlooo";
    
  this.last="hloo";
  this.address="gallino8";
  this.mobile="657";
  
  }
  
}
