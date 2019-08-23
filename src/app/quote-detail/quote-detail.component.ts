import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../Quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
   @Input() quote: Quote
   @Output() isDelete = new EventEmitter<boolean>();
   @Output() quotelike = new EventEmitter<boolean>();
   @Output() quoteunlike = new EventEmitter<boolean>();

  // quoteComplete(complete:boolean){
  //   this.isComplete.emit(complete);
  // }
  quoteDelete(erase:boolean){
    this.isDelete.emit(erase);
  }
  quoteupvote(upvote:boolean){
    this.quotelike.emit(upvote);
  }
  quotedownvote(downvote:boolean){
    this.quoteunlike.emit(downvote);
  }
  constructor() { }

  ngOnInit() {
  }

}
