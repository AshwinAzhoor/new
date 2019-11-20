import { Injectable } from '@angular/core';
import { Product } from '../product';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddproductService {

  constructor(private http:HttpClient) { }

 // readonly APIurl:"http://localhost:8082/demosales";

  addProduct(book: Product){
    let body = JSON.stringify(book);
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    let options = { headers: headers }

    // if(book.pId)
    // {
    //   return this.http.put(environment.APIUrl+'/updateBook', body, options);
    // }else{
      return this.http.post(environment.APIUrl +'/insertSales', body, options);
    }



    
    
  

  // deleteBook(bookId: string){
  //   return this.httpService.delete(this.APIUrl +'/deleteBook/'+ bookId);
  // }

   getBookById(pId: number): Observable<Product>{
     console.log("gf")
    return this.http.get<Product>(environment.APIUrl +'/getSalesById/'+ pId);
    
  }
}

