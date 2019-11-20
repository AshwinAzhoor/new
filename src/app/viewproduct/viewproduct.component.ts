import { Component, OnInit } from '@angular/core';
import { ViewpatientService } from '../viewpatient/viewpatient.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { AddproductService } from '../addproduct/addproduct.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.scss']
})
export class ViewproductComponent implements OnInit {
  products:Product[];
  product=new Product();

  constructor(private viewpro:ViewpatientService,private router:Router,private addpro:AddproductService) { }

  ngOnInit() {
    this.getAllSales();
  }
  getAllSales(){
    this.viewpro.getAllSales().subscribe((response)=>{
      this.products=response;
      console.log(response)
    }, 
    (error) =>{
      console.log(error);
    });
  }
  add(){
    this.router.navigate(['/addproduct'])
  }
  getProById(pId:number){
   
      this.router.navigate(['/addproduct/',+pId]);
     
  }

  }


