import { Component, OnInit } from '@angular/core';
import{Quote} from '../Quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes : Quote[] =[
  new Quote (1,"Umwiza First quote","Good and Good",new Date(2019,8,23)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeGoal(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
