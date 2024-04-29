import { Component } from '@angular/core';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  constructor(private student: StudentService) {}
  ngOnInit(): void {
    this.student.getAllStudent().subscribe((data) => {
      console.log(data);
    });
  }
}
