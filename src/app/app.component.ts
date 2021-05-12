import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = new FormControl('');
  category = new FormControl(''); 

  array = [
    {
      name: 'Ali',
      catName: 'Human',
    },
    {
      name: 'Ahmed',
      catName: 'Human',
    },
    {
      name: 'Alexa',
      catName: 'Robot',
    },
    {
      name: 'Tom',
      catName: 'Robot',
    },
    {
      name: 'Thompson',
      catName: 'Human',
    },
    {
      name: 'Peter',
      catName: 'Human',
    },
    {
      name: 'Peshawar',
      catName: 'City',
    },
  ]
}
