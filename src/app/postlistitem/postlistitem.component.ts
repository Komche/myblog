import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() created_at: Date;
  @Input() love_it: number;
  constructor() { }

  ngOnInit() {
  }

  loveIt() {
    this.love_it++;
    console.log(this.love_it);
    return this.love_it;
  }

  dontLoveIt() {
    this.love_it--;
    console.log(this.love_it);
    return this.love_it;
  }

}
