import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewpatientService {

  constructor(private http:HttpClient) { }



  getAllSales(): Observable<Product[]>{
    console.log("serv")

    return this.http.get<Product[]>(environment.APIUrl +'/viewSales');
  }
}
