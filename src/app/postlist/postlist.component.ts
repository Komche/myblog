import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
  posts: any;
  constructor(public app: AppComponent) {
    this.posts = app.post;
  }

  ngOnInit() {
    this.posts = [
      {
        title: 'Mon premier Post',
        content: 'Lorem ipsum  Ut nisl ipsum, imperdiet ut dictum id, porttitor sed magna. Mauris volutpat diam et imperdiet bibendum.',
        love_it: 0,
        created_at: new Date()
      },

      {
        title: 'Mon deuxième Post',
        content: 'Lorem ipsum  Ut nisl ipsum, imperdiet ut dictum id, porttitor sed magna. Mauris volutpat diam et imperdiet bibendum.',
        love_it: 0,
        created_at: new Date()
      },

      {
        title: 'Mon troisième Post',
        content: 'Lorem ipsum  Ut nisl ipsum, imperdiet ut dictum id, porttitor sed magna. Mauris volutpat diam et imperdiet bibendum.',
        love_it: 0,
        created_at: new Date()
      }
    ];
  }

}
