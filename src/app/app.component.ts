import { Component, OnInit } from '@angular/core';
import { CommonApiService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularApp';
  data:any;
  baseData: any;
  constructor(public commonService:CommonApiService){}

  ngOnInit(){
    this.commonService.getData().subscribe((resp: any) => {
        this.data=resp.results
        this.baseData = resp.results
    });
  }
  inputChange(event:any){
    const typedVal = event.target.value
    if(typedVal){
      this.data = this.baseData.filter((val:any)=>{
        if(val.name.first.includes(typedVal) || val.name.last.includes(typedVal)  ||val.name.title.includes(typedVal) ) {
          return val
        }
      })
    }else{
      this.data=this.baseData
    }
  }
  clicked(){
   const item = document.getElementsByClassName("body-resultdata-each");
   console.log(item) 
  }
}
