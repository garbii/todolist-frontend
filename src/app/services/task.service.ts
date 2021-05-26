import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Task } from '../shared/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskServiceUrl = 'http://localhost:30007/';

  // All Tasks
  Tasks$ = this.http.get<Task[]>(this.taskServiceUrl)
    .pipe(
      tap(data => console.log('Task List', JSON.stringify(data))),
      catchError(this.handleError)
    );

    addTask(task: Task): Observable<Task> {
      return this.http.post<Task>(this.taskServiceUrl + "add", task).pipe(
        catchError(this.handleError)
      );
    }

  constructor(private http: HttpClient) { }

  private handleError(err: any) {
 
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
