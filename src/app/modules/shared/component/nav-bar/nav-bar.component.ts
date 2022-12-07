import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userName:any
  constructor() {     
    setTimeout(() => {
      if(sessionStorage.getItem("Login data")!=null)
      {
          let x :any=sessionStorage.getItem("Login data");
          this.userName=JSON.parse(x).username;
          let ele =document.getElementById("danger") as HTMLElement;
      ele.hidden=false;
          console.log(x)
      }}
    , 500);
  }


  ngOnInit(): void {

  }
  LogOut()
  {
    sessionStorage.clear();
    if(sessionStorage.getItem("Login data")==null)
    {
      let ele =document.getElementById("danger") as HTMLElement;
      ele.hidden=true;
    }
  }
  
}
