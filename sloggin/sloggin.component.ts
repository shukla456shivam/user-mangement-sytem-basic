import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-sloggin',
  templateUrl: './sloggin.component.html',
  styleUrls: ['./sloggin.component.css']
})
export class SlogginComponent implements OnInit {
  allid =[];
  email :any;
  password:any;


  constructor( public router:Router) { }

  ngOnInit() {
    
  }
  clear(){
    this.email=null;
    this.password=null;
  }
  addshare(email,password){
    let object={
      email:email,
      password:password,
    
    }
    this.allid.push(object);
    this.clear();
    

    let user=JSON.parse(localStorage.getItem('emplogin'));

    for (let i = 0; i <user.length; i++) {
      console.log (user.length);
     
      if(object.email==user[i].email)
      
      {
        this.router.navigateByUrl('userboard');
      
      break;}
      else{    
       
      }
    }
  

   


  }
  move(){
    this.router.navigateByUrl('signup');
  }
 

  
}
