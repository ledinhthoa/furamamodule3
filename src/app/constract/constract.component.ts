import { Component, OnInit,Input } from '@angular/core';
import { Constract } from "../module/constract";
import {ConstractService  } from "../service/constract.service";
import {NgxPaginationModule} from 'ngx-pagination';


@Component({
  selector: 'app-constract',
  templateUrl: './constract.component.html',
  styleUrls: ['./constract.component.css']
})
export class ConstractComponent implements OnInit {
  paginaEmployeer:any;
  constracts:Constract [];

  constructor(private constractService:ConstractService) {
    this.paginaEmployeer = {
      itemsPerPage: 4,
      currentPage: 1,
      pageSize:4,
      
     
    };
   }
   getConstractFromServices(): void {
    //this.movies = this.movieService.getMovies();
    this.constractService.getConstract().subscribe(updatedConstract => this.constracts = updatedConstract);
  }

  ngOnInit() {
    this.getConstractFromServices();
  }
  delete(constractId: number): void {   
    if(confirm("bạn có chắc chắn muốn xóa không ?")){ 
    this.constractService.deleteconstract(constractId).subscribe(_ => {
      this.constracts = this.constracts.filter(eachConstract => eachConstract.id !== constractId);
    });}
  }
  pageChanged(event){
  
    this.paginaEmployeer.currentPage = event;
  }

}
