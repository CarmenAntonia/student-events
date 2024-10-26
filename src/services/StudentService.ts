import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../types/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = `https://localhost:7079/api/Students`; 

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }
}
