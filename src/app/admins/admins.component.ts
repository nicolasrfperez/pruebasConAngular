import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
 title:string = "";
 cont:number=5;
 num:number=0;
 desabilitado:boolean=false;
   constructor() { }
  
   
   adivina(){
   this.num
     if (this.num == 5){
      //alert("ganaste")
      alert(`ganaste`)
      this.desabilitado=true;
    
     }
     if (this.num<5){
       this.title="un poquito mas"
     }
     if (this.num>5){
       this.title="un poquito menos"
      
     }
     if (this.cont<=5){
       this.cont--
       alert(`te quedan ${this.cont} intentos`)
       
     }
     if(this.cont==0){
       this.desabilitado=true;
       
      this.title="perdiste"
      this.desabilitado=true;

     }

   }


  ngOnInit(): void {
  }

}
