import { Component, OnInit } from '@angular/core';
import { Quote } from '../Quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, "Umwiza First quote", "Good and Good", new Date(2019, 8, 23)),
  ];
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isDelete, index) {
    if (isDelete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  quoteLike(index){
    this.quotes[index].upvote+=1;
}
quoteUnlike(index){
  this.quotes[index].downvote+=1;
}
preNum:number;
lastNum:number;
counter:number;
highestUpvote(){
  this.preNum = 0
  this.lastNum = 0
  for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
    this.lastNum = this.quotes[this.counter].upvote;
    if(this.lastNum > this.preNum){this.preNum = this.lastNum}
  }
  return  this.preNum
}
  constructor() { }

  ngOnInit() {
  }

}
