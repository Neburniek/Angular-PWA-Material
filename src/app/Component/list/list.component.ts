import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/service/list.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger("fadeInOut", [
      state(
        "void",
        style({
          opacity: 0.2,
        })
      ),
      transition("void <=> *", animate(1500))
    ])
  ]
})
export class ListComponent implements OnInit {
  displayedColumns:string[]=["name"]
  dataSource = []
  
  constructor(
    private listService:ListService
  ) {

   }

  ngOnInit(): void {

    this.listService.getAll().subscribe(response=> this.dataSource=response.amiibo)
    
  }

}
