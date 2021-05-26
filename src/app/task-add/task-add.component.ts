import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import { Task } from '../shared/models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {

  Task: Task | undefined;
 
  title = new FormControl('');

  note = new FormControl('');

  constructor(private router: Router
    , private taskService: TaskService) {
  }

  createTask() {
    this.taskService.addTask(this.newTask()).subscribe(()=>{
      this.router.navigate(['/tasks']);
    })
  }

  private newTask() {
    return {
        id: 1,
        title: this.title.value,
        note: this.note.value
    };
  }
}
