import {Component, OnInit} from '@angular/core';
import {Task} from "../shared/models/task.model";
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks: Task[];

  constructor( private taskService: TaskService) {
  }

  ngOnInit() : void{
    this.taskService.Tasks$.subscribe(tasks => {
      this.tasks = tasks as Task[];
    });
    
  }

}
