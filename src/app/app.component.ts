import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BookApi';
  collection=[];
  constructor(){
    for(let i=1;i<100;i++){
      this.collection.push('Angular '+(i)+'');
    }
  }

}
