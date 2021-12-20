import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  elements:any=[]
  // showDetail:any =[]
  constructor(
    private activatedRoute: ActivatedRoute,
    private listService:ListService
  ) { }

  ngOnInit(): void {

    const identifier = this.activatedRoute.snapshot.paramMap.get("id");
    if(identifier){
      this.listService.getById(identifier).subscribe(element=> {element.amiibo.forEach((element:any)=> this.elements.push(element))

   
      
      })
    }
  }

  // showThisToggle(event:any){
  //   if(this.showDetail.indexOf(event) < 0){
  //     this.showDetail.push(event)
  //   }else{
  //       this.showDetail.splice(this.showDetail.indexOf(event),1);
  //   }


  // }

}
