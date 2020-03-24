import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ssingup',
  templateUrl: './ssingup.component.html',
  styleUrls: ['./ssingup.component.css']
})
export class SsingupComponent implements OnInit {
  allarr=[];

  constructor( public router:Router) { }

  ngOnInit() {
  }
  add(first,second,address,mobile,pass,repass){
    let obj={
      first:first,
      second:second,
      
      address:address,
      mobile:mobile,
      pass:pass,
     
      repass:repass
    }
    let obj2={
      second:second,
      pass:pass,

    }
    let user=JSON.parse(localStorage.getItem('emplogin'));
 
    if(user== null)
    {
     let newarray=[obj2];
     localStorage.setItem("emplogin",JSON.stringify(newarray));

    }
    else{
      user.push(obj2);
      localStorage.setItem("emplogin",JSON.stringify(user));
      
    }
 
    this.allarr.push(obj);
    let value=JSON.parse(localStorage.getItem('emplist'));
    if(value== null)
    {
     let newarray=[obj];
     localStorage.setItem("emplist",JSON.stringify(newarray));

    }
    else{
      value.push(obj);
      localStorage.setItem("emplist",JSON.stringify(value));
     ;
      
    }
   
     this.router.navigateByUrl('');

  }
  }
  
 

