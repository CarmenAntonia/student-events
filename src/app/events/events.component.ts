import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../../services/StudentService';
import { Student } from '../../types/Student';
import { Events } from '../../types/Events';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatDatepickerModule, 
    CommonModule, 
    MatSelectModule, 
    MatOptionModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatNativeDateModule
  ],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'], 
  providers: [DatePipe] 
})
export class EventsComponent implements OnInit {
  event: Events = { title: '', description: '', organizer: { name: '', email: '' }, date: '', budget: 0 }; // Ensure organizer is a full object
  private apiUrl = 'https://localhost:7079/api/Events';
  students: Student[] = [];

  constructor(private http: HttpClient, private studentService: StudentService, private datePipe: DatePipe) {} 

  submitEvent() {
    const formattedDate = this.datePipe.transform(this.event.date, 'yyyy-MM-dd');
    this.event.date = formattedDate ? formattedDate : '';
    
    // No need to find the organizer again since ngModel binds the entire object now.

    this.http.post<Events>(this.apiUrl, this.event).subscribe({
      next: (response) => console.log('Event created successfully', response),
      error: (error) => console.error('There was an error!', error)
    });
  }

  ngOnInit() {
    this.fetchStudents();
  }

  fetchStudents() {
    this.studentService.getStudents().subscribe({
      next: (data) => {
        this.students = data;
      },
      error: (error) => {
        console.error('Error fetching students:', error);
      }
    });
  }
}
