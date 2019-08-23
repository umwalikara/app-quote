import { Component, OnInit } from '@angular/core';
import{Quote} from '../Quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes : Quote[] =[
    {id:1,name:"Umwiza First quote",description:"Good and Good"},
  ];
  constructor() { }

  ngOnInit() {
  }

}
