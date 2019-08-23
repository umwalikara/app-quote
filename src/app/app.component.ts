import { Component } from '@angular/core';
import{Quote} from './Quote'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes-App';
  quotes : Quote[] =[
    {id:1,name:"Umwiza First quote"},
  ]
}
