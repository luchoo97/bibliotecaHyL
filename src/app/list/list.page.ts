import { Component, OnInit } from '@angular/core';
import {TaskI} from '../models/task.interface';
import {TodoService} from '../services/todo.service';
import {NavController} from '@ionic/angular';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  
  biblioteca: TaskI[];
 
  constructor(private todoService:TodoService, public NavController: NavController) {
    
  }

  IrVolver(){
    this.NavController.navigateBack('menu');
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => this.biblioteca = res);
  }
 
}
