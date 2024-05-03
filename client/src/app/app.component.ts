import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewComponent } from './post/view/view.component';
import { PostService } from './post/post.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'client';
}
