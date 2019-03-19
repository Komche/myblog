import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post: {
    title: string,
    content: string,
    loveIts: number,
    dont_love_it: number,
    created_at: Date
  };
  
}
