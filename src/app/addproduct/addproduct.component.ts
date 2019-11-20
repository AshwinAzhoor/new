import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { AddproductService } from './addproduct.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  product=new Product();

  constructor(private route: ActivatedRoute,private _router:Router,private serv:AddproductService) { }

  ngOnInit() {
    this.route.params.subscribe( params => this.getProById(params['pId']));
  }
  
  addProduct(): void{
    this.serv.addProduct(this.product).subscribe((response)=>{
        console.log(response);
        //this.reset();
       // this.getBooks();
      }, 
      (error)=>{
        console.log(error);
      });
  }

  getProById(pId:number){
    this.serv.getBookById(pId).subscribe((bookData) =>{
      this.product=bookData;
      //this.router.navigate(['/addproduct']);
     // this.getBooks();
      console.log(bookData);
    },
     (error) =>{
      console.log(error);
    });
  }


}
