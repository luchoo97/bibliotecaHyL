import { Component, OnInit } from '@angular/core';
import {TaskI} from '../models/task.interface';
import {TodoService} from '../services/todo.service';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  
  biblioteca: TaskI[];
 
  constructor(private todoService:TodoService) {
    
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => this.biblioteca = res);
  }
 
}
