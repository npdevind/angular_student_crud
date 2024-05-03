import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {}
