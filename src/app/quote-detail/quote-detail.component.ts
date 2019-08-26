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
  quoteDelete(erase: boolean) {
    this.isDelete.emit(erase);
  }
  upvote = 0;
  downvote = 0;
  quoteupvote() {
    this.upvote++;
  }
  quotedownvote() {
    this.downvote++;
  }
  constructor() { }

  ngOnInit() {
  }

}
