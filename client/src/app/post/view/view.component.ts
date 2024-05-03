import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent implements OnInit {
  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  getAllPosts() {
    this.postService.getAll().subscribe({
      next: (res) => {
        console.log('I am here');
        console.log(res);
      },
    });
  }
}
